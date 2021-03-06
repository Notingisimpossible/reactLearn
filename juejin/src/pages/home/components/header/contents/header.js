import React from 'react'
import {
  OutNav,
  Nav,
  NavItem
} from '../style.js'
import {connect} from 'react-redux'
import {actionCreators} from '../store'
import {Link} from 'react-router-dom'

const Header =(props) => {
  const {check1, check2, check3, check4, check5, check6, check7, check8, check9, changeCheck} = props
  return(
    <OutNav>
      <Nav>
        <Link to='welcome/recommend'>
          <NavItem className={check1 ? 'color' : ''} onClick={() => {changeCheck('check1')}}>推荐</NavItem>
        </Link>
        <Link to='welcome/backend'>
        <NavItem className={check2 ? 'color' : ''} onClick={() => {changeCheck('check2')}}>后端</NavItem>
        </Link>
        <Link to='welcome/fontend'>
          <NavItem className={check3 ? 'color' : ''} onClick={() => {changeCheck('check3')}}>前端</NavItem>
        </Link>
        <Link to='welcome/android'>
          <NavItem className={check4 ? 'color' : ''} onClick={() => {changeCheck('check4')}}>Andriod</NavItem>
        </Link>
        <Link to='welcome/ios'>
          <NavItem className={check5 ? 'color' : ''} onClick={() => {changeCheck('check5')}}>iOs</NavItem>
        </Link>
        <link to='welcome/ai'>
          <NavItem className={check6 ? 'color' : ''} onClick={() => {changeCheck('check6')}}>人工智能</NavItem>
        </link>
        <Link to='welcome/freebie'>
          <NavItem className={check7 ? 'color' : ''} onClick={() => {changeCheck('check7')}}>开发工具</NavItem>
        </Link>
        <link to='welcome/career'>
          <NavItem className={check8 ? 'color' : ''} onClick={() => {changeCheck('check8')}}>代码人生</NavItem>
        </link>
        <Link to='welcome/article'>
          <NavItem className={check9 ? 'color' : ''} onClick={() => {changeCheck('check9')}}>阅读</NavItem>
        </Link>
      </Nav>
    </OutNav>
  )
}

const mapState = (state) => ({
  check1: state.home.get('check1'),
  check2: state.home.get('check2'),
  check3: state.home.get('check3'),
  check4: state.home.get('check4'),
  check5: state.home.get('check5'),
  check6: state.home.get('check6'),
  check7: state.home.get('check7'),
  check8: state.home.get('check8'),
  check9: state.home.get('check9')
})
const mapDispatch = (dispatch) => ({
  changeCheck(check){
    const action = actionCreators.changeHeaderCheck(check)
    dispatch(action)
  }
})
export default connect(mapState, mapDispatch)(Header)