import React from 'react'
import Loadable from 'react-loadable'

// 通用的loading过场组件
const loadingComponent = () => {
  return (
    <div>loading...</div>
  )
}

// 过场组件采用通用组件，诺传入了新组建，那就采用新组件
export default (loader, loading = loadingComponent) => {
  return Loadable({
    loader,
    loading
  })
}