import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import Link from "next/link";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbsUp from '@material-ui/icons/ThumbUpAltTwoTone';
import ThumbsDown from '@material-ui/icons/ThumbDownAltTwoTone';
import _ from 'lodash';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  root: {
    flexGrow: 1,
  },
  card: {
    display: 'inline-block',
    width: "100%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const GET_IDEAS = gql`
  query ideas {
    ideas {
      id
      summary
      description
      creator {
        username
      }
    }
  }
`;

export default function IdeaList() {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_IDEAS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  {/* Update Lodash import */}
  const truncateDesc = (desc) => {
    return _.truncate(desc, {
      'length': 300,
      'seperator': /,? +/
    });
  }

  return (
     <div className={classes.root}>
      <Grid 
        container 
        spacing={3}
        direction="column"
        justify="center"
        alignItems="center"
      >
        {data.ideas.map(res => (
          <Grid container item zeroMinWidth xs={12} sm={10} m={8} lg={8} xl={8} key={res.id}>
            {/* Interactive card & mobile vs desktop breakpoints */}
            <Card variant="outlined" className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                  {/* !!res.creator ? `:)` : `${res.creator.firstName.charAt(0)}${res.creator.lastName.charAt(0)}` */}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={res.summary}
                subheader={res.created_at}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {/* Convert to HTML desc */}
                  {truncateDesc(res.description)}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton 
                  aria-label="like">
                  <ThumbsUp />
                </IconButton>
                100
                <IconButton
                  aria-label="dislike">
                  <ThumbsDown />
                </IconButton>
                100
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}