import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import LoadingSpinner from './LoadingSpinner';

export default {
  title: 'Components/Common/LoadingSpinner',
  component: LoadingSpinner,
} as Meta<typeof LoadingSpinner>;

const Template: StoryFn<typeof LoadingSpinner> = () => <LoadingSpinner />;

export const Default = Template.bind({});