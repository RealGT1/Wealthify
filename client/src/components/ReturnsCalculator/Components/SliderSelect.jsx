import React from "react";
import SliderComponent from "./SliderComponent";

const SliderSelect = ({ data, setData }) => {
  return (
    <div>
      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            monthlyInvestment: value.toFixed(0),
          });
        }}
        defaultValue={data.monthlyInvestment}
        min={100}
        max={100000}
        steps={100}
        unit="₹"
        amount={data.monthlyInvestment}
        label="Monthly Investment"
        value={data.monthlyInvestment}
      />

      <SliderComponent
        onChange={(e, value) =>
          setData({
            ...data,
            interestRate: value.toFixed(2),
          })
        }
        defaultValue={data.interestRate}
        min={1}
        max={70}
        steps={0.1}
        unit="%"
        amount={data.interestRate}
        label="Expected return rate"
        value={data.interestRate}
      />
    </div>
  );
};

export default SliderSelect;
