import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TodoList from '../../pages/todoList'
import ChangeTheme from '../../pages/changeTheme'
import Audio from '../../pages/audio'

function Routers() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/todolist' element={<TodoList/>}></Route>
        <Route path='/changetheme' element={<ChangeTheme />}></Route>
        <Route path='/audio' element={<Audio />}></Route>
      </Routes>
        
        
    </React.Fragment>
  )
}

export default Routers