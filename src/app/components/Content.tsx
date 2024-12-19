import { getAllPosts } from "@/lib/post";
import Link from "next/link";


export default function Content() {
  const posts = getAllPosts();
  return (
    <div>

      <div id="blog" className="p-8 font-[family-name:var(--font-geist-sans)] mt-14 sm:mt-36 bg-white">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-500">Available Blogs</h1>
        <div className="flex flex-col sm:flex-wrap sm:flex-row justify-center items-center gap-8">
          {posts.map((post: any, index:number) => (
            <div
              key={index}
              className="bg-white text-center shadow-lg rounded-lg p-6 w-full sm:w-1/3 transform transition duration-500 hover:scale-105"
            >
              <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
              <p className="text-gray-700 mb-4">{post.author}</p>
              <p className="text-gray-700 mb-4">{post.date}</p>
              <div>
                <Link
                  href={`/posts/${post.slug}`}
                  className="bg-blue-700 text-white p-2 rounded-md font-bold"
                >
                  {" "}
                  {post.text}{" "}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
  
    </div>
  );
}