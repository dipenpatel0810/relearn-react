import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";


const PostFeed = require('../services/PostFeed');

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        maxWidth: 'auto',
        backgroundColor: 'lightgrey',
    },
}));

function Home() {
    const classes = useStyles();
    const [posts, setPosts] = React.useState([]);

    // Get Posts 
    React.useEffect(() => {
        PostFeed.getPosts().then(response => setPosts(response))
    });
    return (
        <React.Fragment>
            <Container>
                <Typography variant="h3" gutterBottom>
                    Posts from JSON Placeholder
                </Typography>
                <List className={classes.root}>
                    {
                        posts.map(post => {
                            return (
                                <React.Fragment>
                                    <ListItem>
                                        <ListItemText primary={post.title}
                                            secondary={
                                                <React.Fragment>
                                                    {post.body}
                                                    <br />
                                                    <Link to={`/post/${post.userId}`}>Show Comments</Link>
                                                </React.Fragment>}
                                        />
                                    </ListItem>
                                </React.Fragment>
                            )
                        })
                    }
                </List>
            </Container>
        </React.Fragment>
    )
}

export default withRouter(Home);