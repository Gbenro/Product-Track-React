import React, {Component}from 'react';
import factory from "../ethereum/factory";
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/layout';
import {Link} from '../routes'


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
        Add a new product to track on the blockchain
        </Card.Description>
       
      </Card.Content>
      <Card.Content extra>
      <Link route ="/trackPages/addProduct">
      <a>
          <Button fluid primary
          content = "Add Product"
          icon= "add circle"
          />
          </a>
        </Link>
         
          
      
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
    <Link route ="/trackPages/addLocation">
      <a>
      <Button fluid primary
      content = "Add Location"
      icon= "map marker alternate"
      />
         </a>
        </Link>  
      
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
        <Link route= "/trackPages/trackProduct">
        <a>
        <Button fluid primary
        content = "Track Product"
        icon= "find"
        />
        </a>
        </Link>
        
        </Card.Content>
    </Card>
  </Card.Group>
)
}
 
 render(){

    return( 
        <Layout>
        <div >
        <h1> Welcome To Product Tracking on the Ethereum Blockchain</h1>
        {this.renderIndex()} 
        </div>
        </Layout>
    )
 }

}
export default ProductTrackIndex;