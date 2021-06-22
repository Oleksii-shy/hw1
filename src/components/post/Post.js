import './Post.css'
export default function Post({item: {userId, id, title, body}}) {
    return (
        <div>
            <h4>{id}. User id - {userId}</h4>
            <h5>{title}</h5>
            <p>{body}</p>
        </div>
    );
}