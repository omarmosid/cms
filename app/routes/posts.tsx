import type { Route } from "./+types/posts";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Posts" },
    { name: "description", content: "This is the posts page." },
  ];
}

export default function Posts() {
  return (
    <div>
      <h1>Posts</h1>
      <p>This is the posts page.</p>
    </div>
  );
}
