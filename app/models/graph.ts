const Graph = () => {
  const path: number[] = [];
  const graph: number[][] = [];
  let finalPath: number[];

  const createGraph = (vertices: string[]) => {
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
  };

  const knightMoves = (start: number, end: number) => {
    path.push(start);
    getShortestPath(start, end);
    return finalPath;
  };

  const getShortestPath = (start: number, end: number) => {
    for (let i = 0; i < graph[start].length; i++) {
      const curr = graph[start][i];

      if (path.includes(curr)) continue;

      if (finalPath !== undefined && finalPath.length <= path.length) break;
      if (curr === end) {
        finalPath = [...path, curr];
        break;
      } else {
        path.push(curr);
        getShortestPath(curr, end);
      }
    }

    path.pop();
  };

  return { createGraph, knightMoves };
};

export default Graph;
