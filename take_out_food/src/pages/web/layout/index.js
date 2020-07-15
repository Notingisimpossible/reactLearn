import React from 'react'
import { TabBar } from 'antd-mobile';
import {connect} from 'react-redux'
import {actionCreater} from '../store'
import {Route} from 'react-router-dom'
import routes from '../../../router/web'

const WebLayout = (props) => {
  const {selectedTab,tabChange} = props
  const linkTo = (url) => {
    props.history.push(url)
  }
  return (
    <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
      {
        routes.map((route) => {
          return <Route key={route.id} path={route.path} component={route.component}></Route>
        })
      }
      <div style={{position: 'fixed', height: 'auto%', width: '100%', bottom: 0}}>
        <TabBar
          barTintColor="white"
          tintColor="#33A3F4"
          unselectedTintColor="#949494"
          tabBarPosition='bottom'
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<div className="iconfont">&#xe7c5;</div>
            }
            selectedIcon={
              <div style={{}} className="iconfont">&#xe600;</div>
            }
            selected={selectedTab==="redTab"}
            onPress={() => {tabChange("redTab");linkTo("/web/home")}}
            badge="new"
          ></TabBar.Item>

          <TabBar.Item
            title="抢单"
            key="rob"
            icon={<div className="iconfont">&#xe6cb;</div>
            }
            selectedIcon={
              <div className="iconfont">&#xe7c8;</div>
            }
            selected={selectedTab === "blueTab"}
            onPress={() => {tabChange("blueTab"); linkTo("/web/rob")}}
            badge={5}
          ></TabBar.Item>

          <TabBar.Item
            title="购物车"
            key="shopCart"
            icon={<div className="iconfont">&#xe69e;</div>
            }
            selectedIcon={
              <div className="iconfont">&#xe7c6;</div>
            }
            selected={selectedTab === "yellowTab"}
            onPress={() => {tabChange("yellowTab");linkTo("/web/cart")}}
          ></TabBar.Item>

          <TabBar.Item
            title="个人中心"
            key="mine"
            icon={<div className="iconfont">&#xe651;</div>
            }
            selectedIcon={
              <div className="iconfont">&#xe7c9;</div>
            }
            selected={selectedTab === "greenTab"}
            onPress={() => {tabChange("greenTab");linkTo("/web/user")}}
          ></TabBar.Item>
        </TabBar>
      </div>
    </div>
  )
}
const mapState = (state) => {
  return {
    selectedTab: state.web.get("selectedTab")
  }
}
const mapDispatch = (dispatch) => ({
  tabChange(tabColor){
    let action = actionCreater.changeTab(tabColor)
    dispatch(action)
  }
})
export default connect(mapState, mapDispatch)(WebLayout)