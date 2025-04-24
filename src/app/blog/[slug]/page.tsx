import { use } from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import Navigation from '@/components/shared/Navigation'
import { getPostBySlug } from '@/lib/mdx'
import MDXComponents from '@/components/MDXComponents'

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const post = use(getPostBySlug(slug))

  if (!post) {
    return notFound()
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
            <MDXRemote source={post.content} components={MDXComponents} />
          </div>
        </div>
      </article>
    </>
  )
} 