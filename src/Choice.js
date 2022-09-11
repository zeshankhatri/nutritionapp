import * as React from 'react';
import {Grid, Checkbox, FormControlLabel, FormGroup, Link, Paper} from '@mui/material';
import { Link as RouterLink } from "react-router-dom";

function Choice() {
    return (<Grid
                container direction="column"
                justifyContent="center"
                alignItems="center">

                <h1>What nutrients are you trying to cut back on?
                    </h1>
                <Paper
                    elevation={1}
                    sx={{
                        display:'flex',
                        justifyContent:'center'
                    }}>
                        <FormGroup
                            sx={{
                                margin:'20px'
                            }}>
                            <FormControlLabel control={<Checkbox />} label="Sodium" />
                            <FormControlLabel control={<Checkbox />} label="Fat" />
                        </FormGroup>
                        <FormGroup
                            sx={{
                                margin:'20px'
                            }}>
                            <FormControlLabel control={<Checkbox />} label="Sugar" />
                            <FormControlLabel control={<Checkbox />} label="Carbohydrates" />
                        </FormGroup>
                </Paper>
                <Link
                            sx={{
                                alignText:"center",
                                margin:"10px"
                            }}
                            to="/search" 
                            color="primary" 
                            component={RouterLink} 
                            underline="hover">
                                Confirm Selections
                        </Link>
            </Grid>
    );
}

export default Choice;