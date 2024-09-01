import React from "react";
import { Stack, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {
  const { monthlyInvestment, interestRate, investmentTerm } = data;

  const monthlyRate = interestRate / 100 / 12;
  const totalMonths = investmentTerm * 12;

  const totalAmount =
    monthlyInvestment *
    ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) *
    (1 + monthlyRate);
  const totalInvested = monthlyInvestment * totalMonths;
  const totalReturns = totalAmount - totalInvested;

  const pieChartData = {
    labels: ["Invested Amount", "Estimated Returns"],
    datasets: [
      {
        label: "Invested Amt and Est. Return",
        data: [totalInvested, totalReturns],
        backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(75, 192, 192, 0.2)"], // Combination of blue and green
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)"],
        borderWidth: 3,
      },
    ],
  };
  function formatNumberWithCommas(number) {
    const num = number.toString().split('.');
    let lastThree = num[0].substring(num[0].length - 3);
    const otherNumbers = num[0].substring(0, num[0].length - 3);
    if (otherNumbers !== '') {
        lastThree = ',' + lastThree;
    }
    const result = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return num.length > 1 ? result + '.' + num[1] : result;
  }
  return (
    <Stack gap={3}>
      <Typography textAlign="center" variant="h5">
        Total Amount: ₹ {formatNumberWithCommas(Math.round(totalAmount))}
      </Typography>
      <Typography textAlign="center" variant="h6">
        Total Invested: ₹{formatNumberWithCommas(totalInvested)}
        <br />
        Est. returns: ₹{formatNumberWithCommas(Math.round(totalReturns))}
      </Typography>
      <Stack direction="row" justifyContent="center">
        <div>
          <Pie data={pieChartData} />
        </div>
      </Stack>
    </Stack>
  );
};

export default Result;
