import React, { createContext } from 'react'
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { setScore, setName, setPlayers, addPlayer } from './store/actions/wordActions';

const WebSocketContext = createContext(null)
export { WebSocketContext }

class WebSocketProvider extends React.Component {
    state = {
        ws: null
    }

    componentDidMount() {
        const socket = io.connect("http://localhost:8000")
        console.log('ws connected');
        //if user connected successfully
        socket.on("changeNameResponse", (name) => {
            this.props.setName(name);
        })
        //if user score change was successfull
        socket.on("changeScoreResponse", (score) => {
            console.log('changeScoreResponse',score);
            this.props.setScore(score);
        })
        socket.on("newPlayerAdded",(player) =>{
            this.props.addPlayer(player)
        })
        //change players if game-data changed
        socket.on("changePlayers",(players) =>{
            this.props.setPlayers(players)
        })
        const ws = {
            socket: socket,
            changeName: (name) => {
                console.log('got to change name-ws',name);
                socket.emit('changeName', name);
            },
            changeScore: (score) => {
                console.log('got to change score-ws',score);
                socket.emit('changeScore', score);
            }
        }
        this.setState({ws:ws})
    }

    render() {
        return (
            <WebSocketContext.Provider value={this.state.ws}>
                {this.props.children}
            </WebSocketContext.Provider>
        )
    }
}

const mapStateToProps = (state) => {
    var { score, name, players } = state.game
    return {
        score,
        name,
        players
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setScore: score => dispatch(setScore(score)),
        setName: name => dispatch(setName(name)),
        setPlayers: players => dispatch(setPlayers(players)),
        addPlayer: player => dispatch(addPlayer(player))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WebSocketProvider)