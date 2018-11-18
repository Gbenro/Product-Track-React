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
        this.setState({loading:true});
        try{
        Router.pushRoute(`/trackPages/${this.state.productAddress}`);
        }catch(err){
            this.setState({errorMessage:err.message});
        }
        //this.setState({loading:false});
    } 

    
    onChange=(event)=>{
        this.setState({productAddress:event.target.value})
    }

    render(){
        return (
            <Layout>
                <Form onSubmit ={this.onSubmit} error= {!!this.state.errorMessage} style={{marginTop:'30px'}}>
                <Form.Field>
                <h2>Enter Product Contract Address</h2>
                <input 
                placeholder= 'Product Address'
                value= {this.state.productAddress}
                onChange= {this.onChange}
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