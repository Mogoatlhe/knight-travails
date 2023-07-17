import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Knight Travails" },
    {
      name: "description",
      content:
        "Find the shortest path a knight can take from one position on a chessboard to another.",
    },
  ];
};

export default function Index() {
  return <div></div>;
}
