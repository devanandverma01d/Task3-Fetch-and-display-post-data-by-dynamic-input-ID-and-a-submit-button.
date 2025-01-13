import React from 'react'

const DisplayContent = ({posts,postId,handleInputChange,handleClick,loading}) => {
  return (
    <div className='container'>
      <div className='form-group' style={{display:'flex',justifyContent:'left', alignItems:'center'}}>
        <input 
          className='form-control w-25 m-2' 
          type="text" 
          name="input" 
          placeholder='Enter post id....'
          value={postId}
          onChange={handleInputChange}
        />
        <button 
          className='btn btn-primary'
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
      {
        postId <= 100 ? (
          <p>Title: {loading ? <span style={{color:'red'}}>Loading data....</span> : posts.title} </p>
        ):(
          <p>No Data avilable for this post id, please enter post id less than or equal to 100</p>
        )
      }
    </div>
  )
}

export default DisplayContent