import type { Post } from "@prisma/client";
import { json, type LoaderFunction, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetchPosts } from "prisma/helpers/post";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

type LoaderData = {
  posts: Post[];
};

export const loader: LoaderFunction = async () => {
  const posts = await fetchPosts();
  return json({ posts });
};

export default function Index() {
  const data = useLoaderData<LoaderData>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h2>Posts</h2>
      {/* todo: render posts in a user-friendly way */}
      <pre>{JSON.stringify(data.posts, null, 2)}</pre>
    </div>
  );
}
