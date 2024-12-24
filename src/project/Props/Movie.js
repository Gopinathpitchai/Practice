import React from 'react';
import Table from 'react-bootstrap/Table';

function Movie({ data }) { 

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SO.NO</th>
            <th>MOVIE ID</th>
            <th>MOVIE Name</th>
            <th>LANGUAGE</th>
          </tr>
        </thead>
        <tbody>
          {data.map((movie, index) => (
            <tr key={movie.id}>
              <td>{index + 1}</td>
              <td>{movie.id}</td>
              <td>{movie.title}</td>
              <td>{movie.language}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Movie;
