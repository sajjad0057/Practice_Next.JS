import getPost from '@/libs/getPost';
import getPostComments from '@/libs/getPostComments';
import React from 'react'

export async function generateMetadata({params}) {
  const {id} = params;
  const postDetails = await getPost(id);

  return{
    title: postDetails.title,
    description : postDetails.body,
  }      
}


export default async function PostPage({params}) {
    const {id} = params;
    const postPromise= getPost(id);
    const commentsPromise = getPostComments(id);
  
    const [post, comments] = await Promise.all([postPromise,commentsPromise]);
  
  return (
    <div className="m-5">
        <h2 className='text-blue-600'>title : {post.title}</h2>
        <hr />
        <p className='text-orange-600'>description : {post.body}</p>
        <hr /><hr />
        <div className="mt-5">
          <h2>Comments:</h2>
          <ul>
            {comments.map(c=>(
              <li className='m-4' key={c.id}>{c.body}</li>
            ))}
          </ul>
        </div>
    </div>
  )
}
