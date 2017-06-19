import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'



export default function Movie (props) {
  const movie = props.selectedMovie
  const addOne = props.addOne
  console.log(movie, "<<<<<<<<<<<<<")

  return (

    <Card>
      <CardHeader
        title={movie.name}
        subtitle={movie.year}
      />
      <CardMedia
        overlay={<CardTitle title={movie.name} subtitle={movie.year} />}
      >
        <img src={movie.image} alt="" />
      </CardMedia>
      <CardTitle title={movie.name} subtitle={movie.year} />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      <CardActions>
        <FlatButton label="Add To Watchlist" onClick = {()=> addOne(movie)}/>
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
  )
}