import type { Meta, StoryObj } from "@storybook/react";
import Pokemon from "./Pokemon";
// import { useFetch } from "../../hooks/useFetcht";
import React, { ReactElement } from "react";

const meta: Meta<typeof Pokemon> = {
  component: Pokemon,
  argTypes: {
    pname: {
      control: {
        type: "text",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Pokemon>;

export const clefairy: Story = {
  args: {
    pname: "clefairy",
  },

  render: (args) => <Pokemon {...args}></Pokemon>,
};

export const pikachu: Story = {
  args: {
    pname: "pikachu",
  },

  render: (args) => <Pokemon {...args}></Pokemon>,
};
export const charizard: Story = {
  args: {
    pname: "charizard",
  },

  render: (args) => <Pokemon {...args}></Pokemon>,
};
export const mewtwo: Story = {
  args: {
    pname: "mewtwo",
  },

  render: (args) => <Pokemon {...args}></Pokemon>,
};
export const snorlax: Story = {
  args: {
    pname: "snorlax",
  },

  render: (args) => <Pokemon {...args}></Pokemon>,
};
export const bulbasaur: Story = {
  args: {
    pname: "bulbasaur",
  },

  render: (args) => <Pokemon {...args}></Pokemon>,
};
export const psyduck: Story = {
  args: {
    pname: "psyduck",
  },

  render: (args) => <Pokemon {...args}></Pokemon>,
};
export const gengar: Story = {
  args: {
    pname: "gengar",
  },

  render: (args) => <Pokemon {...args}></Pokemon>,
};

export const pichu: Story = {
  args: {
    pname: "pichu",
  },

  render: (args) => <Pokemon {...args}></Pokemon>,
};
export const slowpoke: Story = {
  args: {
    pname: "slowpoke",
  },

  render: (args) => <Pokemon {...args}></Pokemon>,
};

export const infiniteScoll: Story = {
  args: {
    isInfinite: true,
    pname: "slowpoke",
  },

  render: (args) => <Pokemon {...args}></Pokemon>,
};
