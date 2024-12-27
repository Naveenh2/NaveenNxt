// import {Component} from 'react'

// class Saved extends Component {
//   state = {saved: []}
//   render() {
//     const {saved} = this.state
//     return (
//       <div>
//         <div className="line">
//           <RiBatterySaverFill />
//           <p>Saved Videos</p>
//         </div>
//         <ul>
//           {
//             <li>
//               <p>Empty</p>
//             </li>
//           }
//         </ul>
//       </div>
//     )
//   }
// }
// export default Saved


import React, { useState, useEffect } from 'react';

const SavedVideos = () => {
  const [savedVideos, setSavedVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedVideos')) || [];
    setSavedVideos(saved);
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Saved Videos</h1>
      {savedVideos.length === 0 ? (
        <div>No Saved Videos</div>
      ) : (
        <ul>
          {savedVideos.map((video, index) => (
            <li key={index}>{video.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedVideos;
