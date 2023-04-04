import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Header from './Header/Header'

const Home = () => {
  const navigation = useNavigation();
  return (
    <div>
        <Header></Header>
        {/* <h3>This is home</h3> */}
        <div>{navigation.state  === 'loading' ? 'Loading...' : ' '}</div>
        <Outlet></Outlet>
        </div>
  )
}

export default Home