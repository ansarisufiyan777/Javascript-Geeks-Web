import React from 'react';
import { Tab, Menu, Label, Grid } from 'semantic-ui-react'
import UI from '../../data/ui.json';
import postData from '../../data/post.json';
import { render } from 'react-dom';
import './Home.css'
import Post from '../post/Post.js';

const Home: React.FC = () => {
    const getPanes = () => {
        var panes = [];
        for (let i in UI) {
            panes.push(
                {
                    menuItem: { key: UI[i].tabName, icon: UI[i].icon },
                    render: () => {
                        return postData.map(v => {
                            return (
                        <Grid columns={3} divided>
                                    <Grid.Row>
                                        <Post></Post>
                                    </Grid.Row>
                                </Grid>
                            )
                        })
                    }
                }
            );
        }
        return panes;
    }
    return (
        <Tab menu={{ inverted: true, attached: 'bottom', tabular: false }} panes={getPanes()} />
    )
}


export default Home;