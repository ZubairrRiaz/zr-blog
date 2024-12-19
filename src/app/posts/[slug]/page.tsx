import { getAllPosts } from "@/lib/post";
import { notFound } from "next/navigation";
import MarkdownIt from 'markdown-it';

const md = MarkdownIt();

interface Post {
    slug: string;
    content: string;
    title: string;
    date: string;
    [key: string]: any;
}

async function fetchPosts(slug: string): Promise<Post | undefined> {
    const posts = await getAllPosts();  // Fetch posts asynchronously
    return posts.find((post) => post.slug === slug);  // Find the post by slug
}

export default async function Post({ params }: { params: { slug: string } }) {
    const post = await fetchPosts(params.slug);

    if (!post) notFound();  // If no post found, return 404

    const htmlConverter = md.render(post.content);  // Convert markdown to HTML

    return (
        <article className="sm:max-w-4xl mx-auto sm:px-16 px-4">
            <div
                className="prose font-[family-name:var(--font-geist-sans)] text-gray-800"
                dangerouslySetInnerHTML={{ __html: htmlConverter }}
            />
            <h1>{post.title}</h1>
            <p>{post.date}</p>
        </article>
    );
}
