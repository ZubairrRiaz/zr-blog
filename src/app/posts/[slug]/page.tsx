import { getAllPosts } from "@/lib/post"
import { notFound } from "next/navigation";
import MarkdownIt from 'markdown-it';



const md = MarkdownIt()

async function fetchPosts(slug:string) {
    const posts =  getAllPosts()
    return posts.find((post) => post.slug === slug)
    
}

export default async function Post({params}:any) {

    const post:any = await fetchPosts(params.slug)


    if(!post) notFound()

    const htmlConverter = md.render(post.content)

    return(
        <article className="sm:max-w-4xl mx-auto sm:px-16 px-4">
            <div className="prose font-[family-name:var(--font-geist-sans)] text-gray-800" dangerouslySetInnerHTML={{__html: htmlConverter}} />
            <h1>{post.title}</h1>
            <p>{post.date}</p>
        </article>
    )
}