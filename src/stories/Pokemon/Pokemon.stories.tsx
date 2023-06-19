import type { Args, Meta, StoryObj } from "@storybook/react";
import Pokemon, { useFetch } from "./Pokemon";
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

export const text: Story = {
  args: {},

  render: (args) => <Pokemon {...args}></Pokemon>,
};
