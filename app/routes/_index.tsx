import type { V2_MetaFunction } from "@remix-run/node";
import Board from "~/components/board";
import Header from "~/components/header";

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
  return (
    <div>
      <Header />
      <Board />
    </div>
  );
}
