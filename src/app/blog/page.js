import Link from 'next/link'
import { list } from 'postcss'
import React from 'react'

export default function Blog() {

  const blogs = [
    {
        "id": 1,
        "title": "Understanding React Lifecycle Methods",
        "description": "A deep dive into React's lifecycle methods and how they impact component behavior."
    },
    {
        "id": 2,
        "title": "Top 10 JavaScript Frameworks to Learn in 2024",
        "description": "Explore the most popular JavaScript frameworks and which ones are worth learning."
    },
    {
        "id": 3,
        "title": "A Beginner’s Guide to TypeScript",
        "description": "An introduction to TypeScript, its benefits, and how to get started."
    },
    {
        "id": 4,
        "title": "Optimizing Performance in Next.js Applications",
        "description": "Learn techniques to boost performance in Next.js for faster and more efficient web apps."
    },
    {
        "id": 5,
        "title": "Mastering CSS Grid Layout",
        "description": "Step-by-step guide on creating complex layouts easily using CSS Grid."
    },
    {
        "id": 6,
        "title": "Getting Started with Node.js and Express",
        "description": "Build your first backend application with Node.js and the Express framework."
    },
    {
        "id": 7,
        "title": "Building Accessible Websites: Best Practices",
        "description": "An overview of accessibility best practices to make your websites inclusive for all users."
    },
    {
        "id": 8,
        "title": "GraphQL vs REST: Choosing the Right API Style",
        "description": "A comparison of GraphQL and REST to help you decide which API style fits your project."
    },
    {
        "id": 9,
        "title": "Improving Web Security with HTTPS and CORS",
        "description": "A guide to implementing HTTPS and managing CORS for a secure web application."
    },
    {
        "id": 10,
        "title": "Introduction to Docker for Developers",
        "description": "An overview of Docker, its uses, and how developers can leverage it for application deployment."
    }
]



  return (
    <main className="mt-10">
        <div>This is blog page!</div>
        <hr />
        <ul>
          {blogs.map(b=> (
          <li className='m-3' key={b.id}>
            <Link href={`/blog/${b.id}`}>{b.title}</Link></li>
          ))}
        </ul>
    </main>
  )
}

