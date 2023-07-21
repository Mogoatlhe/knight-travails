const Cell = (color: String, post: String, isKnightPlaced: boolean) => {
  const knightHover = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isKnightPlaced) return;

    toggleKnight(e, false);
  };

  const knightLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isKnightPlaced) return;

    toggleKnight(e, true);
  };

  const toggleKnight = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    add: boolean
  ) => {
    const target = e.target as HTMLDivElement;
    const image = target.children[0];

    if (image === undefined) return;

    if (add) image.classList.add("hidden");
    else image.classList.remove("hidden");
  };

  return (
    <div
      className={`${color} w-[40px] h-[40px] flex justify-center items-center`}
      id={`${post}`}
      key={`${post}`}
      onMouseOver={knightHover}
      onMouseOut={knightLeave}
    >
      <img
        src="https://static.wikia.nocookie.net/chess/images/7/7d/DarkKnight.png/"
        alt="chess knight"
        className="hidden w-[30px] h[30px]"
      />
    </div>
  );
};

export default Cell;
