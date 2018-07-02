import web3 from './web3';
import TrackFactory from './build/TrackFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(TrackFactory.interface),
  '0x32Aa2D73EDEE4E2F49479B10b860a4F136E61693'
);

export default instance;
