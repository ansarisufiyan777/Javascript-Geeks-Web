import React from 'react';
import UI from '../../data/ui.json';
import postData from '../../data/post.json';
import { render } from 'react-dom';
import './Home.scss'
import Post from '../post/Post';
import Tab from '../tab/Tab';
import Search from '../search/Search';
import { BrowserRouter as Router } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Search />
                <Post />
            </div>
        )
    }
}


export default Home;