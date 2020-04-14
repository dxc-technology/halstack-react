import React from "react";
import { DxcFooter, DxcInputText } from "@diaas/dxc-react-cdk";

import linkedin from "../images/linkedin.svg";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import dxcAssure from "../images/dxc_logo_wht.png";

function App() {
  const social = [
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      logoSrc: linkedin
    },
    {
      href: "https://twitter.com/dxctechnology",
      logoSrc: twitter
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      logoSrc: facebook
    }
  ];
  const socialLarge = [
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      logoSrc: linkedin
    },
    {
      href: "https://twitter.com/dxctechnology",
      logoSrc: twitter
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      logoSrc: facebook
    },
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      logoSrc: linkedin
    },
    {
      href: "https://twitter.com/dxctechnology",
      logoSrc: twitter
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      logoSrc: facebook
    },
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      logoSrc: linkedin
    },
    {
      href: "https://twitter.com/dxctechnology",
      logoSrc: twitter
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      logoSrc: facebook
    },
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      logoSrc: linkedin
    },
    {
      href: "https://twitter.com/dxctechnology",
      logoSrc: twitter
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      logoSrc: facebook
    },
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      logoSrc: linkedin
    },
    {
      href: "https://twitter.com/dxctechnology",
      logoSrc: twitter
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      logoSrc: facebook
    },
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      logoSrc: linkedin
    },
    {
      href: "https://twitter.com/dxctechnology",
      logoSrc: twitter
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      logoSrc: facebook
    },
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      logoSrc: linkedin
    },
    {
      href: "https://twitter.com/dxctechnology",
      logoSrc: twitter
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      logoSrc: facebook
    },
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      logoSrc: linkedin
    },
    {
      href: "https://twitter.com/dxctechnology",
      logoSrc: twitter
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      logoSrc: facebook
    },
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      logoSrc: linkedin
    },
    {
      href: "https://twitter.com/dxctechnology",
      logoSrc: twitter
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      logoSrc: facebook
    },
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      logoSrc: linkedin
    },
    {
      href: "https://twitter.com/dxctechnology",
      logoSrc: twitter
    },
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      logoSrc: linkedin
    },
    {
      href: "https://twitter.com/dxctechnology",
      logoSrc: twitter
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      logoSrc: facebook
    }
  ];
  const bottom = [
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      text: "Linkedin"
    },
    {
      href: "https://twitter.com/dxctechnology",
      text: "Twitter"
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      text: "Facebook"
    }
  ];

  const bottomLarge = [
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      text: "Linkedin"
    },
    {
      href: "https://twitter.com/dxctechnology",
      text: "Twitter"
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      text: "Facebook"
    },
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      text: "Linkedin1"
    },
    {
      href: "https://twitter.com/dxctechnology",
      text: "Twitter1"
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      text: "Facebook1"
    },
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      text: "Linkedin2"
    },
    {
      href: "https://twitter.com/dxctechnology",
      text: "Twitter2"
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      text: "Facebook2"
    },
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      text: "Linkedin3"
    },
    {
      href: "https://twitter.com/dxctechnology",
      text: "Twitter3"
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      text: "Facebook3"
    },
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      text: "Linkedin4"
    },
    {
      href: "https://twitter.com/dxctechnology",
      text: "Twitter4"
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      text: "Facebook4"
    },
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      text: "Linkedin5"
    },
    {
      href: "https://twitter.com/dxctechnology",
      text: "Twitter5"
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      text: "Facebook5"
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      text: "Facebook6"
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      text: "Facebook7"
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      text: "Facebook6"
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      text: "Facebook7"
    }
  ];

  return (
    <div>
      <div>
        <h4>Without content - Normal links and social</h4>
        <div className="test-case" id="without-content-normal-links">
          <DxcFooter
            copyright="© DXC Technology 2020. All rights reserved."
            bottomLinks={bottom}
            socialLinks={social}
            margin="large"
          ></DxcFooter>
        </div>
        <div className="test-case" id="Max-custom-content-horizontal">
          <h4>Custom content horizontal</h4>
          <DxcFooter
            copyright="© DXC Technology 2020. All rights reserved."
            bottomLinks={bottom}
            socialLinks={social}
            margin="large"
            logoSrc={dxcAssure}
          >
            <div style={{ display: "flex" }}>
              {/* <div> */}
              <div style={{ "margin-left": "35px" }}>
                <p>Services</p>
                <ul
                  style={{ "list-style-type": "none", "padding-left": "0px" }}
                >
                  <li>Analytics</li>
                  <li>Application Services</li>
                  <li>Business Process Services</li>
                </ul>
              </div>
              <div style={{ "margin-left": "35px" }}>
                <p>Industries</p>
                <ul
                  style={{ "list-style-type": "none", "padding-left": "0px" }}
                >
                  <li>Healthcare</li>
                  <li>Life Sciences</li>
                </ul>
              </div>
              <div style={{ "margin-left": "35px" }}>
                <p>About us</p>
                <ul
                  style={{ "list-style-type": "none", "padding-left": "0px" }}
                >
                  <li>Company Overview</li>
                  <li>Our Mission & Values</li>
                  <li>Our History</li>
                </ul>
              </div>
              <div style={{ "margin-left": "35px" }}>
                <p>Insights</p>
                <ul
                  style={{ "list-style-type": "none", "padding-left": "0px" }}
                >
                  <li>THRIVE: Thought Leadership</li>
                  <li>Case Studies</li>
                  <li>Blogs</li>
                </ul>
              </div>
              <div style={{ "margin-left": "35px" }}>
                <p>Insights</p>
                <ul
                  style={{ "list-style-type": "none", "padding-left": "0px" }}
                >
                  <li>THRIVE: Thought Leadership</li>
                  <li>Case Studies</li>
                  <li>Blogs</li>
                </ul>
              </div>
              <div style={{ "margin-left": "35px" }}>
                <p>Insights</p>
                <ul
                  style={{ "list-style-type": "none", "padding-left": "0px" }}
                >
                  <li>THRIVE: Thought Leadership</li>
                  <li>Case Studies</li>
                  <li>Blogs</li>
                </ul>
              </div>
              <div style={{ "margin-left": "35px" }}>
                <p>Insights</p>
                <ul
                  style={{ "list-style-type": "none", "padding-left": "0px" }}
                >
                  <li>THRIVE: Thought Leadership</li>
                  <li>Case Studies</li>
                  <li>Blogs</li>
                </ul>
              </div>
              <div style={{ "margin-left": "35px" }}>
                <p>Insights</p>
                <ul
                  style={{ "list-style-type": "none", "padding-left": "0px" }}
                >
                  <li>THRIVE: Thought Leadership</li>
                  <li>Case Studies</li>
                  <li>Blogs</li>
                </ul>
              </div>
              <div style={{ "margin-left": "35px" }}>
                <p>Insights</p>
                <ul
                  style={{ "list-style-type": "none", "padding-left": "0px" }}
                >
                  <li>THRIVE: Thought Leadership</li>
                  <li>Case Studies</li>
                  <li>Blogs</li>
                </ul>
              </div>
              <div style={{ "margin-left": "35px" }}>
                <p>Insights</p>
                <ul
                  style={{ "list-style-type": "none", "padding-left": "0px" }}
                >
                  <li>THRIVE: Thought Leadership</li>
                  <li>Case Studies</li>
                  <li>Blogs</li>
                </ul>
              </div>
              <div style={{ "margin-left": "35px" }}>
                <p>Insights</p>
                <ul
                  style={{ "list-style-type": "none", "padding-left": "0px" }}
                >
                  <li>THRIVE: Thought Leadership</li>
                  <li>Case Studies</li>
                  <li>Blogs</li>
                </ul>
              </div>
              <div style={{ "margin-left": "35px" }}>
                <p>Insights</p>
                <ul
                  style={{ "list-style-type": "none", "padding-left": "0px" }}
                >
                  <li>THRIVE: Thought Leadership</li>
                  <li>Case Studies</li>
                  <li>Blogs</li>
                </ul>
              </div>
              <div style={{ "margin-left": "35px" }}>
                <p>Insights</p>
                <ul
                  style={{ "list-style-type": "none", "padding-left": "0px" }}
                >
                  <li>THRIVE: Thought Leadership</li>
                  <li>Case Studies</li>
                  <li>Blogs</li>
                </ul>
              </div>
            </div>
          </DxcFooter>
        </div>
        <div className="test-case" id="Max-custom-content">
          <h4>Custom content vertical</h4>
          <DxcFooter
            copyright="© DXC Technology 2020. All rights reserved."
            bottomLinks={bottom}
            socialLinks={social}
            margin="large"
            logoSrc={dxcAssure}
          >
            <div className="test-case" id="Max-custom-content-vertical">
              <div style={{ "margin-left": "35px" }}>
                <p>Services</p>
                <ul
                  style={{ "list-style-type": "none", "padding-left": "0px" }}
                >
                  <li>Analytics</li>
                  <li>Application Services</li>
                  <li>Business Process Services</li>
                </ul>
              </div>
              <div style={{ "margin-left": "35px" }}>
                <p>Industries</p>
                <ul
                  style={{ "list-style-type": "none", "padding-left": "0px" }}
                >
                  <li>Healthcare</li>
                  <li>Life Sciences</li>
                </ul>
              </div>
              <div style={{ "margin-left": "35px" }}>
                <p>About us</p>
                <ul
                  style={{ "list-style-type": "none", "padding-left": "0px" }}
                >
                  <li>Company Overview</li>
                  <li>Our Mission & Values</li>
                  <li>Our History</li>
                </ul>
              </div>
              <div style={{ "margin-left": "35px" }}>
                <p>Insights</p>
                <ul
                  style={{ "list-style-type": "none", "padding-left": "0px" }}
                >
                  <li>THRIVE: Thought Leadership</li>
                  <li>Case Studies</li>
                  <li>Blogs</li>
                </ul>
              </div>
              <div style={{ "margin-left": "35px" }}>
                <p>Insights</p>
                <ul
                  style={{ "list-style-type": "none", "padding-left": "0px" }}
                >
                  <li>THRIVE: Thought Leadership</li>
                  <li>Case Studies</li>
                  <li>Blogs</li>
                </ul>
              </div>
              <div style={{ "margin-left": "35px" }}>
                <p>Insights</p>
                <ul
                  style={{ "list-style-type": "none", "padding-left": "0px" }}
                >
                  <li>THRIVE: Thought Leadership</li>
                  <li>Case Studies</li>
                  <li>Blogs</li>
                </ul>
              </div>
            </div>
          </DxcFooter>
        </div>
        <div className="test-case" id="Max-bottom-links">
          <h4>Bottom Links</h4>
          <DxcFooter
            copyright="© DXC Technology 2020. All rights reserved."
            bottomLinks={bottomLarge}
            socialLinks={social}
            margin="large"
          ></DxcFooter>
        </div>
        <div className="test-case" id="Max-size-oneline-copyright">
          <h4>Copyright max size oneline</h4>
          <DxcFooter
            copyright="© DXC Technology 2020. All rights reserved.blablabla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla"
            bottomLinks={bottomLarge}
            socialLinks={social}
            margin="large"
          ></DxcFooter>
        </div>
        <div className="test-case" id="Min-size-multiline-copyright">
          <h4>Copyright min size multiline</h4>
          <DxcFooter
            copyright="© DXC Technology 2020. All rights reserved.blablabla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla1"
            bottomLinks={bottomLarge}
            socialLinks={social}
            margin="large"
          ></DxcFooter>
        </div>
        <div className="test-case" id="Min-size-oneline-social">
          <h4>Min size social oneline</h4>
          <DxcFooter
            copyright="© DXC Technology 2020. All rights reserved."
            bottomLinks={bottom}
            socialLinks={socialLarge}
            margin="large"
          ></DxcFooter>
        </div>
      </div>
    </div>
  );
}

export default App;
