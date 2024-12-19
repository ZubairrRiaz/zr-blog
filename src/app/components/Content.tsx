import { getAllPosts } from "@/lib/post";
import Link from "next/link";

// Define the Post interface
interface Post {
  slug: string;
  title: string;
  author: string;
  date: string;
  text: string;
  [key: string]: any; // Allow for additional fields if necessary
}

// Define the props expected in the component
interface ContentProps {
  posts: Post[];
}

export default function Content({ posts }: ContentProps) {
  return (
    <div>
      <div id="blog" className="p-8 font-[family-name:var(--font-geist-sans)] mt-14 sm:mt-36 bg-white">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-500">Available Blogs</h1>
        <div className="flex flex-col sm:flex-wrap sm:flex-row justify-center items-center gap-8">
          {posts.map((post: Post, index: number) => (
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
                  {post.text}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// This function runs at build time and fetches the posts
export async function getStaticProps() {
  const posts = await getAllPosts();  // Fetch the posts asynchronously

  return {
    props: {
      posts,  // Pass the posts to the component as props
    },
  };
}
