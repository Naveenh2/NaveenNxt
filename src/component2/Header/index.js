// import {Link} from 'react-router-dom'
// import {MdDarkMode} from 'react-icons/md'

// import {MdOutlineLightMode} from 'react-icons/md'

// class Header extends Comoponent {
//   state = {isClicked: false}

//   isClicked = () => {
//     setState(prev => {
//       isClicked: !prev.isClicked
//     })
//   }
//   render() {
//     const {isClicked}
//     const img2 =
//       'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
//     const img1 =
//       'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
//     return (
//       <nav className="headercontainer">
//         <div>
//           <img src={isClicked ? img1 : img2} className="image" />
//         </div>
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
//           alt="profile"
//         />
//         <div>
//           <button type="button" onClicked={this.isClicked}>
//             {isClicked ? <MdOutlineLightMode /> : <MdDarkMode />}
//           </button>
//           <Link to="/login">
//             <button type="button">Logout</button>
//           </Link>
//         </div>
//       </nav>
//     )
//   }
// }
// export default Header



import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const handleLogout = () => {
    // Simulate logout
    localStorage.removeItem('authToken');
  };

  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/trending">Trending</Link>
      <Link to="/gaming">Gaming</Link>
      <Link to="/saved-videos">Saved Videos</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Header;
