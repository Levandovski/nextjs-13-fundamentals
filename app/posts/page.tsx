import PostsCard from "@/components/PostCard";

interface IPosts {
    userId: number,
    id: number,
    title: string,
    body: string
}

async function loadPages(): Promise<[]> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    
    return data;
}

export default async function PostsPage() {
    const posts: IPosts[] = await loadPages();
    console.log(posts)
    //RSC
    return (
        <div>
            {posts.map((post, key) => {
                return (
                    <PostsCard body={post.body} title={post.title} id={post.id} userId={post.userId} key={key} />
                )
            })}
        </div>
    )
}