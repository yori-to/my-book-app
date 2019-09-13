import React from 'react';

class MenuListItem extends React.Component{
    navClick = () => {
        this.props.search(this.props.text);
    };

    render() {
        const shouldBeActive = this.props.isActive;
        if(shouldBeActive){
            return (
                <li className="nav-item" onClick={this.navClick}>
                    <span className="nav-link active">{this.props.text}</span>
                </li>
            );
        } else {
            return (
                <li className="nav-item" onClick={this.navClick}>
                    <span className="nav-link">{this.props.text}</span>
                </li>
            )
        }
    }
}

export default MenuListItem;