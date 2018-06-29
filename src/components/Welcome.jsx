import React, {Component} from 'react';

class Welcome extends Component {
    render () {
        return (
            <div>
                <button className="navigation" onClick={()=> {this.props.onPlayClick()}}>{"Play"}</button>
                <button className="navigation" onClick={() => {this.props.onAboutClick()}}>{"About"}</button>
            </div>
        );
    }
}

export default Welcome;