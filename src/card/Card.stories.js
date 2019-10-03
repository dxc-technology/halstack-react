import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";

import lighthouse from "../../.storybook/public/pwa-lighthouse.png";
import kevin from "../../.storybook/public/kevin-mueller.jpg";
import dylan from "../../.storybook/public/dylan-ferreira.jpg";

import DxcCard from "./Card.jsx";

import cardMD from "./readme.md";

const onClick = action("onClick");
onClick.toString = () => "onClickHandler";

storiesOf("Form Components|Card", module).add(
  "Types",
  () => (
    <div>
      <div style={{ display: "inline-flex", alignItems: "center" }}>
        <DxcCard onClick={onClick} imageSrc={kevin}>
          <div>Card Example</div>
        </DxcCard>
        <DxcCard onClick={onClick} imageSrc={lighthouse} imagePosition={"after"} mode={"alternative"}>
          <div>Card Example</div>
        </DxcCard>
        <DxcCard onClick={onClick} imageSrc={kevin} imagePosition={"above"} mode={"alternative"}>
          <div>Card Example</div>
        </DxcCard>
        <DxcCard onClick={onClick} imageSrc={lighthouse} imagePosition={"below"}>
          <div>Card Example</div>
        </DxcCard>
      </div>

      <div style={{ display: "inline-flex", background: "black", alignItems: "center" }}>
        <DxcCard onClick={onClick} imageSrc={kevin} theme={"dark"}>
          <div>Card Example</div>
        </DxcCard>
        <DxcCard onClick={onClick} imageSrc={lighthouse} theme={"dark"} imagePosition={"after"} mode={"alternative"}>
          <div>Card Example</div>
        </DxcCard>
        <DxcCard onClick={onClick} imageSrc={kevin} theme={"dark"} imagePosition={"above"} mode={"alternative"}>
          <div>Card Example</div>
        </DxcCard>
        <DxcCard onClick={onClick} imageSrc={lighthouse} theme={"dark"} imagePosition={"below"}>
          <div>Card Example</div>
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
          flexWrap: "wrap",
          margin: "10px"
        }}
      >
        <DxcCard {...props} onClick={onClick}>
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

        <DxcCard {...props} onClick={onClick} imageSrc={kevin}>
          <div
            style={{
              fontFamily: "Open Sans, sans serif"
            }}
          >
            <h1>Content</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipiscing elit, cras potenti.</p>
          </div>
        </DxcCard>

        <DxcCard {...props} onClick={onClick} imageSrc={dylan}></DxcCard>

        <DxcCard {...props} onClick={onClick} imageSrc={kevin}></DxcCard>
      </div>
    );
  },
  {
    notes: { markdown: cardMD }
  }
);
