import React, {Component} from "react";

export default class Addictions extends Component {
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
            {/* Intro to webpage  */}
            <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-light">Wasteland! the album by Brent Faiyaz</h1>
                    <p class="lead text-muted">Welcome to Wasteland! the album. I've been anticipating this project for two years now and would like to showcase my favorites. On this page, you can vote for yours and we will be able to see which songs are the best!</p>
                    <p>
                        <a href="#" class="btn btn-primary my-2">Like</a>
                        <a href="#" class="btn btn-secondary my-2">Dislike</a>
                    </p>
                    </div>
                </div>
        </div>
    
    );
    
}

}
