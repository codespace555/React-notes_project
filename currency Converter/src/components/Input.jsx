import React, { useId } from "react";

export default function Input({
  label,
  className = "",
  amount,
  onAmountChange,
  onCurrency,
  currencyOption = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
    const inuptID = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={inuptID} className="text-black/40 mb-2 inline-block">{label}</label>
        <input
        id={inuptID}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          disabled={amountDisable}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrency && onCurrency(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOption.map((value) => {
          return (<option key={value} value={value}>
              {value}
            </option>)
          })}
        </select>
      </div>
    </div>
  );
}
