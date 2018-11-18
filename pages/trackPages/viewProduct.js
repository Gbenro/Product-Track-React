import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';
import Layout from '../../components/layout';
import { Button, Form, Message, Loader} from 'semantic-ui-react'
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import ProductTrack from '../../ethereum/ProductTrack';




class ViewProduct extends Component{
    

   static async getInitialProps(props){
     
        const productTrack = ProductTrack(props.query.address);
       
        const productDetail = await productTrack.methods.newProduct().call();

        console.log(productDetail[0]);
          
        return {
            product_name:productDetail[0],
            product_type:productDetail[1],
            product_number:productDetail[2],
            product_secret: productDetail[3],
            product_location:productDetail[4],
            address: props.query.address
    
        };
        
    }

    renderCards(){
        const {
            product_name,
        product_type,
        product_number,
        product_secret,
        product_location,
        address
        
        
        } = this.props;
        
        const items= [
            {
                header: "Product Name",
                description: product_name
            },
            {
                header: "Product Type",
                description: product_type
            },
            {
                header: "Product Number",
                description:product_number
            },
            {
                header: "Product Secret",
                description: product_secret, 
                style:{font:"20px"}
            },
            {
                header: "Product Location",
                description:product_location
            },
            {
                header: "Product Address",
                description: address,
                style:{overflowWrap:'break-word'}
               
            }
        ];
   
        return <Card.Group items={items} />;
      
    }



render(){

    return(
        <Layout>
        <h3> Product Details </h3>
        {this.renderCards()}
        </Layout>

    )
}
}

export default ViewProduct;
