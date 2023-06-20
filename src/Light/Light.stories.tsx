import type { Meta, StoryObj } from "@storybook/react";
import Light from "./Light";

// what does this means? <> <typeof Light>
// This <> is a special Typescript convention see https://www.typescriptlang.org/docs/handbook/2/generics.html
const meta: Meta<typeof Light> = {
  component: Light,
  title: "Light",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["green", "yellow", "red", "black"],
    },
    label: {
      control: { type: "text" },
    },
  },
  // decorators: [withMaxWidth],
};

export default meta;
/**  similarily, what the features of StoryObj<typeof meta> */
type Story = StoryObj<typeof Light>;

/** EMpty  */
export const empty: Story = {
  args: {},
  render: (args) => <Light {...args}></Light>,
};
export const Base: Story = {
  args: {
    variant: "green",
  },
  argTypes: {
    variant: {
      control: { type: "color" },
    },
  },
  render: (args, argTypes) => <Light {...args} {...argTypes}></Light>,
};
export const Yellow: Story = {
  args: {
    variant: "yellow",
  },
};

export const Red: Story = {
  args: {
    variant: "red",
    label: "hello storybook",
  },
};

export const grouped: Story = {
  // why render: ()  ??
  // Storybook imports these *.stories.tsx files & analysis them for any "export"ed objects.
  // It calls the render function to show our Components in Storybook
  // See https://storybook.js.org/docs/react/api/csf#custom-render-functions
  render: () => (
    // div can be seperated as a single component
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        border: "1px solid black",
        width: "max-content",
        padding: 10,
      }}
    >
      <Light variant="red" />
      <Light variant="yellow" />
      <Light variant="green" />
    </div>
  ),
};
