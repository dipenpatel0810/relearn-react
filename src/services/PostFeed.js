const GET_POSTS = "https://jsonplaceholder.typicode.com/posts";
var GET_COMMENTS = "https://jsonplaceholder.typicode.com/posts/POST_ID/comments";

const getPosts = () => fetch(GET_POSTS).then(response => response.json())
const getComments = (postId) => {
    GET_COMMENTS = GET_COMMENTS.replace('POST_ID', postId);
    return fetch(GET_COMMENTS).then(response => response.json());
}

module.exports = { getPosts, getComments }