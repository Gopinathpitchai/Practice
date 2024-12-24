import React, { useState, useEffect } from 'react';

function Api1() {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

    fetch(apiUrl)
    .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setState({ data, loading: false, error: null });
      })
      .catch((error) => {
        setState({ data: null, loading: false, error });
      });
  }, []); 

  const { data, loading, error } = state;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}

export default Api1;