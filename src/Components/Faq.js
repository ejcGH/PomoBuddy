import React, { useState } from "react";
import {
  MDBCollapse,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
  MDBTypography,
} from "mdb-react-ui-kit";
import NavigationBar from "./Nav";

const Faq = () => {
  const [collapse1, setCollapse1] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  const [collapse3, setCollapse3] = useState(false);

  const toggleCollapse1 = () => setCollapse1(!collapse1);
  const toggleCollapse2 = () => setCollapse2(!collapse2);
  const toggleCollapse3 = () => setCollapse3(!collapse3);

  return (
    <>
      <NavigationBar />
      <h1>The Pomodoro Timer</h1>
      <MDBContainer className="mt-5" style={{ maxWidth: "1000px" }}>
        <MDBListGroup>
          <MDBListGroupItem tag="a" href="#" onClick={toggleCollapse1} action>
            <MDBTypography tag="h5">How To Use Pomodoro Buddy</MDBTypography>
            <p className="mb-1">
              Press play to start Timer, Pause to Pause, Settings to change
              Time.
            </p>
            <small>
              <u>Learn more</u>
            </small>
            <MDBCollapse show={collapse1}>
              Choose a task for the current pomodoro. Set the timer to 25
              minutes. Work on the task until the timer sounds, then record
              completion of the pomodoro. Take a short break; start with five
              minutes but know that it can be as little as two minutes. After
              four pomodori, take a longer break; this is generally 15 to 30
              minutes.
            </MDBCollapse>
          </MDBListGroupItem>
          <MDBListGroupItem tag="a" href="#" onClick={toggleCollapse2} action>
            <MDBTypography tag="h5">
              How The Pomodoro Technique Works
            </MDBTypography>
            <p className="mb-1">
              Set your timer, work on task until time ends, take a break!
            </p>
            <small>
              <u>Learn more</u>
            </small>
            <MDBCollapse show={collapse2}>
              The Pomodoro Technique is a time management method based on
              25-minute stretches of focused work broken by five-minute breaks.
              Longer breaks, typically 15 to 30 minutes, are taken after four
              consecutive work intervals. Each work interval is called a
              pomodoro, the Italian word for tomato (plural: pomodori). From
              this experience, Cirillo recognized that time could be turned into
              an ally, rather than a source of anxiety. The Pomodoro Technique
              essentially trains people to focus on tasks better by limiting the
              length of time they attempt to maintain that focus and ensuring
              restorative breaks from the effort. The method also helps them
              overcome their tendencies to procrastinate or multitask, both of
              which are known to impair productivity.
            </MDBCollapse>
          </MDBListGroupItem>
          <MDBListGroupItem tag="a" href="#" onClick={toggleCollapse3} action>
            <MDBTypography tag="h5">
              Why Do I Need To Make An Account?
            </MDBTypography>
            <p className="mb-1">To unlock the todo list feature!</p>
            <small>
              <u>Learn more</u>
            </small>
            <MDBCollapse show={collapse3}>
              Creating an account is not necessary. BUt if you'd like to get
              access to our app's todo list, you can register for an account and
              your todo list and timer will be all in one place.
            </MDBCollapse>
          </MDBListGroupItem>
        </MDBListGroup>
      </MDBContainer>
    </>
  );
};

export default Faq;
