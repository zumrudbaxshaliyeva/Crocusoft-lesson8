import React from 'react'
import Routes from './components/Routes/Routes.tsx'
import Header from './layouts/header'

import './App.css';

function App() {

  return (
    <React.Fragment>
      <Header />
      <Routes/>
    </React.Fragment>
  )
}

export default App