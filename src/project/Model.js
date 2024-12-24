import React,{useState,useEffect} from 'react'
import { Card,Button,Modal } from 'react-bootstrap'
const MovieCard = () => {
  const [show, setShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

 


  const handleClose = () => setShow(false);
  const handleShow = (movie) => {
    setSelectedMovie(movie);
    setShow(true);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-4 mb-4" key={movie.id}>
            <Card>
              <Card.Body>
                <Card.Title>{movie.name}</Card.Title>
                <Button variant="primary" onClick={() => handleShow(movie)}>
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedMovie.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{selectedMovie.description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default MovieCard;