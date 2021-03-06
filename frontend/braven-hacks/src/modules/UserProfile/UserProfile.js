import React from "react";
// @material-ui/core ./../components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core ./../components
import GridItem from "./../components/Grid/GridItem.js";
import GridContainer from "./../components/Grid/GridContainer.js";
import CustomInput from "./../components/CustomInput/CustomInput.js";
import Button from "./../components/CustomButtons/Button.js";
import Card from "./../components/Card/Card.js";
import CardHeader from "./../components/Card/CardHeader.js";
import CardAvatar from "./../components/Card/CardAvatar.js";
import CardBody from "./../components/Card/CardBody.js";
import CardFooter from "./../components/Card/CardFooter.js";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

import avatar from "./../assets/img/faces/marc.jpg";
const topSkills = [
  { title: "Software Engineer" },
  { title: "Java" },
  { title: "Autonomous Car" },
  { title: "Machine Learning" },
  { title: "Solutions Architect" },
  { title: "Node JS" },
  { title: "React JS" },
  { title: "System Design" },
  { title: "Fashion Designer" },
  { title: "Biotechnology" }
];
const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader style={{ backgroundColor: "#EB3B46" }}>
              <h4 className={classes.cardTitleWhite}>Tell us your expertise</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Company (disabled)"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Username"
                    id="username"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Title"
                    id="title"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Autocomplete
                    multiple
                    options={topSkills}
                    getOptionLabel={option => option.title}
                    defaultValue={[topSkills[0]]}
                    filterSelectedOptions
                    renderInput={params => (
                      <TextField
                        {...params}
                        variant="outlined"
                        label="Skills"
                        placeholder="Skills"
                        margin="normal"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    )}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="First Name"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Last Name"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Country"
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Postal Code"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                  <CustomInput
                    labelText="I am a software engineer expert in Data Analytics."
                    id="about-me"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button style={{ backgroundColor: "#EB3B46" }}>
                Update Profile
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
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
    </div>
  );
}
