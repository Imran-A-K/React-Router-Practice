import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header/Header';
import Home from './Components/Home';
import First from './Components/First';
import Friends from './Components/Friends/Friends';
import FriendDetail from './Components/Friends/FriendDetail/FriendDetail';
import Posts from './Components/Posts/Posts';
import PostDetail from './Components/PostDetail/PostDetail';
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App></App>
//   },
//   {
//     path: '/about',
//     element: <About></About>
//   },
//   {
//     path: '/contact',
//     element: <Contact></Contact>  }
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <First></First>
      },
      {
        path: 'friends',
        element: <Friends></Friends>,
        loader: () => fetch(`https://jsonplaceholder.typicode.com/users`)
      },
      {
        path: 'friend/:friendId',
        element: <FriendDetail></FriendDetail>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'posts',
        element: <Posts></Posts>,
        loader: ()=> fetch(`https://jsonplaceholder.typicode.com/posts`)
      },
      {
        path: 'post/:postID',
        element: <PostDetail></PostDetail>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`)
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header></Header> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
