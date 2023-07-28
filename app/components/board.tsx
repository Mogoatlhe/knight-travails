import { useState } from "react";
import Cell from "./cell";
import Graph from "~/models/graph";

const Board = () => {
  const vertices: string[] = [];
  const [isKnightPlaced, setIsKnightPlaced] = useState(false);
  const [knightPosition, setKnightPosition] = useState("");
  const [endSquare, setEndSquare] = useState("");
  const graph = Graph();

  const placeKnight = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    let id = target.id;
    if (isKnightPlaced) {
      if (target.classList.contains("hover:bg-sky-600")) {
        target.classList.add("bg-sky-600");
        setEndSquare(id);

        const start = vertices.indexOf(knightPosition);
        const end = vertices.indexOf(id);

        if (start === -1 || end === -1) throw new Error("index not found");

        graph.createGraph(vertices);
        const path = graph.knightMoves(start, end);
        console.log("start: ", start, "end: ", end);
        console.log(path);
      }
      return knightPosition;
    }

    if (id.length === 0) {
      const targetParent = target.parentElement;
      setKnightPosition(targetParent?.id as string);
    } else setKnightPosition(target.id);

    setIsKnightPlaced(true);
  };

  const getCells = () => {
    const cells = [];
    const boardLength = 8;
    const gray = "bg-gray-200";
    const lime = "bg-lime-800";
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const nums = [8, 7, 6, 5, 4, 3, 2, 1];
    let color = gray;

    for (let i = 0; i < boardLength; i++) {
      const row = [];
      for (let j = 0; j < boardLength; j++) {
        const post = `${letters[i]}${nums[j]}`;
        vertices.push(post);
        const cell = Cell(
          color,
          post,
          isKnightPlaced,
          knightPosition,
          endSquare
        );
        row.push(cell);
        color = color === gray ? lime : gray;
      }
      color = color === gray ? lime : gray;

      cells.push(
        <div className="flex w-[400px]" key={i}>
          {row}
        </div>
      );
    }

    return cells;
  };

  return <div onClick={placeKnight}>{getCells()}</div>;
};

export default Board;
