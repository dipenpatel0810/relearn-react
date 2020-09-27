import React from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default function Todo() {
    const [list, updateList] = React.useState(['CSK', 'MI', 'RR', 'SRH']);
    const [val, setVal] = React.useState('');

    function add() {
        alert("Adding " + val + " to the List");
        var teamList = list;
        teamList.push(val);
        setVal(teamList);
        //Make text field empty again
        setVal("");
    }

    function textUpdate(event) {
        // binds the input
        console.log(event.target.value)
        setVal(event.target.value);
    }

    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc' }} >
                    <TextField id="list" label="Add Item" onChange={textUpdate} value={val} />
                    <Button variant="contained" onClick={add}>Add</Button>
                </Typography>
            </Container>
            <Container maxWidth="lg">
                <ul>
                    {
                        list.map(e => {
                            return (<li>{e}</li>)
                        })
                    }
                </ul>
            </Container>
        </React.Fragment >
    )

}