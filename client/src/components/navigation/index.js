import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NewsletterIcon from '@material-ui/icons/LibraryBooks';
import PracticeBuildingIcon from '@material-ui/icons/Build';
import IdeasIcon from '@material-ui/icons/EmojiObjects';
import ProjectsIcon from '@material-ui/icons/TableChart';
import OpeningsIcon from '@material-ui/icons/PersonAdd';
import MilestonesIcon from '@material-ui/icons/Whatshot';
import TimeIcon from '@material-ui/icons/Update';
import BenchForecastsIcon from '@material-ui/icons/Timeline';
import TimeSheetsIcon from '@material-ui/icons/AlarmAdd';
import ApprovalsIcon from '@material-ui/icons/AllInbox';
import WikiIcon from '@material-ui/icons/ImportContacts';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Link from '../../utils/link';

const drawerWidth = 260;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      zIndex: theme.zIndex.drawer + 1,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [listOneOpen, setListOneOpen] = React.useState(false);
  const [listTwoOpen, setListTwoOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleListOneCollapse = () => {
    setListOneOpen(!listOneOpen);
  };

  const handleListTwoCollapse = () => {
    setListTwoOpen(!listTwoOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <Link href="/dashboard">
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <Link href="/newsletters">
          <ListItem button>
            <ListItemIcon>
              <NewsletterIcon />
            </ListItemIcon>
            <ListItemText primary="Newsletter" />
          </ListItem>
        </Link>
        <Divider />
        <ListItem button onClick={handleListOneCollapse}>
          <ListItemIcon>
            <PracticeBuildingIcon />
          </ListItemIcon>
          <ListItemText primary="Practice Building" />
          {listOneOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={listOneOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link href="/ideas">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <IdeasIcon />
                </ListItemIcon>
                <ListItemText primary="Ideas" />
              </ListItem>
            </Link>
            <Link href="/projects">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <ProjectsIcon />
                </ListItemIcon>
                <ListItemText primary="Projects" />
              </ListItem>
            </Link>
            <Link href="/openings">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <OpeningsIcon />
                </ListItemIcon>
                <ListItemText primary="Openings" />
              </ListItem>
            </Link>
            <Link href="/milestones">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <MilestonesIcon />
                </ListItemIcon>
                <ListItemText primary="Milestones" />
              </ListItem>
            </Link>
          </List>
        </Collapse>
        <Divider />
        <ListItem button onClick={handleListTwoCollapse}>
          <ListItemIcon>
            <TimeIcon />
          </ListItemIcon>
          <ListItemText primary="Time" />
          {listTwoOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={listTwoOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link href="/forecasts">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <BenchForecastsIcon />
                </ListItemIcon>
                <ListItemText primary="Bench Forecasts" />
              </ListItem>
            </Link>
            <Link href="/timesheets">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <TimeSheetsIcon />
                </ListItemIcon>
                <ListItemText primary="Time Sheets" />
              </ListItem>
            </Link>
            <Link href="/approvals">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <ApprovalsIcon />
                </ListItemIcon>
                <ListItemText primary="Approvals" />
              </ListItem>
            </Link>
          </List>
        </Collapse>
        <Divider />
        <Link href="/wiki">
          <ListItem button>
            <ListItemIcon>
              <WikiIcon />
            </ListItemIcon>
            <ListItemText primary="Wiki" />
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
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          {/*<img src="/public/logo-transparent.png" height="50px" width="auto" alt="Assemble" /> */}
          <Typography variant="h6" color="inherit" noWrap>
            Assembly
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
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
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

export default ResponsiveDrawer;