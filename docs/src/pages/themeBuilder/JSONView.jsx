import React from 'react';
import ReactJson from 'react-json-view';
import styled from "styled-components";

const JSONView = ({ customTheme, onEdit }) => {

  return <ReactJson src={customTheme} onEdit={({updated_src}) => { onEdit(updated_src); }} />
};

export default JSONView;