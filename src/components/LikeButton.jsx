import React from 'react'
import { useState } from 'react'



function LikeButton() {
 const [isLike, setIsLike]= useState(0)//false
const [count,setCount] =useState(0)

 function like(){
           
            setIsLike(!isLike)
            setCount(count+1)
    }
    const styles= {color:"red"}
    return (
     
    <div>
      <p onClick={like}>
        {
            isLike?(<i className="fa-solid fa-heart" style={styles}></i>)  :(<i className="fa-regular fa-heart"></i>)
        }
        
        </p>
        <button>count{count}</button>
    </div>
  )
}

export default LikeButton
