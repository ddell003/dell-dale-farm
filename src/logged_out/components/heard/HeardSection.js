import React from "react";
import { Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { withTheme } from "@mui/styles";
import useWidth from "../../../shared/functions/useWidth";
import calculateSpacing from "../home/calculateSpacing";
import HeardCard from "./HeardCard";


const cows = [
    {
        id: "1",
        title: "Delldale Babe Ruth 3",
        snippet: "By Pinesedge Babe Ruth 3rd",
        date: "",
        year: "Spring 2022",
        pictureUrl: "https://drive.google.com/file/d/1mgRARjvD-6ArOhITEFHFaXXqwazQ98SS/view",
        tags: ["bull", "calves",]
    },
    {
        id: "2",
        title: "Delldale Cpr Powerdrive",
        snippet: "",
        date: "",
        year: "Spring 2022",
        pictureUrl: "https://drive.google.com/file/d/1KBlINS0QKORYipgBCQdP386Kz0EDwKey/view",
        tags: ["bull", "calves"]
    },
    {
        id: "3",
        title: "Delldale Hi Stella",
        snippet: "",
        date: "",
        year: "Spring 2022",
        pictureUrl: "https://drive.google.com/file/d/1gun14EQ7ApfHVSVVZl6PbMMkHfxPucU1/view",
        tags: ["heifer", "calves"]
    },
    {
        id: "4",
        title: "Delldale Oscar",
        snippet: "",
        date: "",
        year: "Spring 2022",
        pictureUrl: "https://drive.google.com/file/d/12JKU5rrnWa0PO_NTm3sZJ6KqCeggzj5o/view",
        tags: ["bulls", "calves"]
    },
    {
        id: "5",
        title: "Delldale Bessie",
        snippet: "",
        date: "",
        year: "Spring 2022",
        pictureUrl: "https://drive.google.com/file/d/1xxRCB5TpGveLhwGNYZmOJYVBR9gvAM5e/view",
        tags: ["cow",]
    },
    {
        id: "6",
        title: "Delldale Nsp Iris",
        snippet: "",
        date: "",
        year: "Spring 2022",
        pictureUrl: "https://drive.google.com/file/d/1WVVTJ-fOk3OJ8zTuT2jDIaRGUYgrZu2_/view",
        tags: ["cow",]
    },
    {
        id: "7",
        title: "Delldale Ehm Clementine",
        snippet: "",
        date: "",
        year: "Spring 2022",
        pictureUrl: "https://drive.google.com/file/d/1WXfSZnuiMtVfvXyWx917mqqxi2VIRX4K/view",
        tags: ["cow",]
    },
    {
        id: "8",
        title: "Delldale Scarlette Master",
        snippet: "Herdsire By Cantagree Cache Master",
        date: "",
        year: "Spring 2022",
        pictureUrl: "https://drive.google.com/file/d/1sLnRcn8aRviW_YjWF1FVqIEJxzI2Flr8/view?usp=sharing",
        tags: ["bull","Herdsire"]
    },
    {
        id: "9",
        title: "Delldale Airline Pete",
        snippet: "Herdsire",
        date: "",
        year: "Spring 2022",
        pictureUrl: "https://drive.google.com/file/d/1xW3VhQO3-YRCuJ6LH3645_zjUE99CpdW/view",
        tags: ["bull","Herdsire"]
    },
    {
        id: "10",
        title: "Delldale PP Vesper",
        snippet: "Near Native Cow",
        date: "",
        year: "Spring 2022",
        pictureUrl: "https://drive.google.com/file/d/1TM2DsxFr_0V_x9M6hKA2DaH-XbS0uFn7/view",
        tags: ["cow","Native"]
    },
    {
        id: "11",
        title: "Delldale Wc BB Bridget",
        snippet: "Near Native Cow",
        date: "",
        year: "Spring 2022",
        pictureUrl: "https://drive.google.com/file/d/1pnbEXkOeT-Vug9LAQX_EVHQ4D1EKOLJ4/view",
        tags: ["cow","Native"]
    },
    {
        id: "12",
        title: "Delldale Wtm Lady",
        snippet: "Native Beef Cow",
        date: "",
        year: "Spring 2022",
        pictureUrl: "https://drive.google.com/file/d/1JC3eTDTI-NBpm7cz8uPj8uJ9_ikFVhXT/view",
        tags: ["cow","Native", "beef"]
    },

];

function HeardSection(props) {
    const { theme } = props;
    const width = useWidth();
    const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <div style={{ backgroundColor: "#FFFFFF" }}>
            <div className="container-fluid lg-p-top">
                <Typography variant="h3" align="center" className="lg-mg-bottom">
                    Heard
                </Typography>
                <div className="container-fluid">
                    <Grid container spacing={calculateSpacing(width, theme)}>
                        {cows.map((element) => (
                            <Grid
                                item={true}
                                xs={6}
                                md={4}
                                data-aos="zoom-in-up"
                                data-aos-delay={isWidthUpMd ? element.mdDelay : element.smDelay}
                                key={element.id}
                            >
                                <HeardCard
                                    pictureUrl={element.pictureUrl}
                                    title={element.title}
                                    year={element.year}
                                    section={element.section}
                                    snippet={element.snippet}
                                    tags={element.tags}
                                    date={element.date}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </div>
    );
}

HeardSection.propTypes = {};

export default withTheme(HeardSection);
