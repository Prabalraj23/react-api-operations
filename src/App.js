import React from 'react'
import Form from './components/Form'
import PersonList from './components/PersonList';
import LoginPage from './LoginPageComp/LoginPage';
import GetPost from './CRUD/GetPost';
import GetPostNew from './CRUD/GetPostNew';
import Get from './CRUD/Get';
import Post from './CRUD/Post';
import Delete from './CRUD/Delete';


function App() {
  return (
    <div className ="form-filling">
    <Get />
    <Post />
    <Delete />
    </div>
  )
}

export default App
