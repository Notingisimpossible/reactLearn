import styled from 'styled-components'

export const HmoeWrapper = styled.div `
  height: 100%;
  width: 100%;
  background-color: #fff;
`
export const OutNav = styled.div `
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #f0f0f0;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
`
export const Nav = styled.div `
  width: 960px;
  height: 46px;
  margin-left: 15%;
`
export const NavItem = styled.div `
  height: 41px;
  width: auto;
  float: left;
  color:#71777c;
  font-size: 14px;
  margin-right: 20px;
  margin-top: 13px;
  cursor: pointer;
  :hover{
    color:#006cff;
  }
`
export const HomeContent = styled.div `
  width: 960px;
  height: auto;
  margin-left: 15%;
`
export const Header = styled.div `
  width: 700px;
  height: 46px;
  background-color: #fff;
  float: left;
`
export const HeaderItem = styled.div `
  width: 40px;
  float: left;
  font-size: 12px;
  padding-top: 17px;
  padding-left: 15px;
  color: #71777c;
  cursor: pointer;
  &.hotList{
    ::after{
    content: '';
  }
  }
  ::after{
    content: '|';
    color: #71777c;
    padding-left: 10px;
  }
  :hover{
    color:#006cff;
  }
`
export const Content = styled.div `
  width: 700px;
  height: 111px;
  background-color: #fff;
  float: left;
  margin-top: 1px;
  ul{
    width: 90%;
    height: 90%;
    padding-top: 2.5%;
    padding-left: 2.5%;
  }
  ul li{
    cursor: pointer;
  }
  ul .title{
    font-size: 20px;
    color: #2e3135;
    font-weight: 600;
    line-height: 1.2;
    margin-top: 5px;
  }
  ul li .column{
    font-size: 12px;
    color:#b71ed7;
    margin-right: 4px;
    ::after{
      content: '.';
      color: #71777c;
      margin-left: 3px;
      position: relative;
      bottom: 4px;
    }
  }
  ul li .name{
    font-size: 12px;
    color: #71777c;
    margin-right: 4px;
    :hover{
      color: #006cff
    }
    ::after{
      content: '.';
      color: #71777c;
      margin-left: 3px;
      position: relative;
      bottom: 4px;
    }
  }
  ul li .time{
    font-size: 12px;
    color: #71777c;
    margin-right: 4px;
    ::after{
      content: '.';
      color: #71777c;
      margin-left: 3px;
      position: relative;
      bottom: 4px;
    }
  }
  ul li .class{
    font-size: 12px;
    color: #71777c;
    :hover{
      color: #006cff
    }
  }
  ul .iconList{
    padding-top: 15px;
  }
`