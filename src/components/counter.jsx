import React, {Component} from "react";

export default class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag 1', 'tag2', 'tag3']
    };

    render() {
        return (
            <div>
             {this.renderTags()}
            </div>
        );
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p> There are no tags!</p>;
        return    <ul>{this.state.tags.map(tag => <li key = {tag}>{tag}</li>)}</ul>
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
