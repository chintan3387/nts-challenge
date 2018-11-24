import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../actions/userActions';
import WeightChart from './WeightChart';
import SelectUser from './SelectUser';
import _ from 'lodash';


class UserList extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    if(this.props.users) {
      const userList = _.toArray(this.props.users);
      return userList.map((user, index) => {
        return (
          <tr key={index}>
            <td><Link to={`/userdetail/${user.username}`}>{user.username}</Link></td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.hobbies}</td>
            <td>{<WeightChart weights={user.weight} width={300} height={200} />}</td>
          </tr>
        );
      })
    } else {
      return (
        <tr>
          <td>dummy username</td>
          <td>dummy name</td>
          <td>dummy age</td>
          <td>dummy hobby</td>
          <td>weight chart</td>
        </tr>
      );
    }
  }

  handleOnChange =(eventKey , e) => {
    this.props.history.push(`/userdetail/${eventKey}`)
    this.props.fetchUsers();
  }

  render() {
    const userList = _.toArray(this.props.users);
    return (
      <>
      <h3> NTS Conding Challenge</h3>
      <div>
        <SelectUser users={userList} handleOnChange={this.handleOnChange} />
      </div>
      <table className="user-list" align="center">
        <thead>
          <tr>
            <th>Username</th>
            <th> Name</th>
            <th>Age</th>
            <th>Hobbies </th>
            <th>Weight Chart </th>
          </tr>
        </thead>
        <tbody>
          {this.renderUsers()}
        </tbody>
      </table>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps, { fetchUsers })(UserList);
