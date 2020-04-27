import React from 'react';
import {Link} from 'react-router-dom'

export const Prompt = ({results, changePage}) => {

  return (
  
    results.map(result => {
      return <button onClick={() => changePage(result)}> {result}</button>
    })
  )
}