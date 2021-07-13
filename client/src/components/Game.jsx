import React from 'react'
import { connect } from 'react-redux';
import { WebSocketContext } from '../WebSocket';
import UserCmp from "./UserCmp";
import OpponentCmp from "./OpponentCmp";

class Game extends React.Component {

    render() {
        return !this.context ? 'loading' : (
            <section>
                <UserCmp />
                <OpponentCmp />
            </section>
        )
    }
}

const mapStateToProps = (state) => {
}
const mapDispatchToProps = {
}

Game.contextType = WebSocketContext;

export default connect(mapStateToProps, mapDispatchToProps)(Game)