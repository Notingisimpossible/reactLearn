import React from 'react'
import {
  HmoeWrapper,
  HomeContent,
} from './style'
import Header from './components/header.js'
import HomeContentHeader from './components/homeContentHeader'
import Content from './components/contentList'
import Aside from './components/aside'
const Home = (props) => {
  return (
    <HmoeWrapper>
      <Header/>
      <HomeContent>
        <HomeContentHeader />
        <Content />
        <Aside />
      </HomeContent>
    </HmoeWrapper>
  )
}

export default Home