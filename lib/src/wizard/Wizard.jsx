import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Stepper } from "@material-ui/core";

const DxcWizard = ({
    mode = "horizontal",
    theme = "light",
    currentStep = 0,
    onStepClick,
    steps
}) => {
    const [current, setCurrentStep] = React.useState(currentStep);


    const handleStepClick = (newValue) => {
        setCurrentStep(newValue)
    }

    return (
      <StepsContainer mode={mode}>
        {
            steps.map((step, i) => {
                return (
                  <StepContainer
                    mode={mode}
                  >
                    <Step
                      onClick={() => onStepClick ? onStepClick(i) : handleStepClick(i)}
                      theme={theme}
                      disable={step.disable}
                      valid={step.valid}
                      mode={mode}
                    >
                      <IconContainer
                        current={i === current}
                        visited={i < current}
                        >
                        {
                            step.iconSrc ? <Icon src={step.iconSrc}></Icon> : 
                            <Number active={i <=current}>{i+1}</Number>
                        }
                      </IconContainer>
                      {
                          step.label || step.description ? 
                          (
                            <InfoContainer active={i <= current}>
                              {
                                step.label ? <Label>{step.label}</Label> : ''
                              }
                              {
                                step.description ? <Description>{step.description}</Description> : ''
                              }
                            </InfoContainer> 
                          )
                          : ''
                      }
                      
                    </Step>
                    {
                        i === steps.length-1 ? '' : (
                          <StepSeparatorContainer>
                            <StepSeparator mode={mode}></StepSeparator>
                          </StepSeparatorContainer>
                        )
                    }
                  </StepContainer>
                );
            })
        }
      </StepsContainer>
    );
}

const StepsContainer = styled.div`
    display: inline-flex;
    flex-direction: ${props => props.mode === "vertical" ? "column" : "row"};
    justify-content: center";
`;

const StepContainer =  styled.div`
    display: inline-flex;
    ${props => props.mode === "vertical" ? "" : "align-items: center;"}
    
    flex-direction: ${props => props.mode === "vertical" ? "column" : "row"};
    ${props => props.mode === "vertical" ? "width: 100%;" : ""}
    
`;

const Step = styled.button`
    border: none;
    background: inherit;
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin: 25px;

    &:focus {
        outline: none;
    }
`;

const IconContainer = styled.div`
    top: 950px;
    left: 92px;
    width: 36px;
    height: 36px;

    ${props=> props.visited? 
        `border: 2px solid #000000;` : 
        `background: #D9D9D9 0% 0% no-repeat padding-box;`}

    ${props=> props.current? 
        `background: #FFED00 0% 0% no-repeat padding-box;` : ''}

    border-radius: 45px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Icon = styled.img`
    width: 19px;
    height: 19px;
`;

const Number = styled.p`
    font: Normal 16px/22px Open Sans;
    letter-spacing: 0.77px;
    color: ${props => props.active ? '#000000' : '#666666'}
    opacity: 1;
`;

const InfoContainer = styled.div`
    margin-left: 10px;
    color: ${props => props.active ? '#000000' : '#666666'}
`;

const Label = styled.p`
    text-align: left;
    font: Normal 16px/22px Open Sans;
    letter-spacing: 0.77px;
    color: inherit;
    margin: 0;
`;

const Description = styled.p`
    text-align: left;
    font: Lighter 12px/17px Open Sans;
    letter-spacing: 0.58px;
    color: inherit;
    margin: 0;
`;

const StepSeparatorContainer = styled.div`

`;

const StepSeparator = styled.div`
    top: 969px;
    left: 369px;
    width:  ${props => props.mode === "horizontal" ? '240px' : '0'};
    height: ${props => props.mode === "horizontal" ? '0' : '240px'};
    border: 1px solid #D9D9D9;
    opacity: 1;
`;

DxcWizard.propTypes = {
    mode: PropTypes.oneOf(["horizontal", "vertical"]),
    theme: PropTypes.oneOf(["light", "dark"]),
    currentStep: PropTypes.number,
    onStepClick: PropTypes.func,
    steps: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            description: PropTypes.string,
            iconSrc: PropTypes.string,
            disable: PropTypes.bool,
            valid: PropTypes.bool
        })
    )
};

export default DxcWizard;