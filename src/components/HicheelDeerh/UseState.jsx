import { useState } from "react";

export const UseState = () => {
  const [count, setCount] = useState(0); //[] ene haalt bichij bga shaltgaan ni table argiig hereglej bga gsn ug yma hamgin ard taliin () dotor anhnii utga ogogdno, set ni blhoor useState-aa oorchloh zoriulalttai seter function yma

  const countPlus = () => {
    //doorh return deer darahad count + 1 gdg functioniig dahin dahin gargah zorilgoor medeej nemj function bichigdne.
    setCount(count + 1); //endee ter oorchlogdoj boldoggu zuiliig oorchilj bn. () dotroo yaaj oorchlohoo bichij ogno
    document.body.classList.toggle("dark"); //document ter chigt ni ajilluuulah zoriulalttai dark-iig duudah blgnd
  };
  const minusPlus = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col ml-[200px] items-center w-full">
      <button onClick={countPlus}>PlusNumber</button>
      <button onClick={minusPlus}>MinusNumber</button>
      <h1>{count}</h1>
    </div>
  );
};

//render gdg ni delgetsen deerh medeelel oorchlogdoh baidliig haruulj bn
//doorh 2 nohtsold state hiine
//state oorchlogdoh uyd buyu [dark, setDark] iig oorchloh gd bga uyd render hiine
//props oorchlogdwol render hiine
//state gdg ni tolow baidal gsn ug
