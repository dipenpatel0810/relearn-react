import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default function Counter() {
    const [count, setCount] = React.useState(0);

    function incrementCount() {
        console.log("Increase the counter by 1");
        setCount(count + 1);
    }
    function decrementCount() {
        console.log("Decrease the counter by 1");
        setCount(count - 1);
    }
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc' }} >
                    <Button variant="contained" onClick={incrementCount}>Increase +</Button>
                    <Button variant="contained" onClick={decrementCount}>Decrease -</Button>
                </Typography>
            </Container>
            <Container maxWidth="lg">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc' }} >
                    {count}
                </Typography>
            </Container>
        </React.Fragment >
    )

}