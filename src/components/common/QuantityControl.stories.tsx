import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import QuantityControl from './QuantityControl';

export default {
  title: 'Components/Common/QuantityControl',
  component: QuantityControl,
  argTypes: {
    value: { control: 'number' },
    min: { control: 'number' },
    max: { control: 'number' },
    onChange: { action: 'onChange' }, 
  },
} as Meta<typeof QuantityControl>;

const Template: StoryFn<typeof QuantityControl> = (args) => <QuantityControl {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 1,
  min: 1,
};

export const WithMax = Template.bind({});
WithMax.args = {
  value: 3,
  min: 1,
  max: 5,
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  value: 5,
  min: 0,
};