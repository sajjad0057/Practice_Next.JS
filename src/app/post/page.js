import getAllPosts from '@/libs/getAllPosts'
import Link from 'next/link';
import React from 'react'

export default async function Posts() {
  const posts = await getAllPosts();
  //console.log(`posts: ${JSON.stringify(posts)}`);
  
  return (
    <div className='m-5'>
        <h1>All Posts</h1>
        <hr />
        <ul className="mt-5">
          {posts.map(p=> (
            <li key={p.id}>
              <Link href={`/post/${p.id}`}>
              {p.title}
              </Link>
            </li>
          ))}

        </ul>

    </div>
  )
}
