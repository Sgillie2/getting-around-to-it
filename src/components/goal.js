import React from "react";
import "./goal.css"


class Goal extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Goal has been submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <textarea
                        placeholder="One or two sentences that describe what you want to do"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        )
    }
}

export default Goal;