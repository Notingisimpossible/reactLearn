import styled from 'styled-components'

export const DetailWrapper = styled.div `
  width: 620px;
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: 100px;
`
export const Header = styled.div `
  margin: 50px 0 20px 0;
  font-size: 30px;
  line-height: 44px;
  color: #333;
  font-weight: bold;
`
export const Content = styled.div `
  color: #404040;
  img{
    max-height: 1245px;
    max-width: 100%;
  }
  p{
    margin: 25px 0;
    color: #2f2f2f;
    font-size: 10px;
    line-height: 30px;
  }
`