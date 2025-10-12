import { getBlogs } from "@/lib/blogs";
import Link from "next/link";

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 font-heading">Blogs</h1>
      <div className="space-y-6">
        {blogs.map((blog) => (
          <article key={blog.slug} className="border-b pb-6">
            <Link href={`/blogs/${blog.slug}`} className="group">
              <h2 className="text-2xl font-semibold mb-2 group-hover:underline font-heading">
                {blog.title}
              </h2>
              <p className="text-gray-600 mb-3">{blog.excerpt}</p>
              <div className="flex gap-4 text-sm text-gray-500">
                <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                <span>{blog.readingTimeMinutes} min read</span>
                <span className="flex gap-2">
                  {blog.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={`${tag}-${index}`}
                      className="bg-red-600 text-white px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
