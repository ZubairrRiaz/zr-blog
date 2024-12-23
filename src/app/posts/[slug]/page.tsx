import { getAllPosts } from "@/lib/post"
import { notFound } from "next/navigation";
import MarkdownIt from 'markdown-it';
import Image from "next/image";


const md = MarkdownIt()

async function fetchPosts(slug: string): Promise<PostData | undefined> {
    const posts = getAllPosts()
    return posts.find((post) => post.slug === slug) as PostData | undefined
}

interface PostParams {
    params: {
        slug: string;
    };
}

interface PostData {
    title: string;
    content: string;
    date: string;
    slug: string; // Ensure slug is part of the PostData if needed
}

export default async function Post({ params }: PostParams) {

    const post: PostData | undefined = await fetchPosts(params.slug)

    if (!post) notFound()

    const htmlConverter = md.render(post.content)

    return (
        <article className="sm:max-w-4xl mx-auto sm:px-16 px-4">
            <div className="flex justify-center"><Image src={'/sample-04.png'} alt="pic" height={100} width={300}/></div>
            <h1 className="font-bold text-3xl text-center font-serif py-5 bg-black text-white rounded-lg m-6">{post.title}</h1>
            <div className="prose font-[family-name:var(--font-geist-sans)] text-gray-900 text-lg text-" dangerouslySetInnerHTML={{ __html: htmlConverter }} />
            <h1>{post.title}</h1>
            <p>{post.date}</p>
        </article>
    )
}

