import React from 'react';
import { Card, CardActions, CardContent, CardHeader, Grid, Typography, withStyles, Theme, createStyles } from '@material-ui/core';
import { StarBorder } from '@material-ui/icons';
import LinkButton from './../components/LinkButton';

const styles = (theme : Theme) => createStyles({
  layout: {
    margin: '0 auto',
  },
  heroContent: {
    maxWidth: 'inherit',
    margin: '0 auto',
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.unit * 2,
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
    },
  },
});

interface Props {
  classes?: any;
}

const Home : React.FunctionComponent<Props> = (props) => {
  const tiers = [
    {
      title: 'Statistics',
      // price: '0',
      description: [
        'Statistics of previous workouts',
        'See your progress',
        'Saved locally on device'
      ],
      buttonText: 'View Statistics',
      buttonVariant: 'outlined',
      link: '/track-workouts',
    },
    {
      title: 'Beautiful Interface',
      subheader: 'Easy to use',
      // price: 'Track Workouts',
      description: [
        'Add new workouts',
        'Edit workouts',
        'Delete workouts',
        'Rename workouts',
      ],
      buttonText: 'Get started',
      buttonVariant: 'contained',
      link: '/track-workouts',
    },
    {
      title: 'Schedule',
      // price: '30',
      description: [
        'See upcoming workouts',
        'Schedule ahead of time',
        'Keep yourself on track',
      ],
      buttonText: 'Planned Workouts',
      buttonVariant: 'outlined',
      link: '/planned-workouts',
    },
  ];
  const { classes } = props;
  return (
    <React.Fragment>
      <main className={classes.layout}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Personal Workout Tracker
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" component="p">
            Quickly build an effective workout schedule for your potential workout with this web app.
            Add this app to your homepage!
          </Typography>
        </div>
        {/* End hero unit */}
        <Grid container spacing={40} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Beautiful Interface' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Beautiful Interface' ? <StarBorder /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  {tier.description.map(line => (
                    <Typography variant="subtitle1" align="center" key={line}>
                      {line}
                    </Typography>
                  ))}
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <LinkButton fullWidth variant={tier.buttonVariant as any} color='primary' to={tier.link}>
                    {tier.buttonText}
                  </LinkButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
    </React.Fragment>
  )
}

export default withStyles(styles)(Home);