import React, { useState } from 'react';
import { AppBar, CssBaseline, Drawer, Toolbar, IconButton, Typography, Hidden, List, ListItem, ListItemText, ListItemIcon, withStyles, Theme, createStyles } from '@material-ui/core';
import { Home, Menu, Add, CalendarToday, ViewHeadline } from '@material-ui/icons';
import { Link, withRouter, RouteProps } from 'react-router-dom';

const drawerWidth = '260px';

const styles = (theme : Theme) => createStyles({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    paddingTop: '90px',
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  drawerText: {
    fontSize: '16px',
    textDecoration: 'none',
  },
});

interface State {
  mobileOpen: boolean;
}

interface Props extends RouteProps {
  location?: any;
  classes?: any;
  container?: any;
}

const Navigation : React.FunctionComponent = (props: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const { classes, location } = props;

  const drawer = (
    <div>
      {/* <div className={classes.toolbar} /> */}
      <List>
        <ListItem>
          <Typography variant="h6" color="inherit" noWrap>
            Workout Tracker
          </Typography>
        </ListItem>
        <Link
          to='/'
          onClick={() => {
            if (mobileOpen === true) {
              setMobileOpen(!mobileOpen);
            }
          }}
          className={classes.drawerText}
        >
          <ListItem
            button
            selected={location.pathname === '/'}
          >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>
        </Link>
        <Link
          to='/track-workouts'
          onClick={() => {
            if (mobileOpen === true) {
              setMobileOpen(!mobileOpen);
            }
          }}
          className={classes.drawerText}
        >
          <ListItem
            button
            selected={location.pathname === '/track-workouts'}
          >
            <ListItemIcon>
              <Add />
            </ListItemIcon>
            <ListItemText primary='Track Workouts' />
          </ListItem>
        </Link>
        <Link
          to='/planned-workouts'
          onClick={() => {
            if (mobileOpen === true) {
              setMobileOpen(!mobileOpen);
            }
          }}
          className={classes.drawerText}
        >
          <ListItem
            button
            selected={location.pathname === '/planned-workouts'}
          >
            <ListItemIcon>
              <CalendarToday />
            </ListItemIcon>
            <ListItemText primary='Planned Workouts' />
          </ListItem>
        </Link>
        <Link
          to='/completed-workouts'
          onClick={() => {
            if (mobileOpen === true) {
              setMobileOpen(!mobileOpen);
            }
          }}
          className={classes.drawerText}
        >
          <ListItem
            button
            selected={location.pathname === '/completed-workouts'}
          >
            <ListItemIcon>
              <ViewHeadline />
            </ListItemIcon>
            <ListItemText primary='Completed Workouts' />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            Workout Tracker
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp implementation="css">
          <Drawer
            container={props.container}
            variant="temporary"
            anchor={'left'}
            open={mobileOpen}
            onClose={() => setMobileOpen(!mobileOpen)}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        {props.children}
      </main>
    </div>
  );
}

export default withStyles(styles)(withRouter(Navigation as any));