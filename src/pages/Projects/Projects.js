import * as React from "react";
import Markdown from 'react-markdown';

const markdown = "## Coming soon";

export default class Projects extends React.Component {
    render() {
        return (
            <div style={{ 'text-align': "center" }}>
                <Markdown source={markdown} />
            </div>
        )

    }
}