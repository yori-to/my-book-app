import React from 'react';
// import Alert from './Alert';

class SearchForm extends React.Component{
    constructor() {
        super();
        this.state = {
            inputText: ""
        };
    }

    handleInput = e => {
        this.setState({ inputText: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        const inputText = this.state.inputText;  
        if (inputText === "" || inputText === undefined) {
            alert("Please enter some text!");
            return;
        }
        this.props.search(this.state.inputText);
        this.setState({ inputText: "" })
    };


    render(){
        return(
        <div className="col-md-4 d-flex justify-content-end align-items-center searchbar">
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    onChange={this.handleInput}
                    placeholder="Search"
                    onChange={this.handleInput}
                    value={this.state.inputText}
                />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>

        );
    }
}

export default SearchForm;