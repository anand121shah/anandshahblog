'use server'

import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export type BlogPost = {
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
  content: string
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    await fs.access(postsDirectory)
  } catch {
    await fs.mkdir(postsDirectory, { recursive: true })
    return []
  }

  const fileNames = await fs.readdir(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.mdx$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = await fs.readFile(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
          slug,
          content,
          title: data.title,
          date: data.date,
          summary: data.summary,
          tags: data.tags || [],
        }
      })
  )

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = await fs.readFile(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      content,
      title: data.title,
      date: data.date,
      summary: data.summary,
      tags: data.tags || [],
    }
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error)
    return null
  }
} 