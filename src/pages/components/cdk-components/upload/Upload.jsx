import React from "react";
import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../common/DocTitle";
import Example from "../../common/Example";
import AlertPropsTable from "./api.jsx";
import Section from "../../common/Section";
import upload from "./examples/upload";

function Upload() {
  return (
    <ComponentDoc>
      <DocTitle size={1}>Upload</DocTitle>
      <Section>
        <DocTitle size={2}>Props</DocTitle>
        <AlertPropsTable />
      </Section>
      <Section>
        <DocTitle size={2}>Elements</DocTitle>
        <Example title="Upload" example={upload}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Upload;
