import { Suspense } from "react";
import PostList from "./postList";

export type Post = {
  id: string;
  title: string;
  body: string;
};

const page = () => {
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All Posts</h1>
      <Suspense fallback="Loading...">
        <PostList />
      </Suspense>
    </main>
  );
};

export default page;
