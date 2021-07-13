import React, { Component } from 'react'
import { connect } from 'react-redux';

class OpponentCmp extends Component {

    state = {
        opponent: null
    }

    componentDidMount() {
        this.updateOpponent()
    }

    componentDidUpdate() {
        //if no opponent or different opponent - update
        if (this.state.opponent) {
            let {opponent} = this.state
            if(opponent !== this.props.players[opponent.id]){
                this.updateOpponent()
            }
        }else this.updateOpponent()
    }

    updateOpponent = () => {
        var players = this.props.players
        for (const id in players) {
            this.setState({ opponent: players[id] })
            break
        }
    }

    render() {
        return !this.props ? 'loading' :
            !this.state.opponent ? <p>no opponent</p> : (
                <section>
                    <p>{this.state.opponent.name}</p>
                    <p>{this.state.opponent.score}</p>
                </section>
            )
    }
}

const mapStateToProps = (state) => {
    var { players, name } = state.game
    return {
        players,
        name
    }
}
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(OpponentCmp)