import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Result from "./Components/Result";
import SliderSelect from "./Components/SliderSelect";
import TenureSelect from "./Components/TenureSelect";
import Navbar from "./Components/Navbar";
function DisplayReturns() {
  const [data, setData] = useState({
    monthlyInvestment: 500,
    interestRate: 12,
    investmentTerm: 5,
  });

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default DisplayReturns;
