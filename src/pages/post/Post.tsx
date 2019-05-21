import React from 'react'
import postData from '../../data/post.json';
import './Post.scss'
import DOMPurify from 'dompurify'

class Post extends React.Component {
    public postData() {
        return postData.map((v) => {
            return (
                <div className="post-parent">
                    <div className="post-container">
                        <div className="main-image">
                            <img src={'https://react.semantic-ui.com/images/avatar/large/matthew.png'} />
                        </div>
                        <div className="description" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(v.caption)}}>
                        
                        </div>
                        <div className="tags">
                            
                        </div>
                        <div className="meta-data">
                            <div className="meta-image"></div>
                            <div className="meta-text-container">
                                <div className="meta-title"></div>
                                <div className="meta-description"></div>
                                <div className="meta-soure"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="post-outlet">
                {this.postData()}
            </div>
        )
    }
}

export default Post
