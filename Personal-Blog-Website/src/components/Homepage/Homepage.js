import React from 'react'
import Banner from './Banner/Banner'
import Reviews from './Reviews/Reviews'
import RecentArticles from './RecentArticles/RecentArticles'

export default function Homepage() {
  return (
    <>
      <Banner/>
      <RecentArticles/>
      <Reviews/>
    </>
  )
}
