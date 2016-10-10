import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import PortfolioEditItem from './portfolioEditItem';
import {
  Button,
} from 'jam-components';
import { setPortfolioToStore } from '../../actions/actions';

class PortfolioEdit extends React.Component {
  constructor(props) {
    super(props);
    this.portfolioItems = props.items;
    this.state = { items: props.items || [{}] };
    this.add = this.add.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  add() {
    this.setState({
      items: [...this.state.items, {}],
    });
  }

  updateItem(id, updates) {
    if (this.portfolioItems[id] === undefined) {
      this.portfolioItems.push(updates);
    } else {
      this.portfolioItems[id] = updates;
    }
  }

  render() {
    return (
      <div>
        <Button color="red" click={this.add}>Add</Button>
        {this.state.items.map((value, i) =>
          <PortfolioEditItem
            key={i}
            id={i}
            defaults={value}
            update={this.updateItem}
            handle={this.handleChange}
          />
        )}
        <Button
          color="green"
          click={() =>
            this.props.dispatch(setPortfolioToStore(this.props.token, this.portfolioItems))
          }
        >Save</Button>
      </div>
    );
  }
}

PortfolioEdit.propTypes = {
  dispatch: PropTypes.func.isRequired,
  items: PropTypes.array,
  token: PropTypes.string,
};

function mapStateToProps(state) {
  const items = state.get('portfolio') || List();
  return {
    token: state.get('token'),
    items: items.toJS(),
  };
}

export default connect(mapStateToProps)(PortfolioEdit);
