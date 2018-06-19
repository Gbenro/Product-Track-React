import React, {Component}from 'react';
import factory from "../ethereum/factory";
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/layout';


class ProductTrackIndex extends Component {
static async getInitialProps(){
    const tracks = await factory.methods.getDeployedTracks().call();
return{tracks};

}

renderIndex(){


return(
    <Card.Group>
    <Card>
      <Card.Content>
        <Card.Header>Add New Product</Card.Header>
        <Card.Description>
        Add a new product to track on the blockachain
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
       
          <Button fluid primary
          content = "Add Product"
          icon= "add circle"
          />
            
         
          
      
      </Card.Content>
    </Card>

   <Card>
      <Card.Content>
        <Card.Header>Add New Location</Card.Header>
        <Card.Description>
       Update a product's location
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
       
      <Button fluid primary
      content = "Add Location"
      icon= "map marker alternate"
      />
          
      
      </Card.Content>
    </Card>

    <Card>
        <Card.Content>
        <Card.Header>Track a Product</Card.Header>
        <Card.Description>
      Track the location history of a product
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
        
        <Button fluid primary
        content = "Track Product"
        icon= "find"
        
        />
            
        
        </Card.Content>
    </Card>
  </Card.Group>
)
}
 
 render(){

    return( 
        <Layout>
        <div >
        <h1> Welcome To the Product Tracking on the Ethereum Blockchain</h1>
        {this.renderIndex()} 
        </div>
        </Layout>
    )
 }

}
export default ProductTrackIndex;