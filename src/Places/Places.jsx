import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import PlaceCard from './PlaceCard/PlaceCard';

export default class Places extends Component {
    render = () => {
    const { allPlaces } = this.props
    return(
        <Card.Group>
            {allPlaces.map( (placeData, index) => 
                <PlaceCard key={index} data={placeData} />
            )}         
        </Card.Group>
    )}
}