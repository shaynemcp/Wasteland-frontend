import React, {Component} from "react";

export default class Counter extends Component {
    state = {
        count: 0,
        count1: 0,
        count2: 0,
        count3: 0,
        count4: 0,
        count5: 0,
        count6: 0,
        count7: 0,
        count8: 0,
        count9: 0,
        tags: ['tag 1', 'tag2', 'tag3']
    };


    hanldeIncrement = () => {
        console.log('Your vote has been counted', this)
        this.setState({ count: this.state.count + 1 });
        this.setState({ count1: this.state.count1 +1});
        console.log("hi")

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
                        <a href="#" class="btn btn-primary my-2"> Like the album</a>
                        <a href="#" class="btn btn-secondary my-2">Dislike the</a>
                    </p>
                    </div>
                </div>
                {/* 3 Thumbnails */}
                
                <div class="container">

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col">
                    <div class="card shadow-sm">
                    <svg width="100%" height="225" xmlns="https://www.lovablevibes.co/brent-faiyaz-shares-wasteland-ft-drake-alicia-keys-the-neptunes-tyler-the-creator/" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">ANGEL </text></svg>

                    <div class="card-body">
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary"> {this.showVoteButton()}</button>
                        </div>
                        <small class="text-muted"> {this.state.count} </small>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">GRAVITY</text></svg>

                    <div class="card-body">
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">{this.showVoteButton()}</button>
                        </div>
                        <small class="text-muted">{this.state.count1}</small>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">ALL MINE</text></svg>

                    <div class="card-body">
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small class="text-muted">9 mins</small>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">WASTING TIME</text></svg>

                    <div class="card-body">
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary"> {this.showVoteButton()} </button>
                        </div>
                        <small class="text-muted"> {this.state.count3}</small>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">ROLLING STONE</text></svg>

                    <div class="card-body">
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary"> {this.showVoteButton()} </button>
                        </div>
                        <small class="text-muted"> {this.state.count4} </small>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">FYTB</text></svg>

                    <div class="card-body">
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary"> {this.showVoteButton()} </button>
=                        </div>
                        <small class="text-muted"> {this.state.count5} </small>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">ADDICTIONS</text></svg>

                    <div class="card-body">
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">{this.showVoteButton()}</button>
                        </div>
                        <small class="text-muted"> {this.state.count6} </small>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">ROLL MODEL</text></svg>

                    <div class="card-body">
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">{this.showVoteButton()}</button>
                        </div>
                        <small class="text-muted">{this.state.count7}</small>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">JACKIE BROWN</text></svg>

                    <div class="card-body">
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">{this.showVoteButton()}</button>
                        </div>
                        <small class="text-muted">{this.state.count8}</small>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>


                {/* Vote Button */}
                { this.state.tags.length === 0 && 'Please create a new tag'}
                {/* {this.renderTags()} */}
            </div>
        );
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p> There are no tags!</p>;
        return    <ul>{this.state.tags.map(tag => <li key = {tag}> {this.state.count} {tag} <button onClick={this.hanldeIncrement}> + </button></li>)}</ul>
    }

    showVoteButton(){
        if (this.state.tags.length === 0) return <p> There are no tags!</p>
        return <button onClick={this.hanldeIncrement}> Vote </button>
    }

    getBadgeClasses() {
        let classes = "bg m-2 bg-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'zero' : count;
    }
}

