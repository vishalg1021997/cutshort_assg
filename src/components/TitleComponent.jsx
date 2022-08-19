//This component is created for making the headinng and subheading for every diffrent step
//The value of heading and subheading is recived from DetailsContent component as props

import React from 'react'
import styled from 'styled-components'

const Heading1 = styled.h2`
    font-size:27px;
    margin-bottom:0px;
`;

const SubHeading1 = styled.p`
    // margin:0px;
    color:#707b93;
    font-size:14px;
`;
    

const TitleComponent = ({heading,subHeading}) => {
  return (
    <div>
         <Heading1>{heading}</Heading1>
          <SubHeading1>{subHeading}</SubHeading1>
    </div>
  )
}

export default TitleComponent