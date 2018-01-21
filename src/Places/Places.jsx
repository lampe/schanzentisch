import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Card } from "semantic-ui-react";
import PlaceCard from "./PlaceCard/PlaceCard";

export default class Places extends Component {

  static propTypes = {
    allPlaces: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      picture: PropTypes.string,
      rating: PropTypes.number,
      priceRange: PropTypes.string,
    })).isRequired,
  }

  renderCards= () => {
    const { allPlaces } = this.props;
    return(
      allPlaces.map((placeData) => (
        <PlaceCard key={Math.random()} data={placeData} />
    )))
  }

  render = () => (
    <Card.Group>
      {this.renderCards()}
    </Card.Group>
  )
}
