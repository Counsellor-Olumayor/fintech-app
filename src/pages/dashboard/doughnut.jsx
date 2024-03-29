import {Doughnut} from "react-chartjs-2";
import "chart.js/auto";
import {useEffect, useState} from 'react';
import axios from "axios"

 


const Doughtnut = () => {

  const [pieData, setPieData] = useState({
    labels: [],
    datasets: [
      {
        label: 'First dataset',
        data: [],
        fill: true,
        backgroundColor: ['green', 'red']
      },
      ],
  })

  useEffect(()=>{

    return async () => {

      try {
        const getTransactions = await axios.get("http://localhost:5655/api/v1/transactions/transactions-logs")
          
        const newData = getTransactions.data.data
        
        const getTransactionType = newData.map((type,)=>{
          return type.transaction_type
        })

      const removeDuplicateTransactionType = getTransactionType.filter((type,i)=>{
        return getTransactionType.indexOf(type) === i
      })
      setPieData({...pieData, labels: [...removeDuplicateTransactionType],
                              datasets:[{...pieData.datasets[0],  
                              data: [...removeDuplicateTransactionType.map((item) => newData.filter((item2) => item2.transaction_type === item).length)]
                            }] })

      } catch (error) {

        error.response.data.message
        
      }
          
          }

  }, [])


  return (
    <div className="">

      <Doughnut width={50} options={{ maintainAspectRatio: false }} data={pieData} />

      
    </div>
  )
}

export default Doughtnut