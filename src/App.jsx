import { useState } from "react";
import HeroContainer from "./Components/HeroContainer/HeroContainer";
import Navber from "./Components/Navber/Navber";

function App() {
  const [price, setPrice] = useState(0);

  const handelAddMoneyBtn = (money) => {
    setPrice(money + price);
  };

  return (
    <>
      {/* navber */}
      <Navber price={price}></Navber>
      <HeroContainer handelAddMoneyBtn={handelAddMoneyBtn}></HeroContainer>
    </>
  );
}

export default App;
