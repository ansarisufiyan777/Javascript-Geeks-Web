import React from 'react'
import './Tab.scss'
import uiData from '../../data/ui.json';
import ang from '../../assets/react_grey.png';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Tab extends React.Component {
    constructor(props){
        super(props)
    }
    public routePath = document.location.pathname;
    public getPostContent() {
        return uiData.map((v) => {
            return <div className="tab-item ripple" style={document.location.pathname == v.route ? { backgroundColor: v.color } : {}}>
                <div className="tab-name">
                    <NavLink to={v.route}>
                        <i className={"icon " + v.icon}></i>
                    </NavLink>
                </div>
            </div>
        })
    }

    public updateRoute(v:any) {
        this.routePath = v.route;
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
