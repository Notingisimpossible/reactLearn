import { axiosInstance } from './config'

export const getBannerRequest = () => {
  return axiosInstance.get('/banner')
}

export const getRecommendListRequest = () => {
  return axiosInstance.get('/personalized')
}

export const getHotSingerListRequest = (count) => {
  return axiosInstance.get(`/top/artists?offset=${count}`)
}

export const getSingerListRequest = (category, alpha, count) => {
  let type = category.substr(0,1)
  let area = category.substr(1,category.length-1)
  return axiosInstance.get(`/artist/list?type=${type}&area=${area}&initial=${alpha.toLowerCase()}&offset=${count}`)
}

export const getRankListRequest = () => {
  return axiosInstance.get(`/toplist/detail`)
}