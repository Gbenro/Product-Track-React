pragma solidity^0.4.17;


contract TrackFactory{
    address[] public deployedTracks;
    
    
    function createProductToTrack(string name,string productType, uint productId, string secret, string producer) public{
        
       address newTrack =  new ProductTrack(name, productType,productId, secret, producer);
        deployedTracks.push(newTrack);
        
    }
    
    function getDeployedTracks() public view returns(address[]){
        return deployedTracks;
    }
    
}

contract ProductTrack {

struct Location{

    string Name;
    uint LocationId;
    uint PreviousLocationId;
    uint Timestamp;

}

struct Product{
    
    string name;
    string productType;
    uint productId;
    string secret;
  string productLocation;
    
}


mapping (uint =>Location) Trail;
uint8 TrailCount = 0;
  Product public newProduct;
  

constructor (string name,string productType, uint productId, string secret, string producer) public {
    
  
    newProduct.name = name;
    newProduct.productType= productType;
    newProduct.productId= productId;
    newProduct.secret= secret;
    AddNewLocation(100,producer);
    

    
    

}


function  AddNewLocation  (uint LocationId,string Name) public {
    Location memory newLocation;
    newLocation.Name= Name;
    newLocation.LocationId = LocationId;
    newLocation.Timestamp= now;
    if (TrailCount!=0){
        newLocation.PreviousLocationId= Trail[TrailCount].LocationId;
    }
    Trail[TrailCount]= newLocation;
    TrailCount++;
   newProduct.productLocation= Name;
}
function GetTrailCount() public view returns (uint8){

    return TrailCount;
}

function GetLocation(uint8 TrailNo) public  view returns (string, uint, uint, uint)
{
    return (Trail[TrailNo].Name, Trail[TrailNo].LocationId, Trail[TrailNo].PreviousLocationId, Trail[TrailNo].Timestamp);

}
function GetTimeDiff(uint8 TrailNo) public view returns (uint)
{
     if (TrailNo==0){
        
        return 0;
    }else{
        
       return Trail[TrailNo].Timestamp - Trail[TrailNo -1].Timestamp;
    
}
}
    function GetPrevLocation( uint8 TrailNo) public view returns (uint, string)
    {
        
        if (TrailNo==0){
        
        return (0, "Origin");
    }else{
        
        return  (Trail[TrailNo-1].LocationId,  Trail[TrailNo-1].Name);
        
    }
}


}