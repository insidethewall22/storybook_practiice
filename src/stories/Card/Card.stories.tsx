import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Text/Text";
import cat from "./cat.jpg";
import Card from "./Card";
import React from "react";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Card",
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["default", "light"],
    },
  },
};
export default meta;
type Story = StoryObj<typeof Card>;

export const CardDefault: Story = {
  args: {
    type: "default",
    body: (
      <div>
        <Text as="h3" children="Card title"></Text>
        <Text as="h2" children="Card body text"></Text>
      </div>
    ),
  },
  render: (args) => <Card {...args}></Card>,
};
export const CardLight: Story = {
  args: {
    type: "light",
    body: (
      <div>
        <Text as="h3" children="Card title"></Text>
        <Text as="h2" children="Card body text"></Text>
      </div>
    ),
  },
  render: (args) => <Card {...args}></Card>,
};

export const CardWithFooter: Story = {
  args: {
    type: "default",
    body: (
      <div>
        <Text as="h3" children="Card title"></Text>
        <Text as="h2" children="Card body text"></Text>
      </div>
    ),
    footer: <Text as="h4" children="footer"></Text>,
  },
  render: (args) => <Card {...args}></Card>,
};

export const CardFullDefault: Story = {
  args: {
    type: "default",
    header: <img src={cat} />,
    body: (
      <div>
        <Text as="h3" children="Card title"></Text>
        <Text as="h2" children="Card body text"></Text>
      </div>
    ),
    footer: <Text as="h4" children="footer"></Text>,
  },
  render: (args) => <Card {...args}></Card>,
};

export const CardError: Story = {
  args: {
    type: "default",
    error: true,
    errorContent: "this is an error",
    header: <img src={cat} />,
    body: (
      <div>
        <Text as="h3" children="Card title"></Text>
        <Text as="h2" children="Card body text"></Text>
      </div>
    ),
    footer: <Text as="h4" children="footer"></Text>,
  },
  render: (args) => <Card {...args}></Card>,
};
