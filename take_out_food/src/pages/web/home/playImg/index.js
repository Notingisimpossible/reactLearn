import React from 'react'
import { Carousel,WingBlank } from 'antd-mobile'

const PlayImg = (props) => {
  const {imgUrl} = props
  return (
    <WingBlank>
      <Carousel
        autoplay={true}
        autoplayInterval={1500}
        infinite
      >
        {imgUrl._tail.array.map(val => (
          <a
            key={val}
            href="https://github.com/Notingisimpossible"
            style={{ display: 'inline-block', width: '100%', height: '176' }}
          >
            <img
              src={require(`../../../../assets/imgs/0${val}.jpg`)}
              alt=""
              style={{ width: '100%', verticalAlign: 'top' }}
            />
          </a>
        ))}
      </Carousel>
    </WingBlank>
  )
}

export default PlayImg