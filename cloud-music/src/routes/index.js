import React, { Suspense, lazy } from 'react'
import { Redirect } from 'react-router-dom'
import Home from '../application/Home'
const RecommendComponent = lazy (() => import ("../application/Recommend/"));
const SingersComponent = lazy (() => import ("../application/Singers/"));
const RankComponent = lazy (() => import ("../application/Rank/"));
const AlbumComponent = lazy (() => import ("../application/Album/"));
const SingerComponent = lazy (() => import ("./../application/Singer/"));
const SearchComponent = lazy (() => import ("./../application/Search/"));

// const a = (b) => {
//   return function(p) {
//     return XMLDocument
//   }
// }

const SuspenseComponent = Comment => props => {
  return (
    <Suspense fallback={null}>
      <Comment {...props}></Comment>
    </Suspense>
  )
}
export default [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => (
          <Redirect to={"/recommend"}/>
        )
      },
      {
        path: "/album/:id",
        exact: true,
        key: "album",
        component: SuspenseComponent(AlbumComponent)
      },
      {
        path: "/search",
        exact: true,
        key: "search",
        component: SuspenseComponent(SearchComponent)
      },
      {
        path: "/recommend",
        component: SuspenseComponent(RecommendComponent),
        routes: [
          {
            path: '/recommend/:id',
            component: SuspenseComponent(AlbumComponent)
          }
        ]
      },
      {
        path: "/singers",
        component: SuspenseComponent(SingersComponent),
        key: "singers",
        routes: [
          {
            path: "/singers/:id",
            component: SuspenseComponent(SingerComponent)
          }
        ]
      },
      {
        path: "/rank/",
        component: SuspenseComponent(RankComponent),
        key: "rank",
        routes: [
          {
            path: "/rank/:id",
            component: SuspenseComponent(AlbumComponent)
          }
        ]
      }
    ]
  }
]