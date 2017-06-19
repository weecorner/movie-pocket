import React from 'react'
import {Link} from 'react-router'
import Avatar from 'material-ui/Avatar'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble'
import {Row} from 'react-bootstrap'


const styles = {
  col6: {
    position: 'relative',
    width: '50%',
    padding: '15px',
    display: 'inline-block',
    },
  
}

export default function User(props) {

  const user = props.user
  const watchLists = props.watchLists
  const watchedMovies = props.watchedMovies
  const deleteOne = props.deleteOne
  const deleteWatchedOne = props.deleteWatchedOne
  const addOne = props.addOne
  const addWatchedOne = props.addWatchedOne
  

  return (
    <div>
    <Row>
      <div style={styles.col6}>
        <List>
          <Subheader>Watchlist</Subheader>

          {
            watchLists && watchLists.map(movieToWatch => (
              <ListItem
                primaryText={movieToWatch.movie.name}
                leftAvatar={<Avatar src={movieToWatch.movie.image}/>}
                rightIcon={<CommunicationChatBubble onClick = {()=> deleteOne(movieToWatch)} />}
              />
            ))
          }
        </List>
      </div>
      <div style={styles.col6}>
        <List>
          <Subheader>Watched Movies</Subheader>

          {
            watchedMovies && watchedMovies.map(WatchedMovie => (
              <ListItem
                primaryText={WatchedMovie.movie.name}
                leftAvatar={<Avatar src={WatchedMovie.movie.image}/>}
                rightIcon={<CommunicationChatBubble onClick = {()=> deleteWatchedOne(WatchedMovie)} />}
              />
            ))
          }
        </List>
      </div>
      </Row>
    </div>
    )
}