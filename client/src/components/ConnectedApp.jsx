import React, { Component } from 'react'
import WaitingRoom from "./WaitingRoom";
import GetUserDetails from "./GetUserDetails";
import Game from "./Game";

import Store from '../store/store'; 
import { connect } from 'react-redux';
 class ConnectedApp extends Component {
    render() {
        return (
            <div className="App">
            {/* if no name entered < GetUserDetails >
              else  if no game in action < WaitingRoom >
                    else- < Board > */}
            {
              !this.props.name ? < GetUserDetails />
                : !this.props.isPlaying ? < WaitingRoom />
                  : < Game />
            }
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    var { score, name, isPlaying } = state.game
    return {
      score,
      name,
      isPlaying
    }
  }
  const mapDispatchToProps = {
  }
  
  // App.contextType = WebSocketContext;//not sure if needed
  
  export default connect(mapStateToProps, mapDispatchToProps)(ConnectedApp)
  // export default App;