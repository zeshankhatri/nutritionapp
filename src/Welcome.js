import * as React from 'react';
import {Button, Grid} from '@mui/material';
import { Link } from "react-router-dom";

function Demo() {
    return <Grid
                container direction="column"
                justifyContent="center"
                alignItems="center">
                
                <h1>
                    Welcome to our Nutrition App!
                </h1>
                <p
                    style={{textAlign: 'center'}}>
                    The purpose of this app is to provide you some replacements for the ingredients in your recipes,
                    based on the specific nutrients you would like to cut back on.
                    <br /><br />
                    Click the button below to begin.
                </p>
                <Button 
                    variant="contained" 
                    component={Link} 
                    to='/choice'
                    underline="none">Make Your Selections
                </Button>
            </Grid>
}

export default Demo;