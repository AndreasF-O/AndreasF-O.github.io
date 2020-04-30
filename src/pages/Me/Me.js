import * as React from "react";
import Markdown from 'react-markdown';
import avatar from './me.jpg';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
const itemProps = {
    backgroundColor: 'mono200',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};
const middleItemProps = {
    ...itemProps,
    overrides: {
        Block: {
            style: ({ $theme }) => ({
                backgroundColor: 'mono100',
            }),
        },
    },
};

const markdown = "# **About me** \n \
\
Electrical Engineer working with autonomous vehicles at[Zenuity](www.zenuity.com)\
\
\n \n Other Interest are Music, coding, etc etc";

export default () => {
    return (
        <div>
            <FlexGrid flexGridColumnCount={3}
                flexGridColumnGap="scale800"
                flexGridRowGap="scale800"
                marginBottom="scale800">
                <FlexGridItem {...itemProps}><div><img src={avatar} /></div></FlexGridItem>
                <FlexGridItem {...middleItemProps} />
                <FlexGridItem {...itemProps}><div><Markdown source={markdown} /></div></FlexGridItem>
            </FlexGrid>
        </div>
    )
}