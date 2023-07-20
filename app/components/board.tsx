import Cell from "./cell";

const Board = () => {
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
        const cell = Cell(color, post);
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

  return <div>{getCells()}</div>;
};

export default Board;
