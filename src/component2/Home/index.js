import React, { useState, useEffect } from 'react';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Simulate an API call to fetch home videos
    fetch('https://api.example.com/videos')
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch videos');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Home Videos</h1>
      {videos.length === 0 ? (
        <div>No Videos Found</div>
      ) : (
        <ul>
          {videos.map((video) => (
            <li key={video.id}>{video.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
