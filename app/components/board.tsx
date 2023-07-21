import { useState } from "react";
import Cell from "./cell";

const Board = () => {
  const [isKnightPlaced, setIsKnightPlaced] = useState(false);
  const [knightPosition, setKnightPosition] = useState("");

  const placeKnight = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isKnightPlaced) return knightPosition;

    const target = e.target as HTMLDivElement;
    let id = target.id;

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
    const nums = [1, 2, 3, 4, 5, 6, 7, 8];
    let color = gray;

    for (let i = 0; i < boardLength; i++) {
      const row = [];
      for (let j = 0; j < boardLength; j++) {
        const post = `${letters[i]}${nums[j]}`;
        const cell = Cell(color, post, isKnightPlaced);
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
