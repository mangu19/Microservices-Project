import React from 'react'

export default function ({alert}) {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{alert.alert}</strong> 
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}
