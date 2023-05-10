import React from 'react'
import Layout from './components/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import CourseDetailsScreen from './Screens/CourseDetailsScreen'
import FeaturedCoursesScreen from './Screens/FeaturedCoursesScreen'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<HomeScreen />} />
          <Route path={'/course-details'} element={<CourseDetailsScreen />} />
          <Route
            path={'/currently-featured'}
            element={<FeaturedCoursesScreen />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
