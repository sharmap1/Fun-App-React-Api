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

const FunTrivia = () => {
  const classes = useStyles();
  const [question, setQuestion] = useState([]);
  const [ans, setAns] = useState([]);
  // const [ansAPI, setAnsAPI] = useState("");

  const [fetching, setFetching] = useState("false");

  useEffect(() => {
    fetchData();
  }, [fetching]);

  const fetchData = async () => {
    const result = await axios("http://jservice.io/api/random");
    // console.log(result);
    const questionAPI = result.data[0].question;
    const ansAPI = result.data[0].answer;
    setQuestion(questionAPI);
    setAns(ansAPI);
    // setAns("");

    // setQuestion(`${result.data[0].question}`);
    // const setAns = () => {
    //   `${result.data[0].answer}`;
    // };
    // setAns(`${result.data[0].answer}`);
  };

  const onSearchClick = async (e) => {
    e.preventDefault();
    setFetching(!fetching);
  };
  const onAnsClick = (e) => {
    e.preventDefault();
    // setAnsAPI(ans);

    // setFetching(!fetching);
    // setAdvice(`${result.data.slip.advice}`);
    // const result = await axios("http://jservice.io/api/random");
    // console.log(result);
    // setAns(`${result.data[0].answer}`);
    // setAns();
  };

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              T
            </Avatar>
          }
          action={<IconButton aria-label="settings"></IconButton>}
          title="Trivia"
          // subheader="September 14, 2016"s
        />
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://topessaywriter.org/wp-content/uploads/2019/06/Trivia-Questions-and-Answers-300x193.jpg"
            title="Contemplative Dog"
          />
          <CardContent>
            <Typography variant="body" color="textSecondary" component="p">
              Question: {question}
            </Typography>
            <Typography variant="body" color="textSecondary" component="p">
              Ans: {ans}
              {/* Ans: {ansAPI} */}
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
          <Button
            size="medium"
            color="primary"
            // onClick={() => setFetching(!fetching)}
            onClick={onAnsClick}
          >
            ans
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
export default FunTrivia;
