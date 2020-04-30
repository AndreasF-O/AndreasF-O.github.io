import * as React from "react";
import { Block } from "baseui/block";
import Story from "./component/Story";

const stories = [
    {
        key: "First",
        title: "Setting up my Website",
        summary: "Creation of my own website using Base web from Uber",
        text: <p><p>Been working on this for a day now during the corona period here in sweden. Been thinking about creating
        my own website for a while now and when I stumbled upon Ubers Base web I tought that now it is time to finally create one.
        Not to comfortable with javascript (or react for that matter) either, so this seems like a good training session as well. This is me just testing
        out to write a story, hopefully it seems okay!</p> <p>Currently these stories are written inside the function,
        going to find a better solution going forward. But this will suffice for now</p></p>

    },
    {
        key: 'q3f',
        title: 'First',
        summary: 'Quick Summary',
        text: 'A  bunch of text that is going to be shown in a pop up, should probably be divided into  multiple paragraphs but hey'
    },
    {
        key: 'svlmw4',
        title: 'Second',
        summary: 'Quick Summary',
        text: 'A  bunch of text that is going to be shown in a pop up, should probably be divided into  multiple paragraphs but hey'
    },
    {
        key: 'svö',
        title: 'Third',
        summary: 'Quick Summary',
        text: 'A  bunch of text that is going to be shown in a pop up, should probably be divided into  multiple paragraphs but hey'
    },
    {
        key: 'mlfv',
        title: 'Fourth',
        summary: 'Quick Summary',
        text: 'A  bunch of text that is going to be shown in a pop up, should probably be divided into  multiple paragraphs but hey'
    }
]
let create_stories = stories.map(story => <Story title={story.title} summary={story.summary} text={story.text} key={story.key} />)
//let create_story = Story(stories[0].title, stories[0].summary, stories[0].text);
export default class StoryGrid extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Block
                    display="grid"
                    gridTemplateColumns="repeat(auto-fill, minmax(280px, 1fr))"
                    justifyItems="center"
                    gridGap="scale1000"
                    margin="scale1000"
                >
                    {create_stories}
                </Block>
            </React.Fragment>
        )
    }
}