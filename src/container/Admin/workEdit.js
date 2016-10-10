import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import WorkEditItem from './workEditItem';
import {
  Button,
} from 'jam-components';
import { setWorkToStore } from '../../actions/actions';

class WorkEdit extends React.Component {
  constructor(props) {
    super(props);
    this.workItems = props.items;
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
    if (this.workItems[id] === undefined) {
      this.workItems.push(updates);
    } else {
      this.workItems[id] = updates;
    }
  }

  render() {
    return (
      <div>
        <Button color="red" click={this.add}>Add</Button>
        {this.state.items.map((value, i) =>
          <WorkEditItem
            key={i}
            id={i}
            defaults={value}
            update={this.updateItem}
            handle={this.handleChange}
          />
        )}
        <Button
          color="green"
          click={() => this.props.dispatch(setWorkToStore(this.props.token, this.workItems))}
        >Save</Button>
      </div>
    );
  }
}

WorkEdit.propTypes = {
  dispatch: PropTypes.func.isRequired,
  items: PropTypes.array,
  token: PropTypes.string,
};

function mapStateToProps(state) {
  const items = state.get('work') || List();
  return {
    token: state.get('token'),
    items: items.toJS(),
  };
}

export default connect(mapStateToProps)(WorkEdit);
