import React from 'react'
import { connect } from 'react-redux';
import { WebSocketContext } from '../WebSocket';

class GetUserDetails extends React.Component {

    state = {
        name: '',
    };

    //update this state
    onChangeName = (event) => {
        this.setState({ name: event.target.value });
    };

    //update global state through context
    submitName = (event) => {
        event.preventDefault();
        this.context.changeName(this.state.name);
    };

    render() {
        return !this.context ? 'loading' : (
            <section>
                <form>
                    <label>
                        Enter Name
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.onChangeName}
                            placeholder="namy name"
                        />
                    </label>
                    <button onClick={(event)=>this.submitName(event)}>join game!</button>
                </form>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    var { name } = state.game
    return {
        name
    }
}
const mapDispatchToProps = {
    
}

GetUserDetails.contextType = WebSocketContext;

export default connect(mapStateToProps, mapDispatchToProps)(GetUserDetails)