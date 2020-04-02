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
    }

    renderEditor(field, placeholder) {
        return (
            <Editor
                value={this.state[field]}
                placeholder={placeholder}
                onSubmit={() => { this.setState({editable: false}) }}
                onChange={(event) => { this.setState( Object.fromEntries([[field, event.target.value]]) ) }}
            />
        );
    }

    render() {
        if (this.state.editable) {
            return (
                <tr>
                    <td className="name">{this.state.name}</td>
                    <td>{this.renderEditor("goal", "A few sentences about what you'd like to do")}</td>
                    <td>{this.renderEditor("week1", "Progress, Setbacks, and Discoveries")}</td>
                    <td>{this.renderEditor("week2", "Progress, Setbacks, and Discoveries")}</td>
                    <td>{this.renderEditor("week3", "Progress, Setbacks, and Discoveries")}</td>
                    <td>{this.renderEditor("week4", "Progress, Setbacks, and Discoveries")}</td>
                    <td>{this.renderEditor("reflection", "Progress, Setbacks, and Discoveries")}</td>
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