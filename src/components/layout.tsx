import { Box, CssBaseline, Paper } from '@mui/material'
import React from 'react';
import Navbar from './navbar'

export default function Layout({ children }: any) {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
    }, [value]);

    return (
        <Box sx={{ pb: 7 }} ref={ref}>
            <CssBaseline />
            <main>{children}</main>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <Navbar />
            </Paper>
        </Box>
    )
}