import * as React from 'react';
import { Button, Grid } from '@mui/material';
import { Link } from "react-router-dom";

function Results() {
    return <Grid
                sx={{ flexGrow: 1 }}
                container direction="column"
                mt="20px"
                rowGap={"10px"}
                justifyContent="center"
                alignItems="center">
                <Button 
                    variant="contained" 
                    component={Link} 
                    to='/choice'
                    underline="none">Click Here to Make Another Search
                </Button>
                <Button 
                    variant="contained" 
                    component={Link} 
                    to='/choice'
                    underline="none"
                    color="secondary">Return to Nutritional Preferences
                </Button>
            </Grid>
}

export default Results;