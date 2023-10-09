import PostsCard from '@/components/PostCard';
import PostsPage from '../page';
import { Suspense } from 'react';

interface IParams {
    params: {
        postId: string
    },
    searchParams: {}
}

interface IPosts {
    userId: number,
    id: number,
    title: string,
    body: string
}

async function loadPost(id: string): Promise<IPosts | undefined> {

    console.log(id)

    if (!id) return undefined;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();


    return data;
}

export default async function Page({ params }: IParams) {

    const post: IPosts | undefined = await loadPost(params.postId);

    return (
        <div>
            {typeof post !== 'undefined' && (
                <>
                    <h1>{typeof post.id !== 'undefined' && `postId: ${post.id}`}</h1>
                    <PostsCard body={post.body} title={post.title} id={post.id} userId={post.userId} key={0} />
                    <h3>Other publications</h3>

                    <hr />
                    <Suspense fallback={
                        <div>
                            Loading publications...
                        </div>
                    }>
                        <PostsPage />
                    </Suspense>
                </>
            )}

        </div>
    )
}