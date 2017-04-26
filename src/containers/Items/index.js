import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Items.css';

export class Items extends Component {

  renderList = () => {
    const { items } = this.props;

    return items.map((item) => (
      <li
        key={item.id}
        className={'Items.list-item'}
        onClick={() => console.log('Added to store!')}
      >
        <img role="presentation" src={item.link}/>
        <span>{item.title}</span>
      </li>
    ))
  }

  render() {
    return (
      <ul className={'Items-list'}>
       { this.renderList() }
      </ul>
    )
  }
}

// Map Redux state to props
const mapStateToProps = (reduxState) => ({
  items: reduxState.items
});

// Connect takes in a function and returns another function
export default connect(mapStateToProps)(Items)
