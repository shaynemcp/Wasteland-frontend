import React, {Component} from "react";

export default class BadLuck extends Component {
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
            <div class="col" id="Angel" >
                <div class="card">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">BAD LUCK</text></svg>
                <div class="card-body">
                    <h5 class="card-title">Brent Faiyaz</h5>
                    <p class="card-text">2:42 | Track 17</p>
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

