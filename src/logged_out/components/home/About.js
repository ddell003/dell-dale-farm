import React from "react";
import { Grid, Typography } from "@mui/material";
import calculateSpacing from "./calculateSpacing";
import { withTheme } from "@mui/styles";
import useWidth from "../../../shared/functions/useWidth";


function About(props) {
    const { theme } = props;
    const width = useWidth();

    return (
        <div style={{ backgroundColor: "#FFFFFF" }}>
            <div className="container-fluid lg-p-top">
                <Typography variant="h3" align="center" className="lg-mg-bottom">
                    About
                </Typography>
                <div className="container-fluid">
                    <Grid container spacing={calculateSpacing(width, theme)}>
                        <Typography variant="p" align="center" className="lg-mg-bottom">
                            coming soon...
                        </Typography>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

About.propTypes = {};

export default withTheme(About);
