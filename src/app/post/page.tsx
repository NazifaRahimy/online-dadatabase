// import { PrismaClient } from "@prisma/client";
// export const dynamic = "force-dynamic";
// const prisma = new PrismaClient();

// export default async function PostsPage() {
//   const posts = await prisma.post.findMany({
//     orderBy: { createdAt: "desc" },
//   });

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">Posts</h1>

//       <div className="space-y-4">
//         {posts.map((post) => (
//           <div key={post.id} className="border p-4 rounded w-[300px] h-[200px] bg-red-200">
//             <h2 className="font-semibold text-lg">{post.title}</h2>
//             <p className="text-gray-700 mt-2">{post.body}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import Link from "next/link";

 export const dynamic = "force-dynamic";

interface Post {
  id: number;
  title: string;

  body: string;
  userId: number;
  createdAt: string;
}

export default async function PostsPage() {
  // const res = await fetch("http://localhost:3000/api/create-Ad", {
  //   cache: "no-store", // همیشه دیتای تازه
  // });
  const res = await fetch(
  `${process.env.NEXT_PUBLIC_SITE_URL}/api/create-Ad`,
  { cache: "no-store" }
);
//    const res = await fetch("/api/create-Ad", {
//   cache: "no-store",
// });

  if (!res.ok) {
    return <div className="p-6">Failed to load posts</div>;
  }

  const posts: Post[] = await res.json();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Posts</h1>
   <Link  className="my-5 text-2xl underline" href='/create-Ad'>Create Ad</Link>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded">
            <h2 className="font-semibold text-lg">{post.title}</h2>
            <p className="text-gray-700 mt-2">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}