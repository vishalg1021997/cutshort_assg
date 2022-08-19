//This Component is created to create the stepper and to render the step content for each step

import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";
import DetailsContent from "./DetailsContent";


//To Create The Connector of Stepper to keep track of progress (progressbar)
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 1,
  width: 280,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 300 : 300]
  },
  [`& .${linearProgressClasses.bar}`]: {

    backgroundColor: theme.palette.mode === "light" ? "#7660e8" : "#7660e8"
  }
}));


//Hiding The Default Conector
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`& .${stepConnectorClasses.line}`]: {
    display: 'none',
  }
}));

//Customizing the Stepper Icon Field
const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor: "white",
  border: "1px solid #ecf0f6",
  zIndex: 1,
  color: "black",
  width: 30,
  height: 30,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: "#664de5",
    border: "1px solid #664de5",
    color: "white"
  }),
  ...(ownerState.completed && {
    backgroundColor: "#664de5",
    border: "1px solid #664de5",
    color: "white"
  })
}));

//To Give The indicator of the Stepper ==> (1)---(2)---(3)---(4)
function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node
};




const CreateStepper = () => {


  //To maintain the Count of the steppert
  const [CountStepper, SetCountStepper] = React.useState(0)

  //To maintain the progress of connector of steppper (progressbar)
  const [progress, setProgress] = React.useState(20);

  //After Clicking on the button this function will be called to change the state of the counter and progress
  //It will help to go to next step 
  const handelClick = (value) => {  
    setProgress((prevProgress) =>  
      prevProgress >= 100 ? 20 :
        prevProgress + 33 >= 100 ? prevProgress + (100 - prevProgress) :
          prevProgress + 33
    );
    SetCountStepper(CountStepper + value)
  };

//If user wants to go back to previous step can do it by clcikng the stepper icon
//User can go only one step back at a time
//User cannot got to previous step if reached to the last step that is 4th step
  const ChangeStepper = (value) => {
    if (CountStepper > value) {
      SetCountStepper(CountStepper <= 0 ? 0 : CountStepper - 1)
      setProgress((prevProgress) =>
        prevProgress <= 20 ? 20 : prevProgress - 33 <= 20 ? 20 : prevProgress - 33
      );
    }
  }

  return (
    <div>
      <div style={{ margin: 'auto', height: "62px", width: 'fit-content' }}>
        <BorderLinearProgress
          sx={{ zIndex: "0" }}
          variant="determinate"
          value={progress}
        />

        <Stepper
          sx={{ position: "relative", top: "-15px", left: '-8px', width: '325px' }}
          activeStep={CountStepper}
          connector={<ColorlibConnector />}
        >
          {[...Array(4)].map((el, i) => (
            <Step key={i} onClick={() => CountStepper >= 3 ? Function() : ChangeStepper(i)} sx={{ cursor: 'pointer' }}>
              <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>

      <div>
        <DetailsContent CountStepper={CountStepper} handelClick={handelClick} />
      </div>

    </div>
  )
}

export default CreateStepper