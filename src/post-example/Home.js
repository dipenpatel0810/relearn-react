import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const PostFeed = require('../services/PostFeed');

const useStyles = makeStyles(() => ({
    root: {
      width: '100%',
      maxWidth: 'auto',
      backgroundColor: 'lightgrey',
    },
  }));

export default function Home() {
    const classes = useStyles();
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        PostFeed.getPosts().then(response => setPosts(response))
    });
    return (
        <React.Fragment>
            <Container>
                Post Data
                <List className={classes.root}>
                    {
                        posts.map(post => {
                            return (
                                <React.Fragment>
                                    <ListItem>
                                        <ListItemText primary={post.title} secondary={post.body}/>
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