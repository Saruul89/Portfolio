export const TernaryOperator = ({ shape }) => {
  //props gedeg object irj bgaa
  if (shape === "square") {
    return <div className="bg-red-400 w-[200px] h-[200px]">Dorwoljin</div>;
  }
  if (shape === "round") {
    return (
      <div className="bg-slate-600 w-[200px] h-[200px] rounded-full">
        booronhii
      </div>
    );
  }
  return <div className="bg-blue-600">dursgui</div>;
};
