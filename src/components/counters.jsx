import React, {Component} from "react";
import Addictions from "./addictions";
import AllMine from "./allMine";
import Angel from "./angel";
import BadLuck from "./badLuck";
import JackieBrown from "./jackieBrown";
import RollingStone from "./rollingStone";
import "./counters.css"

export default class Counter extends Component {
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
                <link rel="stylesheet" href="counters.css" />
                <ul className="cardlist">
                    <li><AllMine /></li>
                    <li><Angel /></li>
                    <li><Addictions /></li>
                    <li><BadLuck /></li>
                    <li><JackieBrown /></li>
                    <li><RollingStone /></li>
                </ul>
                
               
            </div>
        );
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p> There are no tags!</p>;
        return    <ul>{this.state.tags.map(tag => <li key = {tag}> {this.state.count} {tag} <button onClick={this.hanldeIncrement}> + </button></li>)}</ul>
    }

    showVoteButton() {
        if (this.state.tags.length === 0) return <p> There are no tags!</p>
        return <button type="button" class="btn btn-sm btn-outline-secondary" onClick={this.hanldeIncrement}> Vote </button>
    }
}

