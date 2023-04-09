import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
  let apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

  const setmyProgress = (progress) => {
    setProgress(progress)
  }

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} height={2} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setmyProgress={setmyProgress}
                apiKey={apiKey}
                category="general"
                country="in"
                pagesize="9"
                key="General"
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/Business"
            element={
              <News
                setmyProgress={setmyProgress}
                apiKey={apiKey}
                category="business"
                country="in"
                pagesize="9"
                key="Business"
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/Entertainment"
            element={
              <News
                setmyProgress={setmyProgress}
                apiKey={apiKey}
                category="entertainment"
                country="in"
                pagesize="9"
                key="Entertainment"
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/Health"
            element={
              <News
                setmyProgress={setmyProgress}
                apiKey={apiKey}
                category="health"
                country="in"
                pagesize="9"
                key="Health"
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/Science"
            element={
              <News
                setmyProgress={setmyProgress}
                apiKey={apiKey}
                category="science"
                country="in"
                pagesize="9"
                key="Science"
              ></News>
            }
          ></Route>

          <Route
            exact
            path="/Sports"
            element={
              <News
                setmyProgress={setmyProgress}
                apiKey={apiKey}
                category="sports"
                country="in"
                pagesize="9"
                key="Sports"
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/Technology"
            element={
              <News
                setmyProgress={setmyProgress}
                apiKey={apiKey}
                category="technology"
                country="in"
                pagesize="9"
                key="Technology"
              ></News>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  )
}
