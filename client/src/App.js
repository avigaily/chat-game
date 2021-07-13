import React from 'react';
import socketIOClient from "socket.io-client";
import './style/App.css';
import WebSocketProvider from './WebSocket';
import { Provider } from 'react-redux'
import Store from './store/store'; 
import { connect } from 'react-redux';
import Game from "./components/Game";
import ConnectedApp from "./components/ConnectedApp";
import WaitingRoom from "./components/WaitingRoom";
import GetUserDetails from "./components/GetUserDetails";

export default class App extends React.Component {
  state = {
    socket: null
  }

  componentDidMount() {
    // connect to server
    const socket = socketIOClient("http://localhost:8000");
    socket.on("connected", data => {
      this.setState({ socket: socket })
    });
  }

  render() {
    return !this.state.socket ? 'loading' : (
      <Provider store={Store} >
        <WebSocketProvider>
          <ConnectedApp/>
          {/* <div className="App">
            {/* if no name entered < GetUserDetails >
              else  if no game in action < WaitingRoom >
                    else- < Board > */}
            {/* {
              !this.props.name ? < GetUserDetails />
                : !this.props.isPlaying ? < WaitingRoom />
                  : < Game />
            }
          </div> */} 
        </WebSocketProvider>
      </Provider>
    );
  }
}

// const mapStateToProps = (state) => {
//   var { score, name, isPlaying } = state.game
//   return {
//     score,
//     name,
//     isPlaying
//   }
// }
// const mapDispatchToProps = {
// }

// // App.contextType = WebSocketContext;//not sure if needed

// export default connect(mapStateToProps, mapDispatchToProps)(App)
// // export default App;
