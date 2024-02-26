import { useState } from "react";
import { Input, useCurrency } from "./components";
import { MdOutlineSwapVert } from "react-icons/md";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertAmount, setConvertAmount] = useState(0);
  const currencyInfo = useCurrency(from);
  const option = Object.keys(currencyInfo);

  const swap = () => {
    setTo(from);
    setFrom(to);
    setConvertAmount(amount);
    setAmount(convertAmount);
  };
  const convert = () => {
    setConvertAmount(amount * currencyInfo[to]);
  };
  return (
    <>
      <div className="w-screen h-screen bg-slate-950 flex flex-col items-center justify-center">
        <div className="bg-slate-700 m-5  flex flex-col items-center max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm w-full">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full">
              <Input
                label={from}
                amount={amount}
                currencyOption={option}
                onCurrency={(currency) => setAmount(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="flex items-center justify-center">
              <button className="text-center  text-yellow-50 font-bold text-2xl px-5 py-2 bg-blue-900 rounded-lg " onClick={swap}>
                <MdOutlineSwapVert />
              </button>
            </div>
            <div className="w-full ">
              <Input
                label={to}
                amount={convertAmount}
                currencyOption={option}
                onCurrency={(currency) => setTo(currency)}
                amountDisable
                selectCurrency={to}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg mt-2" onClick={convert}
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
