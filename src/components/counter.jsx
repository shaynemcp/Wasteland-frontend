import React, {Component} from "react";

export default class Counter extends Component {
    state = {
        count: 0,
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

                        <a href="#" class="btn btn-primary my-2">Like</a>
                        <a href="#" class="btn btn-secondary my-2">Dislike</a>

                    </p>
                    </div>
                </div>
                {/* 3 Thumbnails */}
                
                <div class="container">

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col">
                    <div class="card shadow-sm">

                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">ANGEL</text></svg>

                    <div class="card-body">
                        <p class="card-text"> 3:38 | 19 </p>
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <p> {this.showVoteButton()}</p>
                        </div>
                        <small class="text-muted"> {this.state.count} </small>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm">
                    
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">ALL MINE</text></svg>


                    <div class="card-body">
                        <p class="card-text">3:36 | 06</p>
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">

                            <p>{this.showVoteButton()}</p>
                            
                        </div>
                        <small class="text-muted">{this.state.count}</small>

                        </div>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm">

                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">WASTING TIME</text></svg>


                    <div class="card-body">
                        <p class="card-text"> 5:02 | 09 </p>
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <p>{this.showVoteButton()}</p>
                          
                        </div>
                        <small class="text-muted">{this.state.count}</small>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card shadow-sm">

                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">ROLLING STONE</text></svg>


                    <div class="card-body">
                        <p class="card-text"> 2:42 | 10</p>
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">

                            <p> {this.showVoteButton()} </p>

                        </div>
                        <small class="text-muted">{this.state.count}</small>

                        </div>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm">

                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">FYTB ft. Joony</text></svg>


                    <div class="card-body">
                        <p class="card-text"> 3:19 | 11</p>
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">

                            <p>{this.showVoteButton()}</p>
                        </div>
                        <small class="text-muted">{this.state.count}</small>

                        </div>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm">

                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">DEAD MAN WALKING</text></svg>


                    <div class="card-body">
                        <p class="card-text"> 4:07 | 13</p>
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">

                            <p>{this.showVoteButton()}</p>
                        </div>
                        <small class="text-muted">{this.state.count}</small>

                        </div>
                    </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card shadow-sm">

                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">ADDICTIONS </text></svg>


                    <div class="card-body">
                        <p class="card-text"> 3:12 | 14</p>
                        <p class="card-text"> Brent Faiyaz / Tre'Amani</p>
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">

                            <p>{this.showVoteButton()}</p>
                        </div>
                        <small class="text-muted">{this.state.count}</small>

                        </div>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm">

                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">JACKIE BROWN</text></svg>


                    <div class="card-body">
                        <p class="card-text"> 2:14 | 16 </p>
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <p>{this.showVoteButton()}</p>
                        </div>
                        <small class="text-muted">{this.state.count}</small>

                        </div>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow-sm">

                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">BAD LUCK</text></svg>


                    <div class="card-body">
                        <p class="card-text">2:42 | 17</p>
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <p>{this.showVoteButton}</p>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small class="text-muted">{this.state.count}</small>

                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>


                {/* Vote Button */}
                { this.state.tags.length === 0 && 'Please create a new tag'}
            </div>
        );
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p> There are no tags!</p>;
        return    <ul>{this.state.tags.map(tag => <li key = {tag}> {this.state.count} {tag} <button onClick={this.hanldeIncrement}> + </button></li>)}</ul>
    }

    showVoteButton(){
        if (this.state.tags.length === 0) return <p> There are no tags!</p>
        return <button type="button" class="btn btn-sm btn-outline-secondary" onClick={this.hanldeIncrement}> Vote </button>
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

