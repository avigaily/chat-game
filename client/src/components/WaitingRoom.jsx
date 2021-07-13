import React from 'react'
import { connect } from 'react-redux';
import { WebSocketContext } from '../WebSocket';
import UserCmp from "./components/UserCmp";
import OpponentCmp from "./components/OpponentCmp";

class WaitingRoom extends React.Component {

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

WaitingRoom.contextType = WebSocketContext;

export default connect(mapStateToProps, mapDispatchToProps)(WaitingRoom)