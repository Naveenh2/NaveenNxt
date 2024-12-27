// import {Component} from 'react'

// import {AiOutlineLike} from 'react-icons/ai'

// import {BiDislike} from 'react-icons/bi'

// import {FaSave} from 'react-icons/fa'

// import styled from 'react-styled'

// class VideoDetailsRoute extends Component {
//   state = {}
//   render() {
//     return (
//       <div>
//         <video />
//         <div>
//           <div></div>
//           <div>
//             <AiOutlineLike />
//             <BiDislike />
//             <FaSave />
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
// export default VideoDetailsRoute






import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const VideoItemDetails = ({ match }) => {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const videoId = match.params.id;
    fetch(`https://api.example.com/video/${videoId}`)
      .then((res) => res.json())
      .then((data) => {
        setVideo(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [match.params.id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{video.title}</h1>
      <ReactPlayer url={video.url} controls />
      {/* You can add like, dislike, and save buttons here */}
    </div>
  );
};

export default VideoItemDetails;
