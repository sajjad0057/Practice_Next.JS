import PostComments from '@/app/components/PostComments';
import getPost from '@/libs/getPost';
import getPostComments from '@/libs/getPostComments';
import React, { Suspense } from 'react'

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
  
    //const [post, comments] = await Promise.all([postPromise,commentsPromise]);
    const post = await postPromise;
  
  return (
    <div className="m-5">
        <h2 className='text-blue-600'>title : {post.title}</h2>
        <hr />
        <p className='text-orange-600'>description : {post.body}</p>
        <hr /><hr />
        <Suspense fallback = "<h3>loading comments ....</h3>">
        <PostComments cPromise = {commentsPromise}/>
        </Suspense>
        
    </div>
  )
}
