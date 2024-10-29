import React from 'react'

export default async function PostComments({cPromise}) {
  const comments = await cPromise;  
  return (
    <div className="mt-5">
    <h2>Comments:</h2>
    <ul>
      {comments.map(c=>(
        <li className='m-4' key={c.id}>{c.body}</li>
      ))}
    </ul>
  </div>
  )
}
