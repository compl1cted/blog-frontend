import { Box, Container, CssBaseline } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Navbar } from "../navbar";
import { LayoutProps } from "./layout.props";

const useStyles = makeStyles({
    page: {
        background: "#f9f9f9",
        width: "100%",
    }
});

export const Layout = (props: LayoutProps) => {
    const classes = useStyles();
    const { children, isAuth } = props;
    return (
        <Container component="main" className={classes.page}>
            <CssBaseline />
            <Box>
                {children}
            </Box>
            {isAuth ? <Navbar></Navbar> : null}
        </Container>
    );
};