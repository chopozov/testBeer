import { useEffect, useState } from "react";

function ColumnChart ({ google, info }) {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (google && !chart) {
      const data = new google.visualization.DataTable();
      data.addColumn("string", "abv");
      data.addColumn("number", "Count");
      data.addRows(info);

      const options = {
        title: "ABV",
        width: 1200,
        height: 300,
      };

      const newChart = new google.visualization.ColumnChart(document.getElementById("ABV"));
      newChart.draw(data, options);

      setChart(newChart);
    }
  }, [google, chart, info]);

  return <div id="ABV"/>;
};

export default ColumnChart;
