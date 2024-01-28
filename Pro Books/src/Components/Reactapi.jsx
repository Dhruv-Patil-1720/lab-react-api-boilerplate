import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Reactapi.css";

const Reactapi = () => {
    // State to store the fetched data
    const [data, setData] = useState([]);

    // Fetch data from the API when the component mounts
    useEffect(() => {
        // Make a GET request to the API endpoint
        axios.get("https://reactnd-books-api.udacity.com/books", {
            headers: { 'Authorization': 'whatever-you-want' }
        })
        .then(response => {
            // Update the state with the fetched data
            setData(response.data.books);
        })
        .catch(error => {
            // Log any errors to the console
            console.log("Error:", error);
        });
    }, []);

    // Render the fetched book data
    return (
        <div className='container'>
            {data.map(book => (
                <div key={book.id} className='books'>
                    <div className='intro'>
                        {/* Display the book title */}
                        <h2>{book.title}</h2>
                        {/* Display the book thumbnail */}
                        <img src={book.imageLinks.smallThumbnail} alt={book.title} />
                        {/* Display the book author */}
                        <h3>{book.authors[0]}</h3>
                    </div>
                    {/* Display the book description */}
                    <p className='About'>{book.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Reactapi;
