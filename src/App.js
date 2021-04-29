import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FunGiphy from "./components/FunGiphy";
import FunJoke from "./components/FunJoke";
import FunQuote from "./components/FunQuote";
import FunCatPic from "./components/FunCatPic";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FunPoke from "./components/FunPoke";
import FunTrivia from "./components/FunTrivia";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('https://cdn.britannica.com/97/196697-050-1C50D078/Sailboat-landscape.jpg')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "yellow",
    fontSize: "4rem",
    letterSpacing: "0.234em",
    [theme.breakpoints.down("lg")]: {
      height: 300,
      fontSize: "3em",
      marginBottom: theme.spacing(1),
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.hero}>
        <Box>FUN APP</Box>
      </Box>

      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={3}>
            <FunGiphy />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <FunQuote />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <FunCatPic />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <FunJoke />
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <FunPoke />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <FunTrivia />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;
