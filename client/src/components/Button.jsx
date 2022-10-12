import React from 'react'

function Button({word,classN}) {
  return (
    <button className={classN}>{word}</button>
  )
}

export default Button
