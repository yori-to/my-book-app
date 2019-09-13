import React from "react";
import BookDetails from "./BookDetails";
import Loading from './Loading';

class Details extends React.Component {
    render() {
        const books = this.props.books;
        const listItems = books.map(book => (
            <BookDetails bookDetails={book} key={book.id} />
        ));
        if(books.length === 0 || books === undefined){
            return (
                    <Loading />
            );
        } else {
            return (
                <div>
                    <div><br /></div>
                    <div className="row">{listItems}</div>
                </div>
            );
        }
    }
}

export default Details;