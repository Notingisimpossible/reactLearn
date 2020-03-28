import styled from 'styled-components'
import logoPic from '../../static/imges/logo.svg'

export const HeaderWrapper = styled.div `
  position: relative;
  height: 60px;
  border-bottom: 1px solid #f0f0f0;
  background-color: #fff;
`
export const Logo = styled.a.attrs({
  href: '/'
}) `
  position: relative;
  top: 10px;
  left: 15%;
  display: block;
  height: 38px;
  width: 98px;
  background: url(${logoPic}) no-repeat;
  background-size: contain;
`
export const Nav = styled.div `
  width: 908px;
  margin: 0 auto;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 25%;
`
export const NavItem = styled.div `
  float: left;
  line-height: 56px;
  padding: 0 15px;
  font-size: 16px;
  color: #333;
  &.check{
    color: #006cff;
    cursor: pointer;
  }
  &.active:hover{
    color: #006cff;
    cursor: pointer;
  }
`
export const NavSearchWrapper = styled.div `
  float: left;
  width: 308px;
  height:60px;
`
export const NavSearchFrom = styled.div `
  width: 156px;
  height: 33.2px;
  margin-top: 15px;
  margin-left: 150px;
  border: 1px solid hsla(0,0%,59.2%,.2);
  background-color: rgba(227,231,236,.2);
  &.focused{
    border: 1px solid #006cff;
  }
  .iconfont{
    color:hsla(0,0%,59.2%,.2);
    cursor: pointer;
    &.focused{
      color: #006cff;
    }
  }
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索掘金'
}) `
  width: 120px;
  height: 25.2px;
  border: none;
  background: rgba(227,231,236,.2);
  box-sizing: border-box;
  font-size: 14px;
  outline: none;
  margin-top: 5px;
  margin-left: 5px;

`
export const Addition = styled.div `
  float: right;
  width: 190px;
  height: 50px;
`
export const Button = styled.div `
  float: left;
  margin-top: 12%;
  color: #007fff;
  cursor: pointer;
  &.writing{
    width: 75px;
    font-size: 15px;
  }
  &.reg{
    padding-left: 10px;
    width: 45.4px;
    font-size: 15px;
    border-left: 1.5px solid hsla(0,0%,59.2%,.2);
    ::after{
      content: '.';
      position: relative;
      bottom: 5px;
      left: 5px;
    }
  }
  &.log{
    width: 32px;
    font-size: 15px;
  }
`