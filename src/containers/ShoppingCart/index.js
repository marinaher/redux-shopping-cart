import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions';
import './ShoppingCart.css';

export class ShoppingCart extends Component {
  renderShoppingCart = () => {
    const { shoppingCart, removeFromCartDispatch } = this.props;
    return shoppingCart.map((item) => {
      return (
        <li 
        key={item.id} 
        className={'SC-list-item'} 
        onClick={() => removeFromCartDispatch(item.id)}>
          <img alt="shoppingcartImg" src={item.link} className={'SC-image'}/>
          {item.title}
        </li>
      )
    })
  }

  render() {
    return (
      <div className={'SC-Container'}>
        <h2 className={'SC-Title'}>Shopping Cart</h2>
          <ul className={'SC-list'}>
            {this.renderShoppingCart()}
          </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ shoppingCart }) => ({
  shoppingCart
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCartDispatch: (id) => dispatch(removeFromCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);