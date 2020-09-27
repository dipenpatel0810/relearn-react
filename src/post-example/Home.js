import React from 'react'
const PostFeed = require('../services/PostFeed');

export default function Home() {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        PostFeed.getPosts().then(response => setPosts(response))
    });
    return (
        <React.Fragment>
            Post Data
            <ul>
                {
                    posts.map(post => {
                        return (<React.Fragment>
                            <li>{post.userId}</li>
                            <li>{post.title}</li>
                            <br />
                        </React.Fragment>)
                    })
                }
            </ul>

        </React.Fragment>
    )
}