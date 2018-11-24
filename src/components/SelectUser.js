import React from 'react';
import { Link } from 'react-router-dom'

const SelectUser  = (props) => {
  return (
    <select onChange={props.handleOnChange}>
    <option>Select ...</option>
    { props.users && props.users.map((user, index) => {
      return <option value={user.username} key={index}>{user.username}</option>
    })}
    </select>
  );
}

export default SelectUser;
