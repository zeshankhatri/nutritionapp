import * as React from 'react';
import Link from '@mui/material/Link';
import { Link as RouterLink } from "react-router-dom";

function Search() {
    return <Link to="/results" color="secondary" component={RouterLink} underline="none">Move to Results Page</Link>
}

export default Search;