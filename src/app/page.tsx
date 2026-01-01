// import Link from "next/link";



// interface Post {
//   id: number;
//   title: string;
//   body: string;
//   userId: number;
//   createdAt: string;
// }

// export default async function PostsPage() {
//   const res = await fetch("http://localhost:3001/api/create-Ad", {
//     cache: "no-store", // همیشه دیتای تازه
//   });
// //    const res = await fetch("/api/create-Ad", {
// //   cache: "no-store",
// // });

//   if (!res.ok) {
//     return <div className="p-6">Failed to load posts</div>;
//   }

//   const posts: Post[] = await res.json();

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">Posts</h1>
//    <Link  className="my-5 text-2xl underline" href='/create-Ad'>Create Ad</Link>
//       <div className="space-y-4">
//         {posts.map((post) => (
//           <div key={post.id} className="border p-4 rounded">
//             <h2 className="font-semibold text-lg">{post.title}</h2>
//             <p className="text-gray-700 mt-2">{post.body}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">صفحه اصلی</h1>

      <div className="flex flex-col space-y-4">
        {/* لینک ثبت اعلان */}
        <Link
          href="/create-Ad"
          className="p-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          ثبت اعلان
        </Link>

        {/* لینک دیدن اعلان‌ها */}
        <Link
          href="/post"
          className="p-4 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          مشاهده اعلان‌ها
        </Link>

        {/* لینک دلخواه دیگر */}
        <Link
          href="/favorites"
          className="p-4 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
        >
          علاقه‌مندی‌ها
        </Link>
      </div>
    </div>
  );
}
