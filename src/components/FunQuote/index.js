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
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: red[500],
  },
});

const FunQuote = () => {
  const classes = useStyles();
  const [quote, setQuote] = useState("");
  const [image, setImage] = useState("");
  const [fetching, setFetching] = useState("false");

  const fetchData = () => {
    const quoteAPI = "https://api.kanye.rest?format=text";
    const imageAPI =
      "https://api.unsplash.com/photos/?client_id=EU37VySjc_qaNcGWSluRwBpg0CJCUWCRq5_jYZPIIps";

    const randomIndex = Math.floor(Math.random() * 10);

    const getQuoteAPI = axios.get(quoteAPI);
    const getImageAPI = axios.get(imageAPI);
    axios.all([getQuoteAPI, getImageAPI]).then(
      axios.spread((...allData) => {
        const allDataQuote = allData[0].data.quote;
        // const allDataImage = allData[1].data[0].urls.small;
        const allDataImage = allData[1].data[randomIndex];
        let allResultsDataImage = allDataImage.urls.small;

        // console.log(allData);

        setImage(allResultsDataImage);
        setQuote(allDataQuote);
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, [fetching]);

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              Q
            </Avatar>
          }
          action={<IconButton aria-label="settings"></IconButton>}
          title="Quotes"
        />
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
            title="Contemplative Dog"
          />

          <CardContent>
            <Typography variant="body" component="p">
              {quote}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="medium" onClick={() => setFetching(!fetching)}>
            next
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
export default FunQuote;
