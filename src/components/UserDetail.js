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
          <div className="user-header">
            <h4>User Details for {user.username}</h4>
          </div>
          <div className="user-details text-xs-left">
            <label>Name:</label>&nbsp;<span>{user.name}</span><br />
            <label>Age:</label>&nbsp;<span>{user.age}</span><br />
            <label>Hobbies:</label> &nbsp;<span>{user.hobbies}</span> <br/>
            <h4>Weight Chart:</h4>
            <WeightChart weights={user.weight}  width={400} height={400}/>
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
  return {
    user: users[ownProps.match.params.username]
  };
}

export default connect(mapStateToProps, { fetchUser })(UserDetail);
