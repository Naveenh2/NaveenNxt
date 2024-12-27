import {MdHome} from 'react-icons/md'

import {FaFire} from 'react-icons/fa'

import {FaFantasyFlightGames} from 'react-icons/fa6'

import {RiBatterySaverFill} from 'react-icons/ri'

const LeftAlign = () => {
  return (
    <div className="aligncontainer">
      <div className="line">
        <MdHome />
        <p>Home</p>
      </div>
      <div className="line">
        <FaFire />
        <p>Trending</p>
      </div>
      <div className="line">
        <FaFantasyFlightGames />
        <p>Gaming</p>
      </div>
      <div className="line">
        <RiBatterySaverFill />
        <p>Saved Videos</p>
      </div>
    </div>
  )
}
