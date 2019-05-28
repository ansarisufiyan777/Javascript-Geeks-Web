import React from 'react'
import './Tab.scss'
import uiData from '../../data/ui.json';
import ang from '../../assets/react_grey.png';

class Tab extends React.Component {
    public getPostContent() {
        return uiData.map((v) => {
            return <div className="tab-item ripple" onClick={(e) => this.onTabClick(v)} style={{ backgroundColor: v.color }}>
                <div className="tab-name">
                    <img src={v.icon}></img>
                </div>
            </div>

        })
    }

    onTabClick(v: any) {
        console.log(v)
    }
    render() {
        return (
            <div className="tab-outlet">
                <div className="tab-container">
                    {this.getPostContent()}
                </div>
            </div>
        )
    }
}

export default Tab
