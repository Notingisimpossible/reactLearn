import styled from 'styled-components'
import logoPic from '../../static/imges/logo.svg'

export const HeaderWrapper = styled.div `
  position: relative;
  height: 60px;
  border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
  href: '/'
}) `
  position: relative;
  top: 10px;
  left: 20%;
  display: block;
  height: 38px;
  width: 98px;
  background: url(${logoPic}) no-repeat;
  background-size: contain;
`
export const Nav = styled.div `
  width: 838px;
  margin: 0 auto;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 30%;
`
export const NavItem = styled.div `
  float: left;
  line-height: 56px;
  padding: 0 15px;
  font-size: 16px;
  color: #333;
  &.active:hover{
    color: #006cff;
    cursor: pointer;
  }
`