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
import { brown } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  avatar: {
    backgroundColor: brown[500],
  },
});

const FunPoke = () => {
  const classes = useStyles();

  const [poke, setPoke] = useState([]);
  const [name, setName] = useState([]);
  const [fetching, setFetching] = useState("false");

  const pokeId = () => {
    const min = Math.ceil(1);
    const max = Math.floor(151);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/" + pokeId()
      );
      // console.log(result.data);
      setPoke(`${result.data.sprites.front_default}`);
      setName(`${result.data.species.name}`);
    };

    fetchData();
  }, [fetching]);

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
          title="Pokemon"
          // subheader="September 14, 2016"s
        />
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={poke}
            title="Contemplative joke"
          />
          <CardContent>
            <Typography variant="body" color="textSecondary" component="p">
              {name}
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
export default FunPoke;
