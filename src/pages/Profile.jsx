import React from 'react'
import {useParams} from 'react-router-dom'
export default function Profile() {
    let {username} = useParams()
  return (
    <div>
        <h1>
        Profile for : {username} ! 
        </h1>
    </div>
  )
}
