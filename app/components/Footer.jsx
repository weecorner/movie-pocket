import React, {Component} from 'react';
import {Link} from 'react-router'
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons"><Link to={`/watch-list`}>Watchlist</Link></FontIcon>;
const favoritesIcon = <FontIcon className="material-icons"><Link to={`/watched-movies`}>WatchedMovies</Link></FontIcon>;
const nearbyIcon = <IconLocationOn />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class Footer extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            icon={recentsIcon}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            icon={favoritesIcon}
            onTouchTap={() => this.select(1)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default Footer