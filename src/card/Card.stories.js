import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";

import lighthouse from "../../.storybook/public/pwa-lighthouse.png";

import DxcCard from "./Card.jsx";

import cardMD from "./readme.md";

const onClick = action("onClick");
onClick.toString = () => "onClickHandler";

storiesOf("Form Components|Card", module).add(
  "Types",
  () => (
    <div>
      <div style={{ display: "inline-flex", alignItems: "center" }}>
        <DxcCard onClick={onClick} imageSrc={lighthouse}>
          <div style={{ width: "150px" }}>Card Example</div>
        </DxcCard>
        <DxcCard onClick={onClick} imageSrc={lighthouse} imagePosition={"after"} mode={"alternative"}>
          <div style={{ width: "150px"}}>Card Example</div>
        </DxcCard>
        <DxcCard onClick={onClick} imageSrc={lighthouse} imagePosition={"above"} mode={"alternative"}>
          <div style={{ width: "150px"}}>Card Example</div>
        </DxcCard>
        <DxcCard onClick={onClick} imageSrc={lighthouse} imagePosition={"below"}>
          <div style={{ width: "150px" }}>Card Example</div>
        </DxcCard>
      </div>

      <div style={{ display: "inline-flex", background: "black", alignItems: "center" }}>
        <DxcCard onClick={onClick} imageSrc={lighthouse} theme={"dark"}>
          <div style={{ width: "150px"}}>Card Example</div>
        </DxcCard>
        <DxcCard onClick={onClick} imageSrc={lighthouse} theme={"dark"} imagePosition={"after"} mode={"alternative"}>
          <div style={{ width: "150px"}}>Card Example</div>
        </DxcCard>
        <DxcCard onClick={onClick} imageSrc={lighthouse} theme={"dark"} imagePosition={"above"} mode={"alternative"}>
          <div style={{ width: "150px"}}>Card Example</div>
        </DxcCard>
        <DxcCard onClick={onClick} imageSrc={lighthouse} theme={"dark"} imagePosition={"below"}>
          <div style={{ width: "150px"}}>Card Example</div>
        </DxcCard>
      </div>
    </div>
  ),
  {
    notes: { markdown: cardMD }
  }
);

const knobProps = () => ({
  theme: select("Theme", { light: "light", dark: "dark" }, "light"),
  imagePosition: select(
    "Image Position",
    { after: "after", before: "before", above: "above", below: "below" },
    "after"
  ),
  mode: select("Mode", { default: "default", alternative: "alternative" }, "default")
});

storiesOf("Form Components|Card", module).add(
  "Knobs example",
  () => {
    const props = knobProps();
    return (
      <div
        style={{
          background: (props.theme === "dark" && "black") || "transparent",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >
        <DxcCard {...props} onClick={onClick} imageSrc={lighthouse}>
          <div
            style={{
              fontFamily: "Open Sans, sans serif"
            }}
          >
            <h1>Content</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </DxcCard>

        <DxcCard {...props} onClick={onClick} imageSrc={lighthouse}>
          <div
            style={{
              fontFamily: "Open Sans, sans serif"
            }}
          >
            <h1>Content</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipiscing elit, cras potenti.</p>
          </div>
        </DxcCard>

        <DxcCard {...props} onClick={onClick} imageSrc={lighthouse}>
          <p
            style={{
              fontFamily: "Open Sans, sans serif"
            }}
          >
            Content
          </p>
        </DxcCard>

        <DxcCard {...props} onClick={onClick} imageSrc={lighthouse}></DxcCard>
      </div>
    );
  },
  {
    notes: { markdown: cardMD }
  }
);
