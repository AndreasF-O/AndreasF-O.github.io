import * as React from "react";
import Markdown from "react-markdown";
import { Navigation } from 'baseui/side-navigation';
import { withRouter } from 'react-router';
import { Block } from 'baseui/block';

const nav = [
    {
        title: <p>Select Project</p>,
        itemId: 'projects'
    },
    {
        title: 'Covid 19 dashboard',
        itemId: 'covid19',
    }
];

const markdown = "# **Projects** \n\n On the side there  is  a list of different projects  i've done the last couple of years"
const coming = "# **Coming soon**"
// grid-template-columns: 1fr 2fr;
function Projects(location) {
    const [selectedOption, setOption] = React.useState('projects')
    const handleClick = (item) => {
        console.log(item)
        setOption(item);
    }

    // let history = useHistory();
    return (
        <div>
            <Block
                display='grid'
                gridTemplateColumns="1fr 6fr"
                gridGap="scale1000"
                height="scale1000"
            >
                <Navigation
                    items={nav}
                    activeItemId={location.pathname}
                    onChange={({ event, item }) => {
                        event.preventDefault();
                        handleClick(item);
                    }}
                />
                <div>
                    {!selectedOption ?
                        null :
                        selectedOption.itemId === "projects" ? (
                            <Markdown source={markdown} />
                        ) : selectedOption.itemId === "covid19" ? (
                            <Markdown source={coming} />
                        ) : (<Markdown source={markdown} />)
                    }
                </div>

            </Block>

        </div>

    );
};
export default Projects;