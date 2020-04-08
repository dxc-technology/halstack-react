import React, { usestate } from "react";
import { DxcWizard } from "@diaas/dxc-react-cdk";
import homeIcon from "../images/home.svg";

function Wizard() {
    return (
        <div>
            <div className="test-case" id="default-wizard">
                <h4>Default wizards</h4>
                <DxcWizard
                    steps={[{}, {},{}]}
                >
                </DxcWizard>
                <DxcWizard
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
                            description: "This is the final step"
                        }
                    ]}
                >
                </DxcWizard>
                <DxcWizard
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
            </div>
            <div className="test-case" id="vertical-wizard">
                <h4>Vertical wizards</h4>
                <DxcWizard
                    mode="vertical"
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
                ></DxcWizard>
                <DxcWizard
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
            </div>
        </div>
    );
}

export default Wizard;