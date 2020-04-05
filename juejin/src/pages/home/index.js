import React from 'react'
import {
  HmoeWrapper
} from './style'
import Header from './components/header'
import HomeContent from './components/content'


const Home = (props) => {

  return (
    <HmoeWrapper>
     <Header />
     <HomeContent/>
    </HmoeWrapper>
  )
}
export default Home