import {fromJS} from 'immutable'
// immutable.js
// facebook
// immutable对象

const defaultState = fromJS ({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/11864358-622c38825ebb854e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    },
    {
      id: 2,
      title: '手绘',
      imgUrl: 'https://upload.jianshu.io/users/upload_avatars/3950651/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
    }
  ]
})

export default (state = defaultState, action) => {
  return state
}