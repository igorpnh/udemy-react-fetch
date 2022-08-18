import { PostCard } from "../PostCard";


export const Posts = ({ posts }) => (
    <div className='posts'>
        {posts.map(post => (
            <PostCard
                //esses atributos passados são as props
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                cover={post.cover}
            // post={post}
            />
        ))}
    </div>
);