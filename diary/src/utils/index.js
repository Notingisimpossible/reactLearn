function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
  // console.log(window.location)
  var r = window.location.search.substr(1).match(reg)
  if(r !== null) {
    return unescape(r[2])
  }else{
    return null
  }
}
module.exports={
  getQueryString
}