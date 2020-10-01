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

function PostInfo(props) {
    const postId = props.match.params.id;
    const classes = useStyles();
    const [comments, setComments] = React.useState([]);

    // Get Comments for the selected Post 
    React.useEffect(() => {
        PostFeed.getComments(postId).then(response => setComments(response))
    });

    return (
        <React.Fragment>
            <Container>
                <Typography variant="h3" gutterBottom>
                    <Link to="/">Back to Posts</Link>
                    <br />
                    Comments
                </Typography>
                <List className={classes.root}>
                    {
                        comments.map(comment => {
                            return (
                                <React.Fragment>
                                    <ListItem>
                                        <ListItemText primary={comment.name} secondary={comment.body} />
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

export default withRouter(PostInfo);
