import web3 from './web3';
import TrackFactory from './build/TrackFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(TrackFactory.interface),
  '0x69A8035EFf8bEf3C2b579905877d2FFaA377c7d8'
);

export default instance;
