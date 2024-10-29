import getPost from '@/libs/getPost';
import React from 'react'

export default async function PostPage({params}) {
    const {id} = params;
    const postDetails = await getPost(id);
    console.log(postDetails);
    
  return (
    <div className="m-5">
        <h2 className='text-blue-600'>title : {postDetails.title}</h2>
        <hr />
        <p className='text-orange-600'>description : {postDetails.body}</p>
    </div>
  )
}
