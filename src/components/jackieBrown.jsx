import React, {Component} from "react";

export default class JackieBrown extends Component {
state = {
    count: 0
};

hanldeIncrement = () => {
    console.log('Your vote has been counted', this)
    this.setState({ count: this.state.count + 1 });

}
render() {
    return (
        
        <div>
            <div class="col" id="jackiebrown" >
                <div class="card">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="wasteland.jpeg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">JACKIE BROWN</text></svg>
                <div class="card-body">
                    <h5 class="card-title">Brent Faiyaz</h5>
                    <p class="card-text">2:49 | Track 16</p>
                    <button type="button" class="btn btn-sm btn-outline-secondary" onClick={this.hanldeIncrement}> Vote </button>
                    <div class="text-end">
                    <small>{this.state.count}</small>
                    </div>
                </div>
                </div>
            </div>
        </div>
    
    );
    
}

}

