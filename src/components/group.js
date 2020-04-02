import React from "react";
import "./group.css";

class Group extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            groupName: props.groupName || "Group Name",
            members: props.members || [],
        }
    }

    render() {
        return (
            <div>
            <h2>{this.state.groupName}</h2>
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
                {this.state.members}
            </table>
            </div>
        );
    }
}

export default Group