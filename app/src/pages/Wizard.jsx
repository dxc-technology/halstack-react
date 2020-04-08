import React, { usestate } from "react";
import { DxcWizard } from "@diaas/dxc-react-cdk";
import homeIcon from "../images/home.svg";

function Wizard() {
    return (
        <div>
            <div className="test-case" id="default-wizard">
                <h4>Default wizards</h4>
                <DxcWizard
                    margin="medium"
                    steps={[{}, {}, {}, {}, {}]}
                >
                </DxcWizard>
                <DxcWizard
                    margin="medium"
                    steps={[
                        {
                            label: "First step"
                        }, {
                            label: "Second step"
                        },
                        {
                            label: "Third step"
                        }
                    ]}
                >
                </DxcWizard>
                <DxcWizard
                    margin="medium"
                    steps={[
                        {
                            label: "First step",
                            description: "This is the first step"
                        }, {
                            label: "Second step",
                            description: "This is the second step"
                        },
                        {
                            label: "Third step",
                            description: "This is the final step",
                            disable: true
                        }
                    ]}
                >
                </DxcWizard>
                <DxcWizard
                    margin="medium"
                    steps={[
                        {
                            label: "First step",
                            description: "This is the first step",
                            iconSrc: homeIcon
                        }, {
                            label: "Second step",
                            description: "This is the second step",
                            iconSrc: homeIcon
                        },
                        {
                            label: "Third step",
                            description: "This is the final step",
                            iconSrc: homeIcon
                        }
                    ]}
                >
                </DxcWizard>
                <div
                    className="test-case"
                    id="basic-dark-theme"
                    style={{ backgroundColor: "black" }}
                >
                    <DxcWizard
                        margin="medium"
                        theme="dark"
                        steps={[
                            {
                                label: "First step",
                                description: "This is the first step",
                                valid: true
                            }, {
                                label: "Second step",
                                description: "This is the second step"
                            },
                            {
                                label: "Third step",
                                description: "This is the final step",
                                valid: false
                            }
                        ]}
                    >
                    </DxcWizard>
                </div>
            </div>
            <div className="test-case" id="vertical-wizard">
                <h4>Vertical wizards</h4>
                <DxcWizard
                    margin="medium"
                    mode="vertical"
                    steps={[{}, {},{}]}
                ></DxcWizard>
                <DxcWizard
                    margin="medium"
                    mode="vertical"
                    steps={[
                        {
                            label: "First step",
                            description: "This is the first step",
                            iconSrc: homeIcon
                        }, {
                            label: "Second step",
                            description: "This is the second step",
                            iconSrc: homeIcon
                        },
                        {
                            label: "Third step",
                            description: "This is the final step",
                            iconSrc: homeIcon
                        }
                    ]}
                >
                </DxcWizard>
                <DxcWizard
                    margin="medium"
                    mode="vertical"
                    currentStep={2}
                    steps={[
                        {
                            label: "First step",
                            description: "This is the first step",
                            iconSrc: homeIcon,
                            valid: true
                        }, {
                            label: "Second step",
                            description: "This is the second step",
                            iconSrc: homeIcon,
                            valid: false
                        },
                        {
                            label: "Third step",
                            description: "This is the final step",
                            iconSrc: homeIcon,
                            disable: true
                        }
                    ]}
                >
                </DxcWizard>
                <div
                    className="test-case"
                    id="basic-dark-theme"
                    style={{ backgroundColor: "black" }}
                >
                    <DxcWizard
                        margin="medium"
                        theme="dark"
                        mode="vertical"
                        steps={[
                            {
                                label: "First step",
                                description: "This is the first step",
                                valid: true
                            }, {
                                label: "Second step",
                                description: "This is the second step"
                            },
                            {
                                label: "Third step",
                                description: "This is the final step",
                                valid: false
                            }
                        ]}
                    >
                    </DxcWizard>
                </div>
            </div>
        </div>
    );
}

export default Wizard;