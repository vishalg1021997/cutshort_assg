//This Component is created for creating the input text filed the label, placeholder name and flag are 
//recived as a prop from DetailsContent component

import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    font-size:12.5px;
    font-weight:600;
`;

const Input = styled.input`
    display:block;
    border: 1px solid #ced4da;
    border-radius: 4px;
    width: 300px;
    padding: 10px 12px;
    margin:5px 0px 15px;
    outline: none;
    
`;


const CustomTextField = styled.div`
    display:flex;
    border: 1px solid #ced4da;
    border-radius: 4px;
    width: 320px;
    margin:5px 0px 15px;
    outline: none;
`;


const Adornment = styled.div`
    width:300px;
    height:35px;
    borderRadius: 4px 0px 0px 4px;
    border-right:1px solid #ced4da;
    background-color: #f6f6f7;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:13px;
    color:#9c9c9c;
`;

const InputField = ({ title, placeholder, flag }) => {
    const [InputValue, setInputValue] = React.useState('')
    return (
        <div style={{ textAlign: 'left', margin: 'auto', width: 'fit-content' }}>

            {/*flag prop is recived from DetailsContent component if it's true then the text field component 
                with Adornment in start will be displayed else the normal textfiled will be displayed */}
            {
                flag ? <>

                    <Label htmlFor={title}>
                        {title}
                    </Label>
                    <CustomTextField>
                        <Adornment>
                            <span>www.eden.com/</span>
                        </Adornment>
                        <Input type="text" id={title} placeholder={placeholder} onChange={(e) => e.target.value}
                            style={{ margin: '0px', border: 'none' }} />
                    </CustomTextField>
                </>

                    : <>
                        <Label htmlFor={title}>
                            {title}
                        </Label>
                        <Input type="text" id={title} placeholder={placeholder} onChange={(e) => e.target.value} />
                    </>
            }
        </div>
    )
}

export default InputField
