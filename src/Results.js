import * as React from 'react';
import Link from '@mui/material/Link';
import { Link as RouterLink } from "react-router-dom";

function Results() {
    return <div style={{borderCollapse: "separate", borderRadius:"50%"}}>
                <Link to="/search" color="primary" component={RouterLink} underline="none" style={{border:"black"}}>Click Here to Make Another Search</Link>
                <Link to="/choice" color="secondary" component={RouterLink} underline="none">Click Here to Change Nutritional Choices</Link>
            </div>
}

export default Results;