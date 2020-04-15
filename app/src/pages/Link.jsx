import React from "react";
import { DxcLink } from "@diaas/dxc-react-cdk";
import homeLogo from "../images/home.svg";

function App() {
    return (
        <div>
            <div>
                <h4>Default Link</h4>
                <div className="test-case" id="default-link">
                    <p>
                        This is a text with a<DxcLink href="#" margin="xxsmall" text="Link"></DxcLink>to another page.
                    </p>
                    
                </div>
            </div>
            <div>
                <h4>Underline Link</h4>
                <div className="test-case" id="underline-link">
                    <p>
                        This is a text with a<DxcLink href="#" margin="xxsmall" underlined={true} text="Link"></DxcLink>to another page.
                    </p>
                </div>
            </div>
            <div>
                <h4>Default colored Link with NewWindow</h4>
                <div className="test-case" id="default-colored-link">
                    <DxcLink
                        href="#"
                        color={true}
                        newWindow={true}
                        text="Link"
                    >
                    </DxcLink>
                </div>
            </div>
            <div>
                <h4>Underline colored Link</h4>
                <div className="test-case" id="underline-colored-link">
                    <DxcLink
                        href="#"   
                        underlined={true}
                        color={true}
                        text="Link"
                    >
                    </DxcLink>
                </div>
            </div>
            <div>
                <h4>Dark theme - Default Link</h4>
                <div 
                    style={{ background: "#000000", padding: "25px 0px 25px 0px" }}
                    className="test-case" 
                    id="default-dark-link">
                    <DxcLink
                        href="#"
                        theme="dark"
                        color={true}
                        text="Link"
                    >
                    </DxcLink>
                </div>
            </div>
            <div>
                <h4>Dark theme - Underline Link</h4>
                <div 
                    style={{ background: "#000000", padding: "25px 0px 25px 0px" }}
                    className="test-case" 
                    id="underline-dark-link">
                    <DxcLink
                        href="#"
                        underlined={true}
                        theme="dark"
                        color={true}
                        text="Link"
                    >
                    </DxcLink>
                </div>
            </div>
            <div>
                <h4>Margin</h4>
                <div className="test-case" id="margin-xxsmall">
                    <DxcLink
                        href="#"
                        margin="xxsmall"
                        text="Margin xxsmall"
                    >
                    </DxcLink>
                </div>
                <div className="test-case" id="margin-xsmall">
                    <DxcLink
                        href="#"
                        margin="xsmall"
                        text="Margin xsmall"
                    >
                    </DxcLink>
                </div>
                <div className="test-case" id="margin-small">
                    <DxcLink
                        href="#"
                        margin="small"
                        text="Margin small"
                    >
                    </DxcLink>
                </div>
                <div className="test-case" id="margin-medium">
                    <DxcLink
                        href="#"
                        margin="medium"
                        text="Margin medium"
                    >
                    </DxcLink>
                </div>
                <div className="test-case" id="margin-large">
                    <DxcLink
                        href="#"
                        margin="large"
                        text="Margin large"
                    >
                    </DxcLink>
                </div>
                <div className="test-case" id="margin-xlarge">
                    <DxcLink
                        href="#"
                        margin="xlarge"
                        text="Margin xlarge"
                    >
                    </DxcLink>
                </div>
                <div className="test-case" id="margin-xxlarge">
                    <DxcLink
                        href="#"
                        margin="xxlarge"
                        text="Margin xxlarge"
                    >
                    </DxcLink>
                </div>
            </div>
            <div>
                <h4>Icons</h4>
                <div className="test-case" id="icon-after">
                    <p>
                        This is a text with a
                        <DxcLink
                            href="#"
                            theme="light"
                            margin="xxsmall"
                            iconPosition="after"
                            iconSrc={homeLogo}
                            text="Icon after"
                        >
                        </DxcLink>
                        the link.
                    </p>
                </div>
                <div className="test-case" id="icon-before">
                    <p>
                        This is a text with a colored 
                        <DxcLink
                            href="#"
                            theme="light"
                            iconPosition="before"
                            iconSrc={homeLogo}
                            color={true}
                            margin="xxsmall"
                            text="Icon before"
                        >
                        </DxcLink>
                         the link.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;