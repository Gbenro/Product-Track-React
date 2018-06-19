import React , {Component} from 'react';
import Layout from'../../components/layout';
import { Button, Form, Message} from 'semantic-ui-react'
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
class AddProduct extends Component{

    state= {
        product_name:'',
        product_type:'',
        product_number:'',
        product_secret: '',
        product_location:'',
        errorMessage:''

    };

    onSubmit = async (event) =>{
        event.preventDefault();
        try{
        const accounts = await web3.eth.getAccounts();
        await factory.methods.
        createProductToTrack(
            this.state.product_name, 
            this.state.product_type,
            this.state.product_number,
            this.state.product_secret,
            this.state.product_location
        ). send({
            from: accounts[0]
        });
    }catch (err){
            this.setState({errorMessage:err.message});
    }


    };


    render(){
        return( 
            <Layout>
            <h2> Add Product</h2>

            <Form onSubmit ={this.onSubmit} error= {!!this.state.errorMessage}>
                <Form.Field>
                <label>Product Name</label>
                <input 
                placeholder='product Name' 
                value= {this.state.product_name}
                onChange= {event =>this.setState({product_name:event.target.value})}
                />
                </Form.Field>

                <Form.Field>
                <label>Product Type</label>
                <input 
                placeholder='product Type'
                value= {this.state.product_type}
                onChange= {event =>this.setState({product_type:event.target.value})}
                />
                </Form.Field>
                <Form.Field>
                <label>Product Number </label>
                <input
                 placeholder= 'product Number' 
                 value= {this.state.product_number}
                onChange= {event =>this.setState({product_number:event.target.value})}
                />
                </Form.Field>
                <Form.Field>
                <label>Secret </label>
                <input 
                placeholder= 'product Secret'
                value= {this.state.product_secret}
                onChange= {event =>this.setState({product_secret:event.target.value})}
                />
                </Form.Field>

                <Form.Field>
                <label>Location</label>
                <input 
                placeholder= 'product Location'
                value= {this.state.product_location}
                onChange= {event =>this.setState({product_location:event.target.value})}
                />
                </Form.Field>
                <Message error header= "Oops!" content = {this.state.errorMessage}/>
                <Button type='submit'>Submit</Button>
            </Form>
            </Layout>
        );
    }
}
export default AddProduct;