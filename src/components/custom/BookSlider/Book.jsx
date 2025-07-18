import React from 'react'
import { pages } from './UI'
import Page from './Page'

function Book({ ...props }) {
  return (
    <group {...props}>
      {
        pages.map((pageData, index) => (
          <Page key={index} number={index} {...pageData} />
        ))
      }
    </group>
  )
}

export default Book
