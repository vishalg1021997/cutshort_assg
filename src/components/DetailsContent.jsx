//This content is created for to render and combine the all small componets for every step of the stepper 
//handelclick (to go to next step) and CountStepper (to get the content according to the given step) 
//this both are props which are recived from CreateStepper component

import React from 'react'
import TitleComponent from "./TitleComponent";
import { Button} from "@mui/material";
import InputField from "./InputField";
import EdenPlan from './EdenPlan';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';

const buttonStyle = {
    fontSize: '12px',
    width: '325px',
    textTransform: 'none',
    padding: '8px',
    backgroundColor: '#664de5',
    marginTop: '7px',
    "&:hover": { backgroundColor: '#664de5' }
}

//To get the reuired content for each diffrent step
function getContent(val) {
    switch (val) {
        case 0:
            return (
                <>
                    <TitleComponent heading='Welcome! First things first..'  subHeading='You can always change them later.' />
                    <div style={{ marginTop: '45px' }}>
                        <InputField title='Full Name' placeholder='Steve Jobs'/>
                        <InputField title='Display Name' placeholder='Steve'/>
                    </div>
                </>
            );
        
        case 1:
            return(
                <>
                    <TitleComponent heading="Let's set up a home for all your work"  subHeading='You can always create another workspace later' />
                    <div style={{ marginTop: '45px' }}>
                        <InputField title='Workspace Name' placeholder='Eden'/>
                        <InputField title='Workspace URL' placeholder='Example' flag={true}/>
                    </div>
                </>
            );
        
        case 2:
            return(
                <>
                    <TitleComponent heading="How are you planning to use Eden?"  subHeading='Well streamline your setup experience accordingly.'/>
                    <div>
                        <EdenPlan/>
                    </div>
                </>
            );
        case 3:
            return(
                <>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center', margin: '35px auto',width:'55px',height:'55px',borderRadius:'50%',backgroundColor:'#664de5' }}>
                        <CheckSharpIcon sx={{fontSize:'25px',color:'white'}}/>
                    </div>
                    <TitleComponent heading="Congratulations, Eren!"  subHeading='You have completed onboarding, you can start using the Eden!'/>
                </>
            );

        default: return ''
    }
}


const DetailsContent = ({ CountStepper, handelClick }) => {
    return (
        <div>

            {getContent(CountStepper)}

            {/* To go to next step */}
            <Button variant="contained"
                sx={buttonStyle}
                onClick={() => CountStepper >= 3 ? Function() : handelClick(1)}>
                {
                    CountStepper === 3 ? 'Launch Eden' : 'Create Workspace'  
                }
                {/* Launch Eden will be show to user at the last step that is 4th*/}
            </Button>

        </div>
    )
}

export default DetailsContent