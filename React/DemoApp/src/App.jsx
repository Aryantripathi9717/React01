import React from 'react'
import UserCard from './UserCard'
import Wrapper from './Wrapper'

const App = () => {
  const users = [{
    name : "Virat Kohli",
    role : "Batsman",
    country : "India",
    image : "https://thedailyguardian.com/wp-content/uploads/2025/11/virat-kohli.png"
  },
  {
    name : "Ms Dhoni",
    role : "Batsman",
    country : "India",
    image : "https://revsportz.in/wp-content/uploads/2023/05/MS-Dhoni-3.jpeg"
  }
]
    return (
      <>
      <h1>Users DashBoard</h1>
      <Wrapper title="Users List" >
        {users.map((user,index) => (<UserCard  use = {user} key={index}/>) )
        }
      </Wrapper>
      </>
    )
}

export default App