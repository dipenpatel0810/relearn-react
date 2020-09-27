const GET_POSTS = "https://jsonplaceholder.typicode.com/posts";
const getPosts = () => fetch(GET_POSTS).then(response => response.json())

module.exports = { getPosts }