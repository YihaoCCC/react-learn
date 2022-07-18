import { Component } from "react";


const style = {
    width: '50px',
    fontSize: '18px'
}

function SonB (props) {
    const { sendMessage,children } = props
    const msg = 'this is come from SonB'
    
    return(
        <div>
            this is SonB chlidren
            {children}
            <button onClick={() => sendMessage(msg)}> sendMessage</button>        
        </div>
    )
}

export default class TestComponent extends Component {
    state = {
        count: 0,
        name: 'cyh',
        age: 18,
        height: 1.88
    }
    getMessage = (msg) => {
        console.log(msg);
    }
    render() {    
        return (
            <div style={style}>  
                <SonB sendMessage={this.getMessage}>
                    {this.state.name}
                </SonB>
                Test:  {this.state.name + this.state.age + this.state.height }
            </div>
        )
    }
}


