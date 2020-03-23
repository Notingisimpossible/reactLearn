import {createGlobalStyle} from 'styled-components'

export const IconGlobalstyle = createGlobalStyle`
  @font-face {
    font-family: 'iconfont';  /* project id 1706937 */
    src: url('//at.alicdn.com/t/font_1706937_h5vn6q9315j.eot');
    src: url('//at.alicdn.com/t/font_1706937_h5vn6q9315j.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1706937_h5vn6q9315j.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1706937_h5vn6q9315j.woff') format('woff'),
    url('//at.alicdn.com/t/font_1706937_h5vn6q9315j.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1706937_h5vn6q9315j.svg#iconfont') format('svg');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
