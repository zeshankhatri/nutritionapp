import * as React from 'react';
import { Grid, Link, IconButton, InputBase, Paper } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material'
import { Link as RouterLink } from "react-router-dom";

function Search() {
    return <Grid
                container direction="column"
                justifyContent="center"
                alignItems="center">

                <h1>What nutrients are you trying to cut back on?
                    </h1>
                <Paper
                    elevation={1}
                    sx={{mb:'10px', padding:'2px'}}>
                    <InputBase
                        sx={{ ml: 1, width:'400px'}}
                        placeholder="Enter ingredient..."
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton 
                        type="button" 
                        sx={{ p: '10px' }} 
                        aria-label="search"
                        component={RouterLink}
                        to="/results">
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <Link to="/choice" color="primary" component={RouterLink} underline="none">Return to Nutritional Preferences</Link>
            </Grid>
}

export default Search;