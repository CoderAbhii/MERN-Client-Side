import React from 'react'

const AccessDenied = (props) => {
  return (
    <>
      <div className="default-page">
        <h3>{props.status}</h3>
        <h1>{props.showText}</h1>
      </div>
    </>
  )
}

export default AccessDenied