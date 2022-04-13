import React from "react";
import { Grid, Typography } from "@mui/material";
import calculateSpacing from "./calculateSpacing";
import useWidth from "../../../shared/functions/useWidth";
import WaveBorder from "../../../shared/components/WaveBorder";
import PropTypes from "prop-types";
import withStyles from "@mui/styles/withStyles";

const styles = (theme) => ({

    waveBorder: {
        paddingTop: theme.spacing(4),
    },
});


function Welcome(props) {
    const { theme, classes } = props;
    const width = useWidth();

    return (
        <div style={{ backgroundColor: "#FFFFFF" }}>
            <div className="container-fluid lg-p-top">
                <Typography variant="h3" align="center" className="lg-mg-bottom">
                    Welcome to our farm!

                </Typography>
                <div className="container-fluid">
                    <Grid container spacing={calculateSpacing(width, theme)}>
                        <Typography variant="h5" align="center" className="lg-mg-bottom">
                           Our 100 cow herd has three distinct cow lines, Native Shorthorns, Irish Shorthorns and Club Calves. Your inquires and visits are always welcomed
                        </Typography>
                    </Grid>
                </div>
                <Typography variant="h3" align="center" className="lg-mg-bottom">
                    Mission Statement
                </Typography>
                <div className="container-fluid">
                    <Grid container spacing={calculateSpacing(width, theme)}>
                        <Typography variant="h5" align="center" className="lg-mg-bottom">
                            To promote and propagate the native american milking shorthorn cattle and other rare american livestock breeds. THis will be done through the breeding, raising, and preserving of these breeds
                        </Typography>
                    </Grid>
                </div>
            </div>
            <WaveBorder
                upperColor={'linear-gradient(189deg, #FFA000 30%, #4CAF50 80%)'}
                lowerColor="#FFFFFF"
                className={classes.waveBorder}
                animationNegativeDelay={2}

            />
        </div>
    );
}

Welcome.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(Welcome);
