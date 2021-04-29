import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Typography, CardHeader, Avatar, IconButton } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: purple[500],
  },
});

const FunCatPic = () => {
  const classes = useStyles();
  const [fact, setFact] = useState("");
  const [pic, setPic] = useState("");
  const [fetching, setFetching] = useState("false");

  const fetchData = () => {
    const factAPI =
      "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=200";
    const picAPI = "https://aws.random.cat/meow";

    const getfactAPI = axios.get(factAPI);
    const getpicAPI = axios.get(picAPI);
    axios.all([getfactAPI, getpicAPI]).then(
      axios.spread((...allData) => {
        const allDataFact = allData[0].data[1].text;
        const allDataPic = allData[1].data.file;

        // console.log(allDataFact);
        // console.log(allDataPic);

        setPic(allDataPic);
        setFact(allDataFact);
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, [fetching]);

  const onSearchClick = async (e) => {
    e.preventDefault();

    setFetching(!fetching);
  };

  return (
    <>
      <StylesProvider>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                F
              </Avatar>
            }
            action={<IconButton aria-label="settings"></IconButton>}
            title="Cat Facts"
            // subheader="September 14, 2016"s
          />
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={pic}
              title="Contemplative Cat"
            />
            <CardContent>
              <Typography variant="body" component="p">
                {fact}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="large" onClick={onSearchClick}>
              next
            </Button>
          </CardActions>
        </Card>
      </StylesProvider>
    </>
  );
};
export default FunCatPic;
