import React from 'react'
import { TabBar } from 'antd-mobile';
import {connect} from 'react-redux'
import {actionCreater} from '../store'

const WebLayout = (props) => {
  const {selectedTab,tabChange} = props
  return (
    <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
      <div style={{position: 'fixed', height: '100%', width: '100%', top: 0}}>
        <TabBar
          barTintColor="white"
          tintColor="#33A3F4"
          unselectedTintColor="#949494"
          tabBarPosition='bottom'
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<div className="iconfont">&#xe600;</div>
            }
            selectedIcon={
              <div className="iconfont">&#xe7c5;</div>
            }
            selected={selectedTab==="redTab"}
            onPress={() => tabChange("redTab")}
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
            onPress={() => tabChange("blueTab")}
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
            onPress={() => tabChange("yellowTab")}
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
            onPress={() => tabChange("greenTab")}
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