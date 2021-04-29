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
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[500],
  },
});

const FunJoke = () => {
  const classes = useStyles();

  const [joke, setJoke] = useState("");
  const [fetching, setFetching] = useState("false");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      // console.log(result);
      setJoke(`${result.data.joke}`);
    };

    fetchData();
  }, [fetching]);

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              J
            </Avatar>
          }
          action={<IconButton aria-label="settings"></IconButton>}
          title="Jokes"
        />
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://pheebzeatz.files.wordpress.com/2015/06/mr-bean.jpg"
            title="Contemplative joke"
          />
          <CardContent>
            <Typography variant="body" component="p">
              {joke}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="medium"
            color="primary"
            onClick={() => setFetching(!fetching)}
          >
            next
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
export default FunJoke;
