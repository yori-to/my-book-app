import React from "react";
import noimage from "../book-placeholder.png";
import { Link } from 'react-router-dom';

class BookDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            toggle: false
        };
    }

    activateToggle = () => {
        const currentState = this.state.toggle;
        if(currentState) {
            this.setState({ toggle: false });
        } else {
            this.setState({ toggle: true });
        }
    };

    render() {
        const book = this.props.bookDetails;
        if(this.state.toggle) {
            return (
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
                    <div className="card border-0 shadow">
                        <img
                            className="card-img-top"
                            src={book.volumeInfo.imageLinks.thumbnail}
                            alt={noimage}
                        />
                        <div className="card-body">
                        <p className="book-title" onClick={this.activateToggle}>Title: {book.volumeInfo.title}</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Publisher: {book.volumeInfo.publisher}</li>
                            <li className="list-group-item">Pages: {book.volumeInfo.pageCount}</li>
                            <li className="list-group-item">Language: {book.volumeInfo.language}</li>
                        </ul>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
                    <div className="card border-0 shadow">
                        <img
                            className="card-img-top"
                            src={book.volumeInfo.imageLinks.thumbnail}
                            alt={noimage}
                        />
                        <div className="card-body">
                        <p className="book-title" onClick={this.activateToggle}>Title: {book.volumeInfo.title}</p>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default BookDetails;