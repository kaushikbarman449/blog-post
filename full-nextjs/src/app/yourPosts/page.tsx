import { Suspense } from "react";
import YourPostList from "./yourPostList";
export type Post = {
  id: string;
  title: string;
  body: string;
};

const page = () => {
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Your Posts</h1>
      <Suspense fallback="Loading...">
        <YourPostList />
      </Suspense>
    </main>
  );
};

export default page;
