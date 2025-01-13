import React, { useEffect, useState } from 'react'
import DisplayContent from './DisplayContent'

const ParentComp = () => {
    //useState to store data 
    const [posts,setPosts] = useState([])
    const [postId,setPostId] = useState(1)
    const [loading,setLoading] = useState(false)

    //function to fetch data from provided URL
    const fetchPosts=async()=>{
        try {
            setLoading(true)
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            const data = await response.json()
            console.log(data)
            setPosts(data)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchPosts()
    },[])

    const handleInputChange=(e)=>{
        const value = e.target.value
        setPostId(value)
    }
    const handleClick=()=>{
        fetchPosts()
    }
  return (
    <>
        <DisplayContent 
            posts={posts}
            postId={postId}
            handleInputChange={handleInputChange}
            handleClick={handleClick}
            loading={loading}
        />
    </>
  )
}

export default ParentComp