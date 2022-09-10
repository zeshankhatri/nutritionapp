import * as React from 'react';
import Button from '@mui/material/Button';

function Demo() {
    const [flag, setFlag] = React.useState(true);

    return <Button 
            variant="contained" 
            onClick={() => setFlag(!flag)} 
            color={flag ? "primary" : "secondary"}>Hello World</Button>;
}

export default Demo;