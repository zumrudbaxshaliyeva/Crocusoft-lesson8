import React from 'react'
import {Link} from 'react-router-dom'

const Index:React.FC = () => {
  return (
    <React.Fragment>
        <ul>
            <li><Link to='/todolist'>TodoList</Link></li>
            <li><Link to='/changetheme'>ChangeTheme</Link></li>
            <li><Link to='/audio'>Audio</Link></li>
        </ul>
    </React.Fragment>
)
}

export default Index