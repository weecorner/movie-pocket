import React from 'react'
import {Link} from 'react-router'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
}

export default function Movies (props) {
  const movies = props.movies
  const tilesData = movies.list
  const addOne = props.addOne
  tilesData.sort(function(a, b){return 0.5 - Math.random()});
  return (
    <div style={styles.root}>
      <GridList style={styles.gridList} cols={2.2} cellHeight={500}>
        {tilesData.map((tile) => (
          
            <GridTile
              key={tile.image}
              title={<Link to={`/movies/${tile.id}`}>{tile.name}</Link>}
              actionIcon={<IconButton onTouchTap = {()=>addOne(tile)}><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
              titleStyle={styles.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
              <img src={tile.image} />
            </GridTile>
          
        ))}
      </GridList>
    </div>
  )

}