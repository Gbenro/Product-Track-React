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
        product_location:'',
        locationID:'',
        locationName:''
    }
  

    onSubmit= async (event)=>{
        event.preventDefault();
        this.setState({loading:true});
        console.log(this.state.productAddress);
        try {
             const accounts = await web3.eth.getAccounts();
     const productTrack = ProductTrack(this.state.productAddress);
      await productTrack.methods.AddNewLocation(this.state.locationID,this.state.locationName).send({
          from:accounts[0]
      });
            
        } catch (error) {
            this.setState({errorMessage:error.message});
        }
        


           Router.pushRoute(`/trackPages/${this.state.productAddress}`);
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
                onChange= {event =>this.setState({productAddress:event.target.value})}
                />
                </Form.Field>
                <Form.Field>
                <h2>Enter Location ID</h2>
                <input 
                placeholder= 'Location ID'
                value= {this.state.locationID}
                onChange= {event =>this.setState({locationID:event.target.value})}
                />
                </Form.Field>
                <Form.Field>
                <h2>Enter Location Name</h2>
                <input 
                placeholder= 'Location Name'
                value= {this.state.locationName}
                onChange= {event =>this.setState({locationName:event.target.value})}
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