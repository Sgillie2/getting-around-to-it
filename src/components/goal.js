// src/components/goal.js

import React from "react";
import "./goal.css"


class Goal extends React.Component {

    render() {
        return (
            <form>
                <div>
                    <textarea
                        className="Goal"
                        placeholder="One or two sentences that describe what you want to do">
                    </textarea>
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        )
    }
}

export default Goal;