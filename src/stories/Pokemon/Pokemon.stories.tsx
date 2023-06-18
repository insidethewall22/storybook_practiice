import type { Meta, StoryObj } from "@storybook/react";
import Pokemon from "./Pokemon";
import { useFetch } from "../../hooks/useFetcht";

const meta: Meta<typeof Pokemon> = {
  component: Pokemon,
};

export default meta;
type Story = StoryObj<typeof Pokemon>;
// const { data, loading, error } =

export const text: Story = {
  //   args: { name: useFetch("https://pokeapi.co/api/v2/pokemon/clefairy").data },
  args: { name: useFetch("https://pokeapi.co/api/v2/pokemon/clefairy").data },
  render: (args) => <Pokemon {...args}></Pokemon>,
};
