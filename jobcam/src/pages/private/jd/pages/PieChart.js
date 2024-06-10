import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Task", "Hours per Day"],
    ["Application answered", 90],
    ["Interviewed", 60],
    ["Hired", 40],

];

export const options = {
    title: "Profile Strength",
};

export function PieChart() {
    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"280px"}
        />
    );
}
