import { useState } from "react"
export function TwFollowCard({userName,name, inicialIsFollowing}){
    const [isFollowing,setIsFollowing]= useState(inicialIsFollowing)
    
    const text= isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following':
    'tw-followCard-button'

    const handleClick=()=>{
        setIsFollowing(!isFollowing)
    }
    return(
        
        <article className='tw-followCard'> 
        <header className='tw-followCard-header'>
          <img alt="avatar" src={`https://unavatar.io/${userName}` }className='tw-followCard-avatar'/>
          <div className='tw-followCard-info'>
            <strong> {name}</strong>
            <span className='tw-followCard-infoUserName'>
              @{userName}
            </span>
          </div>
        </header>
  
        <aside>
          <button className={buttonClassName} onClick={handleClick}> 
            <span className="tw-followCard-text">{text}</span>
            <span className="tw-followCard-stopFollow">Dejar de seguir </span>
          </button>
        </aside>
      </article>
    )
}