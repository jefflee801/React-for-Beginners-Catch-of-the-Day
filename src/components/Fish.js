import React from "react";
import { formatPrice } from "../helpers";


class Fish extends React.Component {
	handleClick = () => {
		this.props.addToOrder(this.props.key);
	}
	render() {
		const { image, name, price, desc, status } = this.props.details;
		const isAvaliable = status === 'avaliable';
		return (
			<li className="menu-fish">
				<img src={image} alt={name} />
			<h3 className="fish-name">
				{name}
				<span className="price">{formatPrice(price)}</span>
			</h3>
			<p>{desc}</p>
			<button disabled={!isAvaliable} onClick={this.handleClick}>
			{isAvaliable ? 'Add To Order' : 'Sold out!'}</button>
			</li>
		);
	}	
}

export default Fish;