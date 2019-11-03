import React from "react";
// @material-ui/core ./../components
import { makeStyles } from "@material-ui/core/styles";
// core ./../components
import GridItem from "./../components/Grid/GridItem.js";
import GridContainer from "./../components/Grid/GridContainer.js";
import Table from "./../components/Table/Table.js";
import Card from "./../components/Card/Card.js";
import CardHeader from "./../components/Card/CardHeader.js";
import CardBody from "./../components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader style={{ backgroundColor: "#EB3B46" }}>
            <h4 className={classes.cardTitleWhite}>
              Mock Interview at San Jose on Jan 1, 2020
            </h4>
          </CardHeader>
          <CardBody>
            <h3 className={classes.cardTitle}>Interviewee: Priyanka Singhal</h3>
            <p className={classes.cardCategory}>Time Slot: 6:30pm - 7:00pm</p>
            <p className={classes.cardCategory}>Location: Table A</p>
            <h3 className={classes.cardTitle}>Interviewee: Supriya Jain</h3>
            <p className={classes.cardCategory}>Time Slot: 7:00pm - 7:30pm</p>
            <p className={classes.cardCategory}>Location: Table B</p>
            <h3 className={classes.cardTitle}>Interviewee: Will Smith</h3>
            <p className={classes.cardCategory}>Time Slot: 7:30pm - 8:00pm</p>
            <p className={classes.cardCategory}>Location: Table C</p>
          </CardBody>
        </Card>
      </GridItem>

      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader style={{ backgroundColor: "#EB3B46" }}>
            <h4 className={classes.cardTitleWhite}>
              Mock Interview at San Clara on Jan 2, 2020
            </h4>
          </CardHeader>
          <CardBody>
            <h3 className={classes.cardTitle}>Interviewee: Nasrajan Jalin</h3>
            <p className={classes.cardCategory}>Time Slot: 6:30pm - 7:00pm</p>
            <p className={classes.cardCategory}>Location: Table A</p>
            <h3 className={classes.cardTitle}>Interviewee: Shalu Rani</h3>
            <p className={classes.cardCategory}>Time Slot: 7:00pm - 7:30pm</p>
            <p className={classes.cardCategory}>Location: Table B</p>
            <h3 className={classes.cardTitle}>Interviewee: Claire</h3>
            <p className={classes.cardCategory}>Time Slot: 7:30pm - 8:00pm</p>
            <p className={classes.cardCategory}>Location: Table C</p>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
