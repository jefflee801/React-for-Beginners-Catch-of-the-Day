import React from "react";
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Order extends React.Component {
	renderOrder = (key) => {
		const fish = this.props.fishes[key];
  		const count = this.props.order[key];
  		const isAvaliable = fish && fish.status === 'avaliable';
  		const transitionOptions = {
        classNames: "order",
        key,
        timeout: { enter: 500, exit: 500 }
      };
      //make sure the fish is avaliable loaded before we continue
      if(!fish) return null;

      if(!isAvaliable) {
  			return (
          <CSSTransition { ...transtionOptions}>
    				<li key={key}>
    				  Sorry {fish ? fish.name : "fish"} is no longer avaliable
    				</li>
          </CSSTransition>
  			);
  		}

		return (
      <CSSTransition { ...transtionOptions}>
  			<li key={key}>
          <span>
            <TransitionGroup component="span" className="count">
            <CSSTransition
              className="count"
    			     key={count}
               setTimeout={{ enter: 500, exit: 500 }}
                >
                span>{count}</span>
              </CSSTranstion>
             </TransitionGroup>
              lbs {fish.name}
    			    {formatPrice(count * fish.price)}
              <button onClick={() => this.props.removeFromOrder(key)}>
                &times;
              </button>
            </span>
  			</li>
      </CSSTransition>
		);
	};

  render() {
  	const orderIds = Object.keys(this.props.order);
  	const total = orderIds.reduce((prevTotal, key) => {
  		const fish = this.props.fishes[key];
  		const count = this.props.order[key];
  		const isAvaliable = fish && fish.status === 'avaliable';
  		if(isAvaliable) {
  			return prevTotal + count * fish.price;
  		}
  		return prevTotal;
  	}, 0);

    return (
    	<div className="order-wrap">
	    	<h2>Order</h2>
	    	<TransitionGroup component="ul" className="order">
        {orderIds.map(this.renderOrder)}
        </TransitionGroup>	    	
    		<div className="total">
    			Total:
    			<strong>{formatPrice(total)}</strong>
    		</div>
    	</div>
    );
  }
}

export default Order;
