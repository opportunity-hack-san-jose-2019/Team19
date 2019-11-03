import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import { makeStyles } from "@material-ui/core/styles";
import AddAlert from "@material-ui/icons/AddAlert";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons

import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";

import SnackbarContent from "./modules/components/Snackbar/SnackbarContent.js";
import Snackbar from "./modules/components/Snackbar/Snackbar.js";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";

import GridItem from "./modules/components/Grid/GridItem.js";
import GridContainer from "./modules/components/Grid/GridContainer.js";
import Table from "./modules/components/Table/Table.js";
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

import styles from "./modules/assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h4 className={classes.cardTitle}>
                {"Co-Founder @ Tesla and SpaceX News "}
              </h4>
              <h4 className={classes.cardTitle}>Elon Musk</h4>
              <p className={classes.description}>
                I am an american entrepreneur and businessman. I am a proud
                founder of X.com in 1999 (also known as PayPal), SpaceX in 2002
                and Tesla Motors in 2003.
              </p>
              <Button style={{ backgroundColor: "#EB3B46" }} round>
                More
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <h5>Upcoming Events</h5>
          <br />
          <SnackbarContent
            message={"Event @ San Jose State University on December 23, 2019"}
            close
            color="success"
            icon={AddAlert}
          />

          <SnackbarContent
            message={"Event @ University of San Francisco on Feb 02, 2020"}
            close
            color="info"
            icon={AddAlert}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <h5>Future Events</h5>
          <br />
          <SnackbarContent
            message={"Event @ San Jose State University on March 23, 2020"}
            close
            color="alert"
            icon={AddAlert}
          />

          <SnackbarContent
            message={"Event @ University of San Francisco on April 02, 2020"}
            close
            color="alert"
            icon={AddAlert}
          />
        </GridItem>
      </GridContainer>
      <br />
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>
                Number of candidates interviewed so far
              </h4>
              <p className={classes.cardCategory}>Last Event Performance</p>
              <span className={classes.successText}>
                <ArrowUpward className={classes.upArrowCardCategory} /> 55%
              </span>{" "}
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated a minute ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Upcoming Event Slots</h4>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated two hours ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
