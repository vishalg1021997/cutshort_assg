//To cretate the plan details component required in 3rd step user needs to choose any one plan

import React from 'react'
import styled from 'styled-components';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';


const CustomBox = styled.div`
    width:148px;
    height:148px;
    cursor:pointer;
    text-align:left;
    padding:15px;
    box-sizing:border-box;
    border-radius:5px;
`;

const PlanTitle = styled.h5`
    margin: 12px 0px 10px;
`;

const PlanDescription = styled.p`
    margin: 0px; 
    font-size: 12px; 
    color: #707b93; 
    line-height: 15px;
`;

const ss = styled(PersonSharpIcon)`

`;

const EdenPlan = () => {
    
    //State is mainted to diffentiate and highlight the plans which user has chossen 
    const [plans,SetPlans] = React.useState('plan1')

    return (
        <div style={{ display: 'flex', width: '320px', margin: '35px auto 12px' }}>

            <CustomBox style={{ marginRight: '26px',
                                border: plans === 'plan1' ? '1px solid #664de5':'1px solid #ced4da'}} 
                                
                        onClick={()=>SetPlans('plan1')}>
          
                <PersonSharpIcon sx={{ fontSize: '28px',color:plans === 'plan1' ? '#664de5' : 'black'}} />

                <PlanTitle>For myself</PlanTitle>

                <PlanDescription>
                    Write better. Think
                    more clearly. Stay
                    organized.
                </PlanDescription>

            </CustomBox>

            <CustomBox style={{border: plans === 'plan2' ? '1px solid #664de5':'1px solid #ced4da'}}
                        onClick={()=>SetPlans('plan2')} plan={plans}>

                <GroupsSharpIcon sx={{ fontSize: '28px',color:plans === 'plan2' ? '#664de5' : 'black' }} />

                <PlanTitle>With my team</PlanTitle>

                <PlanDescription>
                    Wikis, docs, tasks &
                    projects, all in one
                    place.
                </PlanDescription>

            </CustomBox>
        </div>
    )
}

export default EdenPlan