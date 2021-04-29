import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Typography, CardHeader, Avatar, IconButton } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import Collapse from "@material-ui/core/Collapse";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: green[500],
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const FunTrivia = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const [question, setQuestion] = useState([]);
  const [ans, setAns] = useState([]);

  const [fetching, setFetching] = useState("false");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [fetching]);

  const fetchData = async () => {
    const result = await axios("http://jservice.io/api/random");
    console.log(result);
    const questionAPI = result.data[0].question;
    const ansAPI = result.data[0].answer;
    setQuestion(questionAPI);
    setAns(ansAPI);
  };

  const onSearchClick = async (e) => {
    e.preventDefault();
    setFetching(!fetching);
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
        />
        <CardMedia
          className={classes.media}
          image="https://topessaywriter.org/wp-content/uploads/2019/06/Trivia-Questions-and-Answers-300x193.jpg"
          title="triviaQuestions"
        />
        <CardContent>
          <Typography variant="body" component="p">
            Question: {question}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button size="medium" onClick={onSearchClick}>
            next
          </Button>

          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph> Ans: {ans}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};
export default FunTrivia;
