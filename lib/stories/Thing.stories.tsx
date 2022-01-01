import React from 'react';
import { Meta, Story } from '@storybook/react';
import DxcTextInput from '../src/text-input/TextInput';

const meta: Meta = {
  title: 'Welcome',
  component: DxcTextInput,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<any> = (args) => (
  <DxcTextInput
    label="Controlled"
    helperText="Helper text"
    margin="medium"
    clearable
  />
);
// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
