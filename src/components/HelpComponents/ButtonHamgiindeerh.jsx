export const Button = ({ text }) => {
  //Props gj nerlegddeg zowhon object damjuulna. component-ruu damjuulj bga prameter yma
  //text gj ogood header deeree Button text gj ogsnoor neriig ni soliod l class-uud ahij solih shaardlagagu hiigdne
  return (
    <button className="text-[16px] font-medium text-[#4B5563] dark:bg-[#030712] dark:text-[#D1D5DB]">
      {text}
    </button>
  );
};
