import React from 'react'

const UserCard = ({use}) => {
  return (
    <div>
        <h3>User Name : {use.name}</h3>
        <p>Role : {use.role}</p>
        <p>Country : {use.country}</p>
    </div>
  )
}

export default UserCard