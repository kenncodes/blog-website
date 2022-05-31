import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post/Post';

import useStyles from './styles';
import { Grid, CircularProgress } from '@material-ui/core'

const Posts = () => {

    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(posts);
    return (

        !posts.length ? <CircularProgress /> :
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                
            </Grid>

    )
}

export default Posts;