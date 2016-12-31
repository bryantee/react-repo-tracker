import React from 'react'
import StarRater from './star-rater'
import {connect} from 'react-redux';
import * as actions from '../actions/index'

export class Repository extends React.Component {
  constructor(props) {
    super(props);
    this.changeRating = this.changeRating.bind(this);
  }

  componentDidMount() {
    console.log(`Repo Name: ${this.props.repository.name}`)
    this.props.dispatch(
      actions.fetchDescription(this.props.repository.name)  // Not using action creator. Why?
    );
  }

  changeRating(rating) {
    this.props.dispatch(actions.rateRepo(this.props.repository.name, rating))
  }

  render() {
    return (
      <div className="repository">
      {this.props.repository.name} - {this.props.repository.description}
      &nbsp;
      <StarRater rating={this.props.repository.rating}
                 onChange={this.changeRating} />
      </div>
    );
  }
}

// NOTE:
// Why connect with Repository?
// Shouldn't props be coming from repository-list component?
// mapStateToProps function?
export default connect()(Repository);
