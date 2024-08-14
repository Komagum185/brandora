import { client } from '../sanity';

export async function fetchPosts() {
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    body,
    publishedAt,
    "authorName": author->name,
    "authorImage": author->image,
    mainImage
  } | order(publishedAt desc)`;

  const posts = await client.fetch(query);
  return posts;
}
