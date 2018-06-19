import React from 'react';
import {Menu, Input} from 'semantic-ui-react';

export default() =>{
    return (
        <div>
          <Menu style={{marginTop:'10px'}} >
            <Menu.Item name='Home' 
            //active={activeItem === 'home'} onClick={this.handleItemClick} 
            />
            <Menu.Item
              name='Add Product'
              //active={activeItem === 'AddProduct'}
              //onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Track Product'
              //active={activeItem === 'TrackProduct'}
              //onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Add Location'
             // active={activeItem === 'AddLocation'}
              //onClick={this.handleItemClick}
            />
            <Menu.Menu position='right'>
              <Menu.Item>
                <Input icon='search' placeholder='Search 0x00' />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          </div>
    );
};