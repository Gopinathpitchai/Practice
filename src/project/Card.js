import React, { useState, useEffect } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

const MovieCard = () => {
    const [data, setData] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    async function apicall() {
        const response = await fetch('https://freetestapi.com/api/v1/movies');
        const result = await response.json();
        setData(result);
        console.log(result);
    }

    useEffect(() => {
        apicall();
    }, []);

    const handleModal = (movie) => {
        setSelectedMovie(movie);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setSelectedMovie(null);
    };

    return(
        <div className='container mt-5'>
            <div className='row'>
                {data.map((movie)=>(
                    <div className='col- md-4 mb-4 ' key={movie.id}>
                        <Card style={{ width: '1800rem' }}>
                            <Card.Body>
                                <Card.Title>TITLE: {movie.title}</Card.Title>
                                <Card.Text>LANGUAGE: {movie.language} </Card.Text>
                                <Card.Text>RATTING: {movie.rating}</Card.Text>
                                <Button variant="primary" onClick={()=> handleModal(movie)}>
                                  View Details
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            {selectedMovie &&(
                <Modal show={modalVisible} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedMovie.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                 <p><strong>Language:</strong> {selectedMovie.language}</p>
                  <p><strong>Rating:</strong> {selectedMovie.rating}</p>
                   <p><strong>Runtime:</strong>{selectedMovie.runtime}</p>  </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>)}
            
        </div>
    );
};
        


export default MovieCard;
