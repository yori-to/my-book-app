import React from 'react';
import SearchForm from './SearchForm';
import MenuListItem from './MenuListItem';

class Header extends React.Component {
    handleSearch = text => {
        this.props.search(text);
    };

    render() {
        const listItemsText = ['JavaScript', 'Java', 'React', 'HTML', 'CSS', 'C++'];
        const currentCategory = this.props.currentCategory;
        const actualListItems = listItemsText.map(item => {
            if(currentCategory === item){
                return (
                    <MenuListItem
                    text={item}
                    search={this.handleSearch}
                    isActive={true}
                    key={item}
                    />
                );
            } else {
                return (
                    <MenuListItem
                    text={item}
                    search={this.handleSearch}
                    isActive={false}
                    key={item}
                    />
                );
            }
        });
        return (
            <div>
            <div className="nav-scroller py-1 mb-2">
                <ul className="nav nav-pills">
                    <li className="">
                        <h5 className="nav-link">Topics:</h5>
                    </li>
                    {actualListItems}
                </ul>
            </div>
            <div className="row">
                <div className="col-md-8 site-title">
                    <h5>Available books for "{this.props.currentCategory}"</h5>
                </div>
                <SearchForm search={this.handleSearch} />
            </div>
            </div>
        );
    }
}

export default Header;