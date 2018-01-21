import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react'

export default class MenuBar extends Component {
    state = {
        activeItem: 'home',
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render = () => {
        const { activeItem } = this.state;
        return(<Menu color="orange" inverted>
            <Menu.Menu position='right'>
            <Menu.Item>
                <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
            </Menu.Menu>
        </Menu>)
    }
}