import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUser } from '../actions/userActions';
import WeightChart from './WeightChart';


class UserDetail extends Component {
  componentDidMount() {
    const { username } = this.props.match.params;
    this.props.fetchUser();
  }

  render() {
    const { user } = this.props;

    if(user) {
      return (
        <>
          <div className="text-xs-left">
          <Link to="/" className="btn btn-primary"> Back To List</Link>
          </div>
          <div>
            <h3>User Details for {user.username}</h3>
            <label>Age:</label>&nbsp;<span>{user.age}</span><br />
            <label>Hobbies:</label> &nbsp;<span>{user.hobbies}</span> <br/>
            <h4>Weight Chart:</h4>
            <WeightChart weights={user.weight} />
          </div>
        </>
      );
    } else {
      return (
        <div> Loading ... </div>
      );
    }
  }
};

function mapStateToProps({ users }, ownProps) {
  debugger;
  return {
    user: users[ownProps.match.params.username]
  };
}

export default connect(mapStateToProps, { fetchUser })(UserDetail);
