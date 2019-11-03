import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import { makeStyles } from "@material-ui/core/styles";
import AddAlert from "@material-ui/icons/AddAlert";
import Assignment from "@material-ui/icons/Assignment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons

import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";

import SnackbarContent from "./modules/components/Snackbar/SnackbarContent.js";
import Snackbar from "./modules/components/Snackbar/Snackbar.js";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";

import Accessibility from "@material-ui/icons/Accessibility";

import GridItem from "./modules/components/Grid/GridItem.js";
import GridContainer from "./modules/components/Grid/GridContainer.js";
import Tasks from "./modules/components/Tasks/Tasks.js";
import CustomTabs from "./modules/components/CustomTabs/CustomTabs.js";
import Danger from "./modules/components/Typography/Danger.js";
import Card from "./modules/components/Card/Card.js";
import CardHeader from "./modules/components/Card/CardHeader.js";
import CardIcon from "./modules/components/Card/CardIcon.js";
import CardBody from "./modules/components/Card/CardBody.js";
import CardFooter from "./modules/components/Card/CardFooter.js";
import CardAvatar from "./modules/components/Card/CardAvatar.js";
import Button from "./modules/components/CustomButtons/Button.js";
import avatar from "./modules/assets/img/faces/marc.jpg";

import { bugs, website, server } from "./variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "./variables/charts.js";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

import styles from "./modules/assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function BravenDashboard() {
  const classes = useStyles();
  return (
    <div>
      <div>
        <h2>Upcoming Events</h2>
      </div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory} style={{ color: "black" }}>
                San Jose
              </p>
              <p className={classes.cardCategory} style={{ color: "black" }}>
                January 1, 2020 @ 6-8pm
              </p>
              <h4 className={classes.cardTitle}>Mock Interview </h4>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Button
                  style={{ backgroundColor: "#EB3B46", marginLeft: "70px" }}
                  round
                >
                  View
                </Button>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory} style={{ color: "black" }}>
                Santa Clara
              </p>
              <p className={classes.cardCategory} style={{ color: "black" }}>
                February 2, 2020 @ 6-8pm
              </p>
              <h4 className={classes.cardTitle}>Mock Interview </h4>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Button
                  style={{ backgroundColor: "#0DB3C8", marginLeft: "70px" }}
                  round
                >
                  View
                </Button>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory} style={{ color: "black" }}>
                San Jose
              </p>
              <p className={classes.cardCategory} style={{ color: "black" }}>
                March 1, 2020 @ 6-8pm
              </p>
              <h4 className={classes.cardTitle}>Mock Interview </h4>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Button
                  style={{ backgroundColor: "#EB3B46", marginLeft: "70px" }}
                  round
                >
                  View
                </Button>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory} style={{ color: "black" }}>
                San Jose
              </p>
              <p className={classes.cardCategory} style={{ color: "black" }}>
                April 1, 2020 @ 6-8pm
              </p>
              <h4 className={classes.cardTitle}>Mock Interview </h4>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Button
                  style={{ backgroundColor: "#0DB3C8", marginLeft: "70px" }}
                  round
                  onClick="/event"
                >
                  View
                </Button>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <div>
        <h3>Manage Events</h3>
      </div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader style={{ backgroundColor: "#EB3B46" }}>
              <h4 className={classes.cardTitleWhite}>Schedule Time Slots</h4>
            </CardHeader>
            <CardBody>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Events</TableCell>
                    <TableCell>Volunteer</TableCell>
                    <TableCell>Student</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      Mock Interview @ San Jose on Jan 1, 2020
                    </TableCell>
                    <TableCell>Ellon Musk</TableCell>
                    <TableCell>Alan Turing</TableCell>
                    <TableCell>
                      <Button style={{ backgroundColor: "#EB3B46" }} round>
                        Register
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

      <br />
    </div>
  );
}
