import React from 'react';
import noimage from "../book-placeholder.png";

class Book extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            book: undefined
        };
    }
    componentDidMount(){
        fetch(this.props.book.Url)
        .then((response) => response.json())
        .then(responseJson => this.setState({ book: responseJson }));
      }

    render(){
        const book = this.state.book;
        if(book === undefined){
            return(
            <div class="text-center">
                <div class="spinner-border" role="status" id="spinner">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
            );
        } else {
            return(
                <div className="row">
                    <div className="col-md-6">
                        <img
                            src={book.volumeInfo.imageLinks.thumbnail}
                            alt={noimage}
                        />
                    </div>
                    <div className="col-md-6">
                        <p>Title: {book.volumeInfo.title}</p>
                    </div>
                </div>
            );
        }
    }
}

export default Book;