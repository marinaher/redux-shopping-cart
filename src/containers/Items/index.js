import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions';
import './Items.css';

export class Items extends Component {

  renderList = () => {
    const { items, addToCartAction } = this.props;

    return items.map((item) => (
      <li
        key={item.id}
        className={'Items-list-item'}
        onClick={() => addToCartAction(item)}
      >
        <img role="presentation" alt={item.title} className={'Items-image'} src={item.link}/>
        <span>{item.title}</span>
      </li>
    ))
  }

  render() {
    return (
      <div className={'Items-Container'}>
        <h2 className={'List-Title'}>Items List</h2>
        <ul className={'Items-list'}>
          { this.renderList() }
        </ul>
      </div>
    )
  }
}

// Map Redux state to props
// Limited Access to Redux store
const mapStateToProps = (reduxState) => ({
  items: reduxState.items
});

// mapDispatchToProps -> Wraps our actions into dispatch function and passed down as props
// dispatch -> goes to every single reducer and finds the reducer in which the type matches the type of set up w/in the reducer
const mapDispatchToProps = (dispatch) => ({
  addToCartAction: (item) => dispatch(addToCart(item))
});

// Connect takes in a function and returns another function
export default connect(mapStateToProps, mapDispatchToProps)(Items)
