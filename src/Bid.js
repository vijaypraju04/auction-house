import React from 'react'
import {Link} from 'react-router-dom';
import Auth from './Auth.js';
import { Image, List } from 'semantic-ui-react'

const Bid = (props) => {
  const userName = props.users.filter(user => user.id === props.bid.user_id)



  return (
    <div>
    <List celled>
    <List.Item>
      <List.Content>
        <List.Header>{userName[0].username}</List.Header>
        ${props.bid.amount}.00
      </List.Content>
    </List.Item>
  </List>
</div>

  )
}

export default Bid;
