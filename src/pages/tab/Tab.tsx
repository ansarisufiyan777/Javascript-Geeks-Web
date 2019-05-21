import React from 'react'
import './Tab.scss'
import uiData from '../../data/ui.json';

class Tab extends React.Component {
    public getPostContent() {
        return uiData.map((v) => {
            return <div className="tab-item">
                <div className="tab-name">{v.tabName}</div>
            </div>

        })
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
