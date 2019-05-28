import React from 'react';
import UI from '../../data/ui.json';
import postData from '../../data/post.json';
import { render } from 'react-dom';
import './Home.scss'
import Post from '../post/Post';
import Tab from '../tab/Tab';

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <Post />
                <Tab />
            </div>
        )
    }
}


export default Home;