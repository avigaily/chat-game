import React from 'react'
import { connect } from 'react-redux';
import { WebSocketContext } from '../WebSocket';

class UserCmp extends React.Component {

    render() {
        return !this.context ? 'loading' : (
            <section>
                <p>{this.props.name}</p>
                <p>{this.props.score}</p>
                <button onClick={() => {
                    // lets socket know of score change
                    this.context.changeScore(1)
                }
                }>change score</button>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    var { score, name } = state.game
    return {
        score,
        name
    }
}
const mapDispatchToProps = {
}

UserCmp.contextType = WebSocketContext;

export default connect(mapStateToProps, mapDispatchToProps)(UserCmp)