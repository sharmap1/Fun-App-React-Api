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
    height: 200,
  },
  avatar: {
    backgroundColor: green[500],
  },
});

const FunDogPic = () => {
  const classes = useStyles();
  const [pic, setPic] = useState("");
  const [quote, setQuote] = useState("");

  const [fetching, setFetching] = useState("false");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://random.dog/woof.json");
      // console.log(result);
      setPic(`${result.data.url}`);
    };

    fetchData();
  }, [fetching]);

  const onSearchClick = async (e) => {
    e.preventDefault();

    const result = await axios.get("https://api.kanye.rest?format=text");
    // console.log(result);
    setFetching(!fetching);
    setQuote(`${result.data}`);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              P
            </Avatar>
          }
          action={<IconButton aria-label="settings"></IconButton>}
          title="Dog Pics"
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
              {quote}
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
