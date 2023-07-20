const Cell = (color: String, post: String) => {
  return (
    <div
      className={`${color} w-[40px] h-[40px]`}
      id={`${post}`}
      key={`${post}`}
    ></div>
  );
};

export default Cell;
