//pode ser feito passando props no lugar de title, body, cover, chamado uma const props *anexo1
//e passando nos elementos {post.title}, {post.body} e etc.

export const PostCard = ({ title, body, cover }) => {
    //const {post} = props; *anexo1

    return (
        <div className="post">
            <img src={cover} alt={title} />
            <div className='post-content'>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        </div>

    );
};