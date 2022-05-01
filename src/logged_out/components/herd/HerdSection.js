import React from "react";
import { Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { withTheme } from "@mui/styles";
import useWidth from "../../../shared/functions/useWidth";
import calculateSpacing from "../home/calculateSpacing";
import HeardCard from "./HerdCard";


const cows = [
    {
        id: "1",
        title: "Delldale Babe Ruth 3",
        snippet: "By Pinesedge Babe Ruth 3rd",
        date: "",
        year: "Spring 2022",
        pictureUrl: "https://i.imgur.com/93K5Uc8.jpg",
        tags: ["bull", "calves",]
    },
    {
        id: "2",
        title: "Delldale Cpr Powerdrive",
        snippet: "",
        date: "",
        year: "Spring 2022",
        pictureUrl: "https://i.imgur.com/WRqd0GT.jpg",
        tags: ["bull", "calves"]
    },
    {
        id: "3",
        title: "Delldale Hi Stella",
        snippet: "",
        date: "",
        year: "Spring 2022",
        pictureUrl: "https://i.imgur.com/o1BmvoF.jpg",
        tags: ["heifer", "calves"]
    },
    {
        id: "4",
        title: "Delldale Oscar",
        snippet: "",
        date: "",
        year: "Spring 2022",
        pictureUrl: "https://i.imgur.com/jfdQ9lj.jpg",
        tags: ["bulls", "calves"]
    },
    {
        id: "5",
        title: "Delldale Bessie",
        snippet: "",
        date: "",
        year: "Spring 2022",
        pictureUrl: "https://i.imgur.com/hzMRBHI.jpg",
        tags: ["cow",]
    },
    {
        id: "6",
        title: "Delldale Nsp Iris",
        snippet: "",
        date: "",
        year: "Spring 2022",
        pictureUrl: "https://i.imgur.com/Da69hJ1.jpg",
        tags: ["cow",]
    },
    {
        id: "7",
        title: "Delldale Ehm Clementine",
        snippet: "",
        date: "",
        year: "Spring 2022",
        pictureUrl: "https://i.imgur.com/8TsRb27.jpg",
        tags: ["cow",]
    },
    {
        id: "8",
        title: "Delldale Scarlette Master",
        snippet: "Herdsire By Cantagree Cache Master",
        date: "",
        year: "Spring 2022",
        pictureUrl: "https://i.imgur.com/xglSKTB.jpg",
        tags: ["bull","Herdsire"]
    },
    {
        id: "9",
        title: "Airline Pete",
        snippet: "Herdsire",
        date: "",
        year: "Spring 2022",
        pictureUrl: "https://i.imgur.com/bkm5UC5.jpg",
        tags: ["bull","Herdsire"]
    },
    {
        id: "10",
        title: "Delldale PP Vesper",
        snippet: "Near Native Cow",
        date: "",
        year: "Spring 2022",
        pictureUrl: "https://i.imgur.com/POUzNJ1.jpg",
        tags: ["cow","Native"]
    },
    {
        id: "11",
        title: "Delldale Wc BB Bridget",
        snippet: "Near Native Cow",
        date: "",
        year: "Spring 2022",
        pictureUrl: "https://i.imgur.com/MM10TJ3.jpg",
        tags: ["cow","Native"]
    },
    {
        id: "12",
        title: "Delldale Wtm Lady",
        snippet: "Native Beef Cow",
        date: "",
        year: "Spring 2022",
        pictureUrl: "https://i.imgur.com/NXNLmMB.jpg",
        tags: ["cow","Native", "beef"]
    },

];

function HerdSection(props) {
    const { theme } = props;
    const width = useWidth();
    const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <div style={{ backgroundColor: "#FFFFFF" }}>
            <div className="container-fluid lg-p-top">
                <Typography variant="h3" align="center" className="lg-mg-bottom">
                    Herd
                </Typography>
                <div className="container-fluid">
                    <Grid container spacing={calculateSpacing(width, theme)}>
                        {cows.map((element) => (
                            <Grid
                                item={true}
                                xs={12}
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

HerdSection.propTypes = {};

export default withTheme(HerdSection);
