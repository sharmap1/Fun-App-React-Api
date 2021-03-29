import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Typography, CardHeader, Avatar, IconButton } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
  avatar: {
    backgroundColor: green[500],
  },
});

const FunDogPic = () => {
  const classes = useStyles();
  const [pic, setPic] = useState("");
  const [advice, setAdvice] = useState("");

  const [fetching, setFetching] = useState("false");

  const fetchData = () => {
    const adviceAPI = "https://api.adviceslip.com/advice";
    const picAPI = "https://random.dog/woof.json";

    const getAdviceAPI = axios.get(adviceAPI);
    const getpicAPI = axios.get(picAPI);
    axios.all([getAdviceAPI, getpicAPI]).then(
      axios.spread((...allData) => {
        const allDataAdvice = allData[0].data.slip.advice;
        const allDataPic = allData[1].data.url;

        setPic(allDataPic);
        setAdvice(allDataAdvice);
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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios("https://random.dog/woof.json");
  //     setPic(`${result.data.url}`);
  //   };

  //   fetchData();
  // }, [fetching]);

  // const onSearchClick = async (e) => {
  //   e.preventDefault();
  //   const result = await axios("https://api.adviceslip.com/advice");

  //   setFetching(!fetching);
  //   setAdvice(`${result.data.slip.advice}`);
  // };

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              A
            </Avatar>
          }
          action={<IconButton aria-label="settings"></IconButton>}
          title="Advice"
          // subheader="September 14, 2016"s
        />
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={pic}
            title="Contemplative Dog"
          />
          <CardContent>
            <Typography variant="body" color="textSecondary" component="p">
              {/* “I don’t think twice about picking up my dog’s poop, but if
              another dog’s poop is next to it, I think, ‘Eww, dog poop!” -Jonah
              Goldberg */}
              {advice}
              {/* <FunQuote /> */}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="medium"
            color="primary"
            // onClick={() => setFetching(!fetching)}
            onClick={onSearchClick}
          >
            next
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
export default FunDogPic;
