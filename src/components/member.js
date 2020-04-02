import React from "react";
import "./member.css";


class Member extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            editable: this.props.editable || false,

            name: props.name || '',
            goal: props.goal || '',
            week1: props.week1 || '',
            week2: props.week2 || '',
            week3: props.week3 || '',
            week4: props.week4 || '',
            reflection: props.reflection || '',
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        let newState = Object.assign({}, this.state, { editable: false });
        this.setState(newState);
    }

    render() {
        if (this.state.editable) {
            return (
                <tr>
                    <td className="name">{this.state.name}</td>
                    <td><Editor value={this.state.goal} onSubmit={this.onSubmit} onChange={(event) => this.setState({goal: event.target.value})} placeholder="A few sentences about what you want to do" /></td>
                    <td><Editor value={this.state.week1} onSubmit={this.onSubmit} onChange={(event) => this.setState({week1: event.target.value})} placeholder="Progress, Setbacks, and Discoveries" /></td>
                    <td><Editor value={this.state.week2} onSubmit={this.onSubmit} onChange={(event) => this.setState({week2: event.target.value})} placeholder="Progress, Setbacks, and Discoveries" /></td>
                    <td><Editor value={this.state.week3} onSubmit={this.onSubmit} onChange={(event) => this.setState({week3: event.target.value})} placeholder="Progress, Setbacks, and Discoveries" /></td>
                    <td><Editor value={this.state.week4} onSubmit={this.onSubmit} onChange={(event) => this.setState({week4: event.target.value})} placeholder="Progress, Setbacks, and Discoveries" /></td>
                    <td><Editor value={this.state.reflection} onSubmit={this.onSubmit} onChange={(event) => this.setState({reflection: event.target.value})} placeholder="What you learned, and what you'd do differntly next time" /></td>
                </tr>
            )
        } else {
            return (
                <tr>
                    <td className="name">{this.state.name}</td>
                    <td>{this.state.goal}</td>
                    <td>{this.state.week1}</td>
                    <td>{this.state.week2}</td>
                    <td>{this.state.week3}</td>
                    <td>{this.state.week4}</td>
                    <td>{this.state.reflection}</td>
                </tr>
            );
        }
    }
}

function Editor(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <div>
                <textarea
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                />
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    );
}

export default Member;