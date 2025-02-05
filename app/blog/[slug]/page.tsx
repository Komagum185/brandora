import Image from 'next/image';
import { client } from '../../../sanity';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function SinglePost({ params }: PostPageProps) {
  const { slug } = params;

  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    publishedAt,
    "authorName": author->name,
    mainImage
  }`;

  const post = await client.fetch(query, { slug });

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>By {post.authorName} on {new Date(post.publishedAt).toLocaleDateString()}</p>
      {post.mainImage && <Image src={post.mainImage} alt={post.title} height={60} width={60}/>}
      <div>{}</div>
    </div>
  );
}
