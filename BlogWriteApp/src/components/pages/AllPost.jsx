import React, { useEffect, useState } from 'react'
import {Container, PostCard} from "../index"
import service from '../../appwrite/config'

function AllPost() {
    const [posts,setPost] = useState([])
    useEffect(()=>{
        service.getPosts([])
        .then((posts) => {
            if (posts) {
                setPost(posts.documents)
                
            }
        })
    })
   
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex justify-center'>
{
    posts.map((post)=>(

        <div  key={post.$id}>
            <PostCard  post={post}/>
        </div>
    ))
    }
            </div>
        </Container>
      
    </div>
  )
}

export default AllPost