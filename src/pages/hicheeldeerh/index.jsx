import { HumMenu } from "@/components/HelpComponents/HumMenu/HumMenu";
import { ConditionalRending } from "@/components/HicheelDeerh/ConditionalRending";
import { TernaryOperator } from "@/components/HicheelDeerh/TernaryOperator";
import { UseState } from "@/components/HicheelDeerh/UseState";

export default function Home() {
  return (
    <div>
      <ConditionalRending />
      <TernaryOperator shape={"round"} />
      <UseState />
      <HumMenu />
    </div>
  );
}
