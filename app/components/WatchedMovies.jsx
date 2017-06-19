import React from 'react'
import Avatar from 'material-ui/Avatar'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble'

export default function WatchedMovies (props) {
  const user = props.user
  const watchedMovies = props.watchedMovies
  const deleteOne = props.deleteOne

  return (
    <div>
      <List>
        <Subheader>Watched Movies</Subheader>

        {
          watchedMovies && watchedMovies.map(movie => (
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