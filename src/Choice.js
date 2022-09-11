import * as React from 'react';
import {Box, Checkbox, FormControlLabel, FormGroup, Link} from '@mui/material';
import { Link as RouterLink } from "react-router-dom";

function Choice() {
    return (<Box
                sx={{
                    height:'100%',
                    backgroundColor: 'beige',
                }}>
                <h1
                    sx={{
                        border:'1px solid black'
                    }}>What nutrients are you trying to cut back on?
                    </h1>
                <Box
                    sx={{
                        display:'flex',
                        justifyContent:'center'
                    }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Sodium" />
                            <FormControlLabel control={<Checkbox />} label="Saturated Fat" />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Sugar" />
                            <FormControlLabel control={<Checkbox />} label="Cholesterol" />
                        </FormGroup>
                </Box>
                <Link
                            sx={{
                                alignText:"center",
                                margin:"10px"
                            }}
                            to="/search" 
                            color="secondary" 
                            component={RouterLink} 
                            underline="none">
                                Move to Search Page
                        </Link>
            </Box>
    );
}

export default Choice;