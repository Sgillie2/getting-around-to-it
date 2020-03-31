// src/components/month.js

import React from "react";
import "./month.css";

class Month extends React.Component {
    render() {
        return (
            <table style={{ width: "80%" }} class="center">
                <tr>
                    <th className="name">Name</th>
                    <th>Goal</th>
                    <th>Week 1 Update</th>
                    <th>Week 2 Update</th>
                    <th>Week 3 Update</th>
                    <th>Week 4 Update</th>
                    <th>Reflection</th>
                </tr>
                <User></User>
                <User></User>
                <User></User>
            </table>
        );
    }
}

class User extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: 'Atherton Wing',
            goal: 'Suspendisse vestibulum feugiat dui, non blandit nibh ultrices ac. Vestibulum egestas non diam nec tempus. Fusce ut mauris vitae nisl elementum ultricies. Proin libero nibh.',
            week1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a quam eget quam ullamcorper viverra sit amet vitae massa. Aliquam rutrum tincidunt placerat. Pellentesque placerat ipsum id magna tempus semper vitae sed nisi. Sed auctor rutrum lacus. Quisque id felis lacus. Sed egestas magna non felis viverra cursus. Quisque semper, metus quis pellentesque fermentum, mauris nunc semper massa, ut facilisis mauris ex ac purus. Suspendisse blandit mollis nisi ac accumsan. Cras accumsan tincidunt luctus. Nunc ornare nisi quis ex aliquet facilisis.',
            week2: 'Mauris maximus nibh id libero vestibulum, id dictum leo placerat. Donec turpis nunc, sollicitudin nec neque vel, dapibus sagittis sem. Nunc at semper augue. Nullam eu ante sapien. Donec lacinia semper sapien sit amet lacinia. Suspendisse finibus quis est ac lobortis. Etiam mollis ex a velit ultrices, iaculis facilisis mi interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;',
            week3: 'Nullam nibh metus, tincidunt a mauris non, tempus vulputate purus. Curabitur volutpat lorem at rhoncus cursus. Vestibulum euismod urna quis ante semper tempor. Aliquam euismod, sem sed eleifend pretium, diam sem elementum massa, eu convallis ipsum lacus nec urna. Nullam in nunc turpis. Duis dui sem, scelerisque ut leo et, lobortis pellentesque libero. Fusce libero ex, pulvinar nec magna semper, aliquet interdum neque. Nullam consequat risus id est gravida semper.',
            week4: 'Fusce tempor efficitur pellentesque. Cras vehicula, neque sed aliquet facilisis, eros turpis cursus augue, quis dapibus risus purus eu velit. Nam massa arcu, euismod id felis eget, condimentum gravida ex. Sed vitae leo vel purus facilisis molestie in quis dolor. Nam finibus magna eget suscipit ornare. Phasellus gravida dictum pulvinar. Vivamus faucibus eros a ipsum facilisis tempus sed sit amet mauris.',
            reflection: 'Pellentesque finibus ipsum in nunc pellentesque, a imperdiet quam suscipit. Duis mi libero, sagittis quis quam congue, lacinia volutpat libero. Integer lacinia egestas massa, id egestas nisi dictum eget. Suspendisse sagittis varius mollis. Curabitur et sodales lectus, at sodales purus. Donec vehicula fringilla bibendum. Praesent pretium lorem porttitor, vulputate purus eget, dignissim mauris. Vivamus mattis semper maximus. Donec vel pharetra dolor. Suspendisse vitae magna tempor, pharetra tortor vitae, suscipit justo. Vestibulum sodales est dolor, quis auctor diam condimentum quis. Suspendisse eleifend massa et interdum aliquet. Quisque nec leo aliquet, posuere augue non, ultrices libero. Mauris efficitur ipsum nec diam tempor luctus. Sed ut nisl ultricies ipsum lacinia ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        };

        // this.state = {
        //     name: '',
        //     goal: '',
        //     week1: '',
        //     week2: '',
        //     week3: '',
        //     week4: '',
        //     reflection: '',
        // };
    }

    render() {
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

export default Month