// import './App.css'

// import Gaming from './components/Gaming'

// import LeftAlign from './components/LeftAlign'

// import Login from './components/Login'

// // Replace your code here
// const App = () => (
//   <>
//     <Switch>
//       <Route exact path="/gaming" component={VideoDetailsRoute} />
//       <Route exact path="/trending-videos" component={VideoDetailsRoute} />
//       <Route exact path="/video/:id" component={VideoDetailsRoute} />
//       <Route exact path="/" component={Login} />
//       <Route exact path="" component={LeftAlign} />
//     </Switch>
//   </>
// )

// export default App

// import {BrowserRouter, Route} from 'react-router-dom'
// import Login from './components/Login/Login'
// import Home from './components/Home/Home'
// import Trending from './components/Trending/Trending'
// import Gaming from './components/Gaming/Gaming'
// import VideoDetails from './components/VideoDetails/VideoDetails'
// import SavedVideos from './components/SavedVideos/SavedVideos'
// import NotFound from './components/NotFound/NotFound'
// import ProtectedRoute from './components/ProtectedRoute'
// import ThemeContextProvider from './context/ThemeContext'
// import SavedVideosContextProvider from './context/SavedVideosContext'

// const App = () => (
//   <ThemeContextProvider>
//     <SavedVideosContextProvider>
//       <BrowserRouter>
//         <Route path="/login" element={<Login />} />
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//               <Home />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/trending"
//           element={
//             <ProtectedRoute>
//               <Trending />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/gaming"
//           element={
//             <ProtectedRoute>
//               <Gaming />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/videos/:id"
//           element={
//             <ProtectedRoute>
//               <VideoDetails />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/saved-videos"
//           element={
//             <ProtectedRoute>
//               <SavedVideos />
//             </ProtectedRoute>
//           }
//         />
//         <Route path="*" element={<NotFound />} />
//       </BrowserRouter>
//     </SavedVideosContextProvider>
//   </ThemeContextProvider>
// )

// export default App

import {Component} from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import AppContext from './components/AppContext'

import './App.css'

class App extends Component {
  state = {
    savedVideoList: [],
    isDarkTheme: false,
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  addVideoToSavedVideosList = video => {
    this.setState(prevState => ({
      savedVideoList: [...prevState.savedVideoList, video],
    }))
  }

  render() {
    const {savedVideoList, isDarkTheme} = this.state
    return (
      <>
        <AppContext.Provider
          value={{
            savedVideoList,
            addVideoToList: this.addVideoToSavedVideosList,
            isDarkTheme,
            toggleTheme: this.toggleTheme,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <Route exact path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </AppContext.Provider>
      </>
    )
  }
}

export default App
