import { client } from '../../sanity';
import Link from 'next/link';

export default async function BlogPage() {
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    publishedAt,
    "authorName": author->name,
    mainImage
  } | order(publishedAt desc)`;

  const posts = await client.fetch(query);

  return (
    <div className='flex justify-center'>
      <h1 className='text-xl font-sans uppercase text-pretty'>Blog Posts</h1>
      <div>
        {posts.map((post: any) => (
          <div key={post._id}>
            <Link href={`/blog/${post.slug.current}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>By {post.authorName} on {new Date(post.publishedAt).toLocaleDateString()}</p>
            {post.mainImage && <img src={post.mainImage} alt={post.title} />}
          </div>
        ))}
      </div>
    </div>
  );
}
