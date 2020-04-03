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
                        This is a text with a <DxcLink href="#">Link</DxcLink> to another page.
                    </p>
                    
                </div>
            </div>
            <div>
                <h4>Underline Link</h4>
                <div className="test-case" id="underline-link">
                    <p>
                        This is a text with a <DxcLink href="#" mode="underline">Link</DxcLink> to another page.
                    </p>
                </div>
            </div>
            <div>
                <h4>Default colored Link</h4>
                <div className="test-case" id="default-colored-link">
                    <DxcLink
                        href="#"
                        color={true}
                    >
                        Link
                    </DxcLink>
                </div>
            </div>
            <div>
                <h4>Underline colored Link</h4>
                <div className="test-case" id="underline-colored-link">
                    <DxcLink
                        href="#"   
                        mode="underline"
                        color={true}
                    >
                        Link
                    </DxcLink>
                </div>
            </div>
            <div>
                <h4>Dark theme - Default Link</h4>
                <div className="test-case" id="default-dark-link">
                    <DxcLink
                        href="#"
                        theme="dark"
                    >
                        Link
                    </DxcLink>
                </div>
            </div>
            <div>
                <h4>Dark theme - Underline Link</h4>
                <div className="test-case" id="underline-dark-link">
                    <DxcLink
                        href="#"
                        mode="underline"
                        theme="dark"
                    >
                        Link
                    </DxcLink>
                </div>
            </div>
            <div>
                <h4>Margin</h4>
                <div className="test-case" id="margin-xxsmall">
                    <DxcLink
                        href="#"
                        theme="dark"
                        margin="xxsmall"
                    >
                        Margin xxsmall
                    </DxcLink>
                </div>
                <div className="test-case" id="margin-xsmall">
                    <DxcLink
                        href="#"
                        theme="dark"
                        margin="xsmall"
                    >
                        Margin xsmall
                    </DxcLink>
                </div>
                <div className="test-case" id="margin-small">
                    <DxcLink
                        href="#"
                        theme="dark"
                        margin="small"
                    >
                        Margin small
                    </DxcLink>
                </div>
                <div className="test-case" id="margin-medium">
                    <DxcLink
                        href="#"
                        theme="dark"
                        margin="medium"
                    >
                        Margin medium
                    </DxcLink>
                </div>
                <div className="test-case" id="margin-large">
                    <DxcLink
                        href="#"
                        theme="dark"
                        margin="large"
                    >
                        Margin large
                    </DxcLink>
                </div>
                <div className="test-case" id="margin-xlarge">
                    <DxcLink
                        href="#"
                        theme="dark"
                        margin="xlarge"
                    >
                        Margin xlarge
                    </DxcLink>
                </div>
                <div className="test-case" id="margin-xxlarge">
                    <DxcLink
                        href="#"
                        theme="dark"
                        margin="xxlarge"
                    >
                        Margin xxlarge
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
                            theme="dark"
                            margin="xxsmall"
                            iconPosition="after"
                            iconSrc={homeLogo}
                        >
                            Icon after
                        </DxcLink>
                        the link.
                    </p>
                </div>
                <div className="test-case" id="icon-before">
                    <p>
                        This is a text with a colored
                        <DxcLink
                            href="#"
                            theme="dark"
                            iconPosition="before"
                            iconSrc={homeLogo}
                            color={true}
                        >
                            Icon before
                        </DxcLink>
                        the link.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;