import styled from 'styled-components'

export const HomeWrapper = styled.div `
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`
export const HomeLeft = styled.div `
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  float: left;
  .banner-img{
    width: 625px;
    height: 240px;
  }
`
export const HomeRight = styled.div `
  width: 280px;
  float:right;
`
export const TopicWrapper = styled.div `
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div `
  float: left;
  height: 32px;
  line-height: 32px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  .topic-pic{
    width:32px;
    height: 32px;
    display: block;
    float: left;
    margin-right: 10px;
  }
`
export const ListItem = styled.div `
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .pic{
    width: 125px;
    height: 100;
    display: block;
    float: right;
    border-radius: 10px;
  }
`
export const ListInfo = styled.div `
  width: 500px;
  float: left;
  .title{
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  .desc{
    font-size: 13px;
    color: #999;
    line-height: 24px;
  }
`
export const RecommendWrapper = styled.div `
  margin: 30px 0;
  width: 280px;
`
export const RecommendItem = styled.div `
  margin: 6px 0;
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`
export const WriterWrapper = styled.div `
  width: 278px;
  height: 60px;
  line-height: 60px;
  ul{
    width: 278px;
    height: 50px;
  }
  .imges{
    width: 40px;
    height: 40px;
    float: left;
    margin-top: 10px;
  }
  img{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      font-size: 14px;
      color: #dcdcdc;
    }
  .name-writer{
    height: 50px;
    float: left;
    .name{
      position: relative;
      top: -10px;
      height: 30px;
      box-sizing: border-box;
      font-size: 14px;
    }
    .tips{
      height: 20px;
      box-sizing: border-box;
      font-size: 12px;
      color: #969696;
      position: relative;
      top: -20px;
    }
    margin-left: 10px;
  }
  /* .name{
    width: 250px;
    height: 20px;
    font-size: 14px;
    padding-left: 10px;
    padding-top: 5px;
    list-style: none;
  }
  .tips{
    font-size: 12px;
    color: #dcdcdc;
  } */
  .focus{
    float: right;
    color: red;
    a{
      text-decoration: none;
      color: green;
    }
  }
  
`
export const Appload = styled.div `
  width: 278px;
  height: 66px;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  background-color: #fff;
  box-sizing: border-box;
  overflow: hidden;
  :hover{
    div:first-child{
      display:block;
    }
  }
  .showImg{
    position: absolute;
    top: 70px;
    background-color: #fff;
    width: 220px;
    height: 220px;
    border: 1px solid #dcdcdc;
    text-align: center;
    margin-top: 20px;
    display: none;
    img{
      width: 180px;
      height: 180px;
      margin-top: 20px;
    }
  }
  .pic{
    width:50px;
    height: 50px;
    padding-top: 10px;
    padding-left: 10px;
    float: left;
  }
  ul{
    width: auto;
    height: 50px;
    float: left;
    padding-top: 10px;
    padding-left: 10px;
    li:first-child{
      color: #333;
      font-size: 15px;
      padding-top: 4px;
    }
    li:last-child{
      font-size: 13px;
      color: #999;
      margin-top: 8px;
    }
    :hover{
      
    }
  }
`
export const RecommendWriter = styled.div `
  height: 20px;
  margin-top: 30px;
  ul li:first-child{
    float: left;
    font-size: 14px;
    color: #969696;
  }
  ul li:last-child{
    float: right;
    a{
      text-decoration: none;
      font-size: 14px;
      color: #969696;
    }
  }
`
export const LoadMore = styled.div `
  width: 100%;
  margin: 30px 0;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #a5a5a5;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`
export const BackTop = styled.div `
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 12px;
  :hover{
    background-color: #dcdcdc;
    cursor: pointer;
  }
  :hover .backTopTip{
    display: block;
  }
  :hover .iconfont{
    position: relative;
    top: -40px;
  }
  .backTopTip{
    font-size: 10px;
    text-align: center;
    width: 60px;
    height: 40px;
    background-color: rgb(70, 70, 67);
    color: #fff;
    border-radius: 5px;
    display: none;
    position: relative;
    right: 80px;

  }
`
export const MoreWriter = styled.button `
  width: 270px;
  text-align: center;
  height: 30px;
  color: #333;
  margin-top: 10px;
  margin-left: 4px;
  cursor: pointer;
`