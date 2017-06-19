import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const styles = {
  root: {
    height: '50em',
    width:'35em',
    justifyContent: 'center',
    margin: '20px',
    border: '30px'
  } 
}



export default function Movie (props) {
  const movie = props.selectedMovie
  const addOne = props.addOne
  const addWatchedOne = props.addWatchedOne
  

  return (

    <Card>
      <CardHeader
        title={movie.name}
        subtitle={movie.year}
      />
      <CardMedia style={styles.root}
        overlay={<CardTitle  />}
      >
        <img src={movie.image} alt="" />
      </CardMedia>
      <hr />
      <hr />
      <CardTitle title={movie.name} subtitle={movie.year} />
      {/*<CardText>
      {actorFullname}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>*/}
      <CardActions>
        <FlatButton label="Add To Watchlist" onClick = {()=> addOne(movie)}/>
        <FlatButton label="Add To Watched Movies" onClick ={()=> addWatchedOne(movie)}/>
      </CardActions>
    </Card>
  )
}