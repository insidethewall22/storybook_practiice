import type { Meta, StoryObj } from "@storybook/react";
import Pokemon from "./Pokemon";
// import { useFetch } from "../../hooks/useFetcht";
import React, { ReactElement } from "react";

const meta: Meta<typeof Pokemon> = {
  component: Pokemon,
};
export default meta;
// export default {
//   decorators: [
//     withHeadless({
//       restful: {
//         baseURL: "https://pokeapi.co/api/v2/",
//       },
//     }),
//   ],
//   parameters: {
//     headless: {
//       Pokemon: {
//         query: "pokemon/{id}",
//         variables: {
//           id: {
//             type: "integer",
//             minimum: 1,
//           },
//         },
//       },
//     },
//   },
// };

// export const pokemon = (
//   args: Args,
//   { status, data }: HeadlessStoryContext
// ): ReactElement | null | string => {
//   switch (status?.Pokemon) {
//     case FetchStatus.Inactive:
//       return "Inactive";
//     case FetchStatus.Rejected:
//       return "rejected";
//     default:
//       return data?.Pokemon ? "success" : null;
//   }
// };

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
