// import {Component} from 'react'

// class Gaming extends Component {
//   state = {trending: []}
//   render() {
//     const {trending} = this.state
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
// export default Gaming

import React, {useState, useEffect} from 'react'

const Gaming = () => {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('https://api.example.com/gaming-videos')
      .then(res => res.json())
      .then(data => {
        setVideos(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Failed to fetch gaming videos')
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div>
      <h1>Gaming Videos</h1>
      <ul>
        {videos.map(video => (
          <li key={video.id}>{video.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Gaming
