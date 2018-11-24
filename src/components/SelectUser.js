import React from 'react';
import { Link } from 'react-router-dom'
import { DropdownButton, MenuItem } from 'react-bootstrap';

const SelectUser  = (props) => {
  /*return (
    <select onChange={props.handleOnChange}>
    <option>Select ...</option>
    { props.users && props.users.map((user, index) => {
      return <option value={user.username} key={index}>{user.username}</option>
    })}
    </select>
  );*/

  return (
    <DropdownButton
      bsStyle="primary"
      title="Select User ..."
      id="dropdown-basic-1"
    >
    { props.users && props.users.map((user, index) => {
      return <MenuItem
              eventKey={user.username}
              key={index}
              onSelect={props.handleOnChange}
              >
              {user.username}
              </MenuItem>
    })}
    </DropdownButton>
  )
}

export default SelectUser;
