import * as React from 'react';
import {Button, Link} from '@mui/material';
import { Link as RouterLink } from "react-router-dom";

function Demo() {
    const [flag, setFlag] = React.useState(true);

    return <div>
                <Button 
                    variant="contained" 
                    onClick={() => setFlag(!flag)} 
                    color={flag ? "primary" : "secondary"}>Hello World
                </Button>
                <Link to="/choice" color="secondary" component={RouterLink} underline="none">Move to Choice Page</Link>
            </div>
}

export default Demo;