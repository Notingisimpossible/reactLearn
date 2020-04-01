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
  font-size: 14px;
  margin-right: 20px;
  margin-top: 13px;
  color:#71777c;
  cursor: pointer;
  &.color{
    color:#006cff;
  }
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
  &.color{
    color:#006cff;
  }
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
  cursor: pointer;
  :hover{
    background-color: #fcfcfc;
    ul li div:last-child{
      visibility: visible;
  }
  }
  ul{
    width: 90%;
    height: 90%;
    padding-top: 2.5%;
    padding-left: 2.5%;
  }
  ul li{
    width: 400px;
    float: left;
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
      color: #006cff;
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
    height: 25px;
    margin-top: 15px;
  }
  ul li a{
    text-decoration: none;
    color: #2e3135;
    :hover{
      text-decoration: underline;
    }
  }
  ul li .iconfont{
    color: #b2bac2;
    font-size: 15px;
    position: relative;
    top: 2px;
    left: 25%;
    border-radius: 1px;
  }
  ul li div{
    width: 48px;
    height: 22px;
    border: 1px solid  #edeeef;
    float: left;
    :hover{
      background-color: #f7f8fa;
    }
  }
  ul li div:last-child{
    visibility: hidden;
  }
  ul li:last-child{
    width: 60px;
    height: 60px;
    background-size: contain;
    float: right;
    position: relative;
    top: -40px;
    img{
      width: 60px;
      height: 60px;
    }
  }
`
export const Tag = styled.div `
  height: 1208px;
  width: 240px;
  float: right;
`
export const TagRegister = styled.div `
  width: 240px;
  height: 304px;
  margin-bottom: 14px;
  background-color: #fff;
  border-radius: 2px;
`
export const RegisterTitle = styled.div `
  padding-top: 14px;
  padding-left: 20px;
  color: #2e3135;
  font-size: 15px;
  margin-bottom: 10px;
  font-weight: 600;
`
export const RegisterTip = styled.div `
  padding-left: 20px;
  color: #2e3135;
  font-size: 12px;
  margin-bottom: 10px;
`
export const RegisterInput = styled.input `
  width: 198px;
  height: 30px;
  margin-bottom: 15px;
  margin-left: 20px;
  background-color: #fbfbfb;
  border: 1px solid #f4f4f4;
  padding-left: 4px;
  outline: none;
`
export const RegisterButton = styled.button `
  width: 202px;
  height: 30px;
  text-align: center;
  margin-left: 20px;
  background-color: #007fff;
  color: #fff;
  border-radius: 2px;
  border: none;
  outline: none;
  margin-bottom: 20px;
  cursor: pointer;
  :hover{
    transition: background-color 0.3s;
    background-color: #0371df;
  }
`
export const RegisterFoot = styled.div `
  width: 208px;
  height: 42px;
  margin-left: 20px;
  font-size: 12px;
  color: #767676;
  font-weight: 500;
  p{
    margin-top: 5px;
  }
  p a{
    text-decoration: none;
    color: #007fff;
    :first-child{
      ::after{
        content: '、';
        color: #767676;
      }
    }
  }
`
export const TagHot = styled.div `
  width: 240px;
  height: 224px;
  background-color: #fff;
  border-radius: 2px;
  margin-bottom: 14px;
`
export const TagHotHeader = styled.div `
  width: 240px;
  height: 46px;
  border-bottom: 1px solid #f4f5f5;
  font-size: 14px;
  p:first-child{
    width: 100px;
    position: relative;
    left: 15px;
    top: 15px;
  }
  p:last-child{
    float: right;
    padding-right: 15px;
  }
  p a{
    text-decoration: none;
    color: #007fff;
  }
`
export const TagList = styled.div `
    padding: 15px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`
export const List = styled.div `
  margin-right: 12px;
  margin-bottom: 12px;
  background-color: #f3f6f3;
  cursor: pointer;
  height: 30px;
  width: auto;
  color: inherit;
  line-height: 30px;
  padding-left: 22px;
  padding-right: 22px;
  border-radius: 30px;
  font-size: 12px;
  :hover{
    background-color: #00cc00;
    color: #fff;
  }
`
export const DownLoad = styled.div `
  cursor: pointer;
  width: 240px;
  height: 81.2px;
  background-color: #fff;
  border-radius: 2px;
  margin-bottom: 14px;
  img{
    width: 50px;
    height: 50px;
    padding-left: 15px;
    padding-top: 15px;
  }
 .DownloadIt{
   width: 144px;
   height: 38.8px;
   position: relative;
   left: 75px;
   top: -46px;
   p:last-child{
     font-size: 10px;
     color:#909090;
     margin-top: 8px;
   }
   p:first-child{
     font-size:14px;
     color:#333;
     font-weight: 600;
   }
 }
`
export const Tools = styled.div `
  width: 240px;
  height: 300px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 2px;
`
export const ToolsList = styled.div `
  width: 240px;
  height: 60px;
  cursor: pointer;
  :hover{
    background-color: #fbfbfb;
  }
  img{
    width: 35px;
    height: 35px;
    padding-left: 15px;
    padding-top: 12px;
  }
  span{
    position: relative;
    left: 15px;
    top: -12px;
    color:#333;
    font-size: 14px;
  }
`
export const FocueUs = styled.div `
  width: 240px;
  height: 54.4px;
  p:first-child{
    padding-left: 90px;
    color:#909090;
    font-size: 12px;
  }
  p:last-child{
    cursor: pointer;
    padding-left: 60px;
    margin-top: 10px;
  }
  img{
    width: 22px;
    height: 22px;
    margin-right: 11px;
  }
`
export const AboutUS = styled.div `
  width: 240px;
  height:125px;
  ul{
    width: 240px;
    height: 17.8px;
    cursor: pointer;
  }
  ul li{
    color:#909090;
    font-size: 12px;
    float: left;
    position: relative;
    left: 50%;
    transform: translateX(-40%);
    :hover{
      color: #006cff;
    }
    ::after{
      content: "Â·";
      margin: 0 .4rem;
      color: #909090;
    }
  }
  ul li:last-child{
    ::after{
      content: ''
    }
  }
  ul:first-child{
    position: relative;
    left: -75px;
  }
  .message{
    position: relative;
    left: 40%;
  }
  .personal{
    position: relative;
    left: 38%;
  }
  .banquan{
    pointer-events:none;
  }
`