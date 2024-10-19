import React from 'react'
import { useEffect,useState } from 'react'
import {useLoaderData} from 'react-router-dom'


function Github() {
  const data = useLoaderData()
  return (
    <div className='bg-gray-500 text-center'>Github Followers : {data.followers}
    <img src={data.avatar_url} alt=""  width={300}/>
    </div>
  )  
}

export default Github
export const githubInfoLoader = async  () =>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
} 