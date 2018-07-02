import web3 from './web3';
import ProductTrack from './build/ProductTrack.json';


export default(address)=>{
console.log(address);
    return new web3.eth.Contract(
        JSON.parse(ProductTrack.interface),
        address);

    
};