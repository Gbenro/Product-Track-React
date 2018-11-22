pragma solidity^0.4.17;

/// @title ProductTrack factory contract
/// @author Gbenro Adesoye
/// @notice A factory contract for the main productTrack contract
contract TrackFactory{
    address[] public deployedTracks;
    address public newTrack ;

    ///@notice This function creates a product to track by calling the constructor of the productTrack contract.
    ///@param name The name of the product to track
    ///@param productType The type of product to be tracked
    ///@param productId The product's ID 
    ///@param secret Secret associated to the product
    ///@param producer the Product's manufacturer indicating products origin
    function createProductToTrack(string name,string productType, uint productId, string secret, string producer) public  {
        
        newTrack = new ProductTrack(name, productType,productId, secret, producer);
        deployedTracks.push(newTrack);
        
    
    }
     ///@notice gets the addresses of products that are deployed/tracked on the blockchain
    ///@return the array of addresses that is deployed by this contract
    function getDeployedTracks() public view returns(address[]){
        return deployedTracks;
    }
    
}
///@title ProductTrack Contract
///@author Gbenro Adesoye
///@notice A contract that tracks the movement of products from manufacturers to consumers and everywhere in between.
contract ProductTrack {
//information about each location
    struct Location{

        string Name;
        uint LocationId;
        uint PreviousLocationId;
        uint Timestamp;

    }
//information about each product
    struct Product{
        
        string name;
        string productType;
        uint productId;
        string secret;
        string productLocation;
    
    }


    mapping (uint =>Location) Trail;// mapping of the trail to a location 
    uint8 TrailCount = 0;
    Product public newProduct;
  
    ///@notice contructor function to initialize the product tracking with product info
    ///@param name The name of the product to track
    ///@param productType The type of product to be tracked
    ///@param productId The product's ID 
    ///@param secret Secret associated to the product
    ///@param producer the Product's manufacturer indicating products origin
    constructor (string name,string productType, uint productId, string secret, string producer) public {
    
  
        newProduct.name = name;
        newProduct.productType = productType;
        newProduct.productId = productId;
        newProduct.secret = secret;
        AddNewLocation(100,producer);
        

    
    

    }

    ///@notice Add a new location to the product.This is when product change location eg from manufacturer to warehouse of distributor
    ///@param LocationId The Id of the location
    ///@param Name The name of the location e.g name of distributor or retail store
    function  AddNewLocation  (uint LocationId,string Name) public {
        Location memory newLocation;
        newLocation.Name = Name;
        newLocation.LocationId = LocationId;
        newLocation.Timestamp = now;
        if (TrailCount!=0){
            newLocation.PreviousLocationId = Trail[TrailCount].LocationId;
        }
        Trail[TrailCount] = newLocation;
        TrailCount++;
        newProduct.productLocation = Name;
    }
    ///@notice gets the  current number of places the product has been
    ///@return returns the number of places the product has been to a uint
    function GetTrailCount() public view returns (uint8){

        return TrailCount;
    }

    ///@notice gets the current location of a product
    ///@param TrailNo the trail number, eg 2 2nd place the product has been
    ///@return  name of the location
    ///@return the Id of the location
    ///@return previous location 
    ///@return time it reached the current location
    function GetLocation(uint8 TrailNo) public  view returns (string, uint, uint, uint)
    {
        return (Trail[TrailNo].Name, Trail[TrailNo].LocationId, Trail[TrailNo].PreviousLocationId, Trail[TrailNo].Timestamp);

    }
    ///@notice get the time it took to get from previous location to current location
    ///@return the time difference from previous location 
    function GetTimeDiff(uint8 TrailNo) public view returns (uint)
    {
        if (TrailNo==0){
            
            return 0;
        }else{
            
            return Trail[TrailNo].Timestamp - Trail[TrailNo - 1].Timestamp;
        
        }
    }
    ///@notice gets the  previous location
    ///@return returns the previous location Id
    ///@return the name of previous location
    function GetPrevLocation( uint8 TrailNo) public view returns (uint, string)
    {
        
        if (TrailNo==0){
        
            return (0, "Origin");
    }else{
        
            return (Trail[TrailNo - 1].LocationId, Trail[TrailNo - 1].Name);
        
    }
}


