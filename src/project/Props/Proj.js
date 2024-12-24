import React, { useEffect, useState } from "react";
import { Modal, ModalTitle, Table } from 'react-bootstrap';

const DataFetcher = () => {
    const [data, setData] = useState([]); // Initialize data as an empty array
    const [modalVisible, setModalVisible] = useState(false);
    const [display, setDisplay] = useState(null);

    useEffect(() => {
        const apicall = async () => {
            try {
                const response = await fetch('https://freetestapi.com/api/v1/movies');
                const result = await response.json();
                setData(result);  // Set the data state with the fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        apicall();
    }, []);

    const handleRowClick = (movie) => {
        setModalVisible(true);
        setDisplay(movie);
    };

    const handleClose = () => {
        setModalVisible(false);
        setDisplay(null);
    };

    return (
        <div>
            <h1>MOVIE TABLE</h1>
            <Table>
                <thead>
                    <tr>
                        <th>SO.NO</th>
                        <th>MOVIE NAME</th>
                        <th>AUTHOR</th>
                        <th>LANGUAGE</th>
                        <th>RUN TIME</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((movie, index) => (
                        <tr key={movie.id} onClick={() => handleRowClick(movie)}>
                            <td>{index + 1}</td>
                            <td>{movie.title}</td>
                            <td>{movie.director}</td>
                            <td>{movie.language}</td>
                            <td>{movie.runtime}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Modal show={modalVisible} onHide={handleClose}>
                <Modal.Header closeButton>
                    <ModalTitle>{display?.title}</ModalTitle>
                </Modal.Header>
                <Modal.Body>
                    {display && (
                        <>
                            <p><strong>Director:</strong> {display.director}</p>
                            <p><strong>Language:</strong> {display.language}</p>
                            <p><strong>Runtime:</strong> {display.runtime} minutes</p>
                        </>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default DataFetcher;
