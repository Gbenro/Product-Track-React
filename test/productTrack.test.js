const assert = require ('assert');
const ganache = require ('ganache-cli');
const Web3 = require ('web3');
const web3 = new Web3 (ganache.provider());

const compiledFactory = require('../ethereum/build/TrackFactory.json');
const compiledProductTrack = require('../ethereum/build/ProductTrack.json');

let accounts;
let factory;
let productAddress;
let product;

beforeEach(async () =>{
    accounts= await web3.eth.getAccounts();
  
    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data: compiledFactory.bytecode})
    .send({from: accounts[0], gas:'3000000'});// use this version whenever you want to deploy a new contract

    await factory.methods.createProductToTrack('Corn flakes','Cereals','20020','with nuts and honey', 'Nestle').send({
      from :accounts[0],
      gas:'1000000'
     });
  
     [productAddress] = await factory.methods.getDeployedTracks().call();
  
     product = await new web3.eth.Contract(
       JSON.parse(compiledProductTrack.interface), productAddress); // use this version whenever you have already deployed the contract and want web3 to load at a particular address
     
  });
  describe ('Products', () =>{
    it('deploys a factory and a campaign', () =>{

        assert.ok (factory.options.address);
        assert.ok(product.options.address);
    })

    it ("Checks if it has the right secret ", async ()=>{
       
        let nProduct = await product.methods.newProduct.call();
  
        assert('with nuts and honey', nProduct.secret);
    })
    it ("Checks if product is from Manufacturer ", async ()=>{

        let nProduct = await product.methods.newProduct.call();
        assert('Manufacturer', nProduct.productLocation);
    })

    it("add new location" ,async ()=>{
        await product.methods.AddNewLocation(200, "Wholesaler").send({
            from: accounts[0],
            gas: '1000000'
          });
          let nProduct = await product.methods.newProduct.call();
          assert('Wholesaler', nProduct.productLocation);

    })
    
    it("checking all product details", async()=>{
        
        let nProduct = await product.methods.newProduct.call();
        assert("Corn flakes", nProduct.name);
        assert('cereals', nProduct.productType);
        assert(20020, nProduct.productId);
        assert("with nuts and honey", nProduct.secret);
        assert("Wholesaler",nProduct.productLocation)
    })
  });