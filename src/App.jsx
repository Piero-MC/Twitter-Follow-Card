import { useState } from 'react'
import './App.css'
import { TwFollowCard } from './TwitterFollowCard'

function App() {
  const [count, setCount] = useState(0)

  const user=[
    {
      userName:'midudev',
      name: 'Miguel Angel Duran',
      isFollowing:true
    },
    {
      userName:'pheralb',
      name: 'Pablo H',
      isFollowing:false
    },
    {
      userName:'pacohdesz',
      name: 'Paco Hdez',
      isFollowing:true
    },
    {
      userName:'TMChein',
      name: 'Thomas',
      isFollowing:false
    }

  ]
  return (
    <>
      <section className='App'>
        {
          user.map(({userName,name,isFollowing})=>(
              <TwFollowCard
                key={userName}
                userName={userName}
                name={name}
                inicialIsFollowing={isFollowing}
              >
              </TwFollowCard>
              
            )
          )
        } 
      </section>
    </>
  )
}

export default App
