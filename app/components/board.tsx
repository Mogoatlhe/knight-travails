import { useState } from "react";
import Cell from "./cell";

const Board = () => {
  const vertices: string[] = [];
  const graph: number[][] = [];
  const [isKnightPlaced, setIsKnightPlaced] = useState(false);
  const [knightPosition, setKnightPosition] = useState("");
  const [endSquare, setEndSquare] = useState("");

  const placeKnight = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    let id = target.id;
    if (isKnightPlaced) {
      if (target.classList.contains("hover:bg-sky-600")) {
        target.classList.add("bg-sky-600");
        setEndSquare(id);
        console.log(id);
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

    graph.push(...createGraph());
    return cells;
  };

  const createGraph = () => {
    const graph = [];
    const adjencencies = [
      [-2, 1],
      [-1, 2],
      [1, 2],
      [2, 1],
      [2, -1],
      [1, -2],
      [-1, -2],
      [-2, -1],
    ];
    for (let i = 0; i < vertices.length; i++) {
      // A - H === 65 - 72
      // 1 - 8 === 49 - 56
      const row = [];
      const letterCode = vertices[i].charCodeAt(0);
      const numberCode = vertices[i].charCodeAt(1);
      for (let j = 0; j < adjencencies.length; j++) {
        const horizontal = adjencencies[j][0] + letterCode;
        const vertical = adjencencies[j][1] + numberCode;
        if (
          horizontal >= 65 &&
          horizontal <= 72 &&
          vertical >= 49 &&
          vertical <= 56
        ) {
          row.push(
            vertices.indexOf(
              `${String.fromCharCode(horizontal)}${String.fromCharCode(
                vertical
              )}`
            )
          );
        }
      }

      graph.push(row);
    }
    return graph;
  };

  return <div onClick={placeKnight}>{getCells()}</div>;
};

export default Board;
