'use client'

import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import Navigation from '@/components/shared/Navigation'
import { getPostBySlug } from '@/lib/mdx'
import { useEffect, useState } from 'react'
import type { BlogPost } from '@/lib/mdx'

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      const fetchedPost = await getPostBySlug(params.slug)
      setPost(fetchedPost)
      setIsLoading(false)
    }
    fetchPost()
  }, [params.slug])

  if (isLoading) {
    return (
      <>
        <Navigation />
        <div className="relative px-6 pt-24 lg:px-8">
          <div className="mx-auto max-w-3xl py-12">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-8"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <article className="relative px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-x-4 text-sm">
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
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </article>
    </>
  )
} 