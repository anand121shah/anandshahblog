'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '@/components/shared/Navigation'
import { getAllPosts } from '@/lib/mdx'
import { useEffect, useState } from 'react'
import type { BlogPost } from '@/lib/mdx'

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getAllPosts()
      setPosts(fetchedPosts)
    }
    fetchPosts()
  }, [])

  return (
    <>
      <Navigation />
      <div className="relative px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-4xl py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
              Blog
            </h1>
            <div className="grid gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="relative rounded-lg border border-gray-200 dark:border-gray-800 p-8 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
                >
                  <div className="flex items-center gap-x-4 text-xs mb-4">
                    <time dateTime={post.date} className="text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="relative z-10 rounded-full bg-gray-50 dark:bg-gray-800 px-3 py-1.5 font-medium text-gray-600 dark:text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="group relative">
                    <h3 className="text-2xl font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      <Link href={`/blog/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
} 