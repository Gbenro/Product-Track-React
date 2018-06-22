import React from 'react';
import {Menu, Input} from 'semantic-ui-react';
import {Link} from '../routes';

export default() =>{
    return (
        <div>
          <Menu style={{marginTop:'10px'}} >
            <Link route ="/"> 
            
           <a className= 'item'>
           Home
           </a>
            </Link>

            <Link route ="/trackPages/addProduct"> 
           <a className= 'item'>
          Add Product
           </a>
            </Link>

            <Link route ="/"> 
           <a className= 'item'>
          Add Location
           </a>
            </Link>

            <Link route ="/trackPages/trackProduct"> 
           <a className= 'item'>
           Track Product
           </a>
            </Link>
            
            <Menu.Menu position='right'>
              <Menu.Item>
                <Input icon='search' placeholder='Search 0x00' />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          </div>
    );
};