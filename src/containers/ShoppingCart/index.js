import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ShoppingCart.css';

export class ShoppingCart extends Component {
  renderShoppingCart = () => {
    const { shoppingCart } = this.props;
    return shoppingCart.map((item) => {
      return (
        <li key={item.id} className={'SC-list-item'} onClick={() => console.log('remove from cart')}>
          <img src={item.link} />
          {item.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className={'SC-list'}>
        {this.renderShoppingCart()}
      </ul>
    )
  }
}

const mapStateToProps = ({ shoppingCart }) => ({
  shoppingCart
})

export default connect(mapStateToProps)(ShoppingCart);