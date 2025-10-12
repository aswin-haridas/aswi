import { getBlogBySlug } from "@/lib/blogs";
import BlogRenderer from "@/components/ContentRenderer";
import { notFound } from "next/navigation";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <BlogRenderer content={blog.content} className="mt-8" />

      <div className="mb-8">
        <p className="text-sm text-gray-600">
          Published on {new Date(blog.publishedAt).toLocaleDateString()}
        </p>
      </div>

      {blog.tags.length > 0 && (
        <div className="mt-12 border-t pt-8">
          <h3 className="mb-4 text-lg font-semibold font-heading">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-red-600 text-white px-3 py-1 text-sm border hover:opacity-80 transition-opacity"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
