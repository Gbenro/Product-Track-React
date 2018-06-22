import React , {Component} from 'react';
import Layout from'../../components/layout';
import { Button, Form, Message, Loader} from 'semantic-ui-react'
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import {Router} from '../../routes';
import ProductTrack from '../../ethereum/ProductTrack';
import ViewProduct from './viewProduct';


class TrackProduct extends Component{
    state={

        productAddress:'',
        loading :false,
        product_location:''
    }
  
 
    onSubmit= async (event)=>{
event.preventDefault();


 this.setState({loading:true, address:productAddress});

renderViewProduct(productAddress)
      /*  try{
            const productTrack = ProductTrack(ProductAddress);
            const productDetail = await productTrack.methods.newProduct().call();
            console.log (productDetail);
    }catch (err){
            this.setState({errorMessage:err.message});
    }

this.setState({loading:false, address:ProductAddress});

*/
    } 

    renderViewProduct(address){
        return ViewProduct(address);
    }
    

    render(){
        return (
            <Layout>
                <Form onSubmit ={this.onSubmit} error= {!!this.state.errorMessage}>
                <Form.Field>
                <label>Product's Contract Address</label>
                <input 
                placeholder= 'product Address'
                value= {this.state.productAddress}
                onChange= {event =>this.setState({productAddress:event.target.value})}
                />
                </Form.Field>
                <Message error header= "Oops!" content = {this.state.errorMessage}/>
                <Button loading={this.state.loading} type='submit'>Submit</Button>
            </Form>
        
            </Layout>
        );
    }

}

export default TrackProduct;