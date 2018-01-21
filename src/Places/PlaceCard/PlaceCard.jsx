import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Transition, Rating, Modal, Image } from "semantic-ui-react";

export default class PlaceCard extends Component {
  static propTypes = {
	data: PropTypes.shape({
		name: PropTypes.string.isRequired,
		picture: PropTypes.string.isRequired,
		rating: PropTypes.number,
		priceRange: PropTypes.string.isRequired
	}).isRequired
  };

  render = () => {
	const { picture, name, priceRange, rating } = this.props.data;

	const style = {
	  backgroundImage: `url(${picture})`,
	  height: "300px",
	  backgroundSize: "cover",
	  backgroundPosition: "center",
	  backgroundRepeat: "no-repeat"
	};

	return (
	  <Transition animation="fade up" duration={500} transitionOnMount>
		<Modal
		  closeIcon
		  closeOnDocumentClick
		  onActionClick={this.handleClose}
		  dimmer="blurring"
		  trigger={
			<Card centered>
			  <div className="image" style={style} />
			  <Card.Content>
				<Card.Header>{name}</Card.Header>
				<Card.Meta>
				  <span>{priceRange}</span>
				</Card.Meta>
			  </Card.Content>
			  <Card.Content extra>
				<Rating icon="heart" defaultRating={rating} maxRating={5} />
			  </Card.Content>
			</Card>
		  }
		  size="fullscreen"
		>
		  <Modal.Content>
			<Image src={picture} centered />
		  </Modal.Content>
		</Modal>
	  </Transition>
	);
  };
}
