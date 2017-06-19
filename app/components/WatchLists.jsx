import React from 'react'
import Avatar from 'material-ui/Avatar'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble'

export default function WatchLists (props) {
  const user = props.user
  const watchLists = props.watchLists
  const deleteOne = props.deleteOne

  return (
    <div>
      <List>
        <Subheader>Watchlist</Subheader>

        {
          watchLists && watchLists.map(movie => (
            <ListItem
              primaryText={movie.movie.name}
              leftAvatar={<Avatar src={movie.movie.image}/>}
              rightIcon={<CommunicationChatBubble onClick = {()=> deleteOne(movie)} />}
            />
          ))
        }
      </List>
    </div>
  
    )
}