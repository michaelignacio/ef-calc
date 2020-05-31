import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-colorschemes/';

const Chart = (props) => {
  const data = {
    datasets: [{
      data: [
        props.data.food,
        props.data.bills,
        props.data.accommodation,
        props.data.transpo,
        props.data.pocketMoney
      ],
    }],
    labels: [
      'Food',
      'Bills',
      'Accommodation',
      'Transportation',
      'Pocket Money',
    ],
  };

  const options = {
      plugins: {
          colorschemes: {
              scheme: 'brewer.Paired12'
          }
      }
  };

  return (
    <Doughnut data={data} options={options} />
  )
};

export default Chart;