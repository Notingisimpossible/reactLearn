import React from 'react'
import { renderRoutes } from 'react-router-config'


function Singer (props) {
  const { route } = props

  return (
    <div>
      <div>Singer</div>
      {renderRoutes(route.routes)}
    </div>
  )
}

export default React.memo(Singer)