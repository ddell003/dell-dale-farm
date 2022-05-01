import React from "react";
import PropTypes from "prop-types";
import format from "date-fns/format";
import {Typography, Card, Box, Chip} from "@mui/material";

import withStyles from '@mui/styles/withStyles';
import {formatImgUrl} from "../../../utils/photos";

const styles = (theme) => ({
    img: {
        width: "100%",
        height: "auto",
        marginBottom: 8,
    },
    card: {
        boxShadow: theme.shadows[2],
    },
    noDecoration: {
        textDecoration: "none !important",
    },
    title: {
        transition: theme.transitions.create(["background-color"], {
            duration: theme.transitions.duration.complex,
            easing: theme.transitions.easing.easeInOut,
        }),
        cursor: "pointer",
        color: theme.palette.secondary.main,
        "&:hover": {
            color: theme.palette.secondary.dark,
        },
        "&:active": {
            color: theme.palette.primary.dark,
        },
    },
    link: {
        transition: theme.transitions.create(["background-color"], {
            duration: theme.transitions.duration.complex,
            easing: theme.transitions.easing.easeInOut,
        }),
        cursor: "pointer",
        color: theme.palette.primary.main,
        "&:hover": {
            color: theme.palette.primary.dark,
        },
    },
    showFocus: {
        "&:focus span": {
            color: theme.palette.secondary.dark,
        },
    },
    bull: {
        color:"#FFF",
        backgroundColor:"#b3294e"
    },
    calves: {
        color:"#FFF",
        backgroundColor:"#454E9E"
    },
    heifer: {
        color:"#FFF",
        backgroundColor:"#F00699"
    },
    cow: {
        color:"#FFF",
        backgroundColor:"#018E42"
    },
    herdsire: {
        color:"black",
        backgroundColor:"#F7D002"
    },
    native: {
        color:"black",
        backgroundColor:"#FFA000",
    },
    beef: {
        color:"#fff",
        backgroundColor:"#582B11",
    },
});

function HerdCard(props) {
    const { classes, pictureUrl, title, snippet, tags } = props;

    return (
        <Card className={classes.card}>
            <img src={formatImgUrl(pictureUrl)} className={classes.img} alt="" />
            <Box p={2}>
                <Typography variant="body2" color="textSecondary">
                    {format(new Date(), "PPP", {
                        awareOfUnicodeTokens: true,
                    })}
                </Typography>

                    <Typography variant="h6">
                        <span className={classes.title}>{title}</span>
                    </Typography>

                <Typography variant="body1" color="textSecondary">
                    {snippet}
                </Typography>
                {tags.map((tag) => (
                    <Chip label={tag.toString().toUpperCase()} color="primary" className={classes[tag.toString().toLowerCase()]} />
                ))}

            </Box>
        </Card>
    );
}

HerdCard.propTypes = {
    classes: PropTypes.object.isRequired,
    pictureUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    snippet: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
};

export default withStyles(styles, { withTheme: true })(HerdCard);
