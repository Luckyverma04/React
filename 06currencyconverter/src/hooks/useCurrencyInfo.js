import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})
  
  useEffect(() => {
  
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.rates) {
          setData(res.rates)
        }
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error)

        setData({
          usd: 1,
          eur: 0.92,
          gbp: 0.79,
          inr: 83.25,
          jpy: 151.67,
          aud: 1.52,
          cad: 1.37,
          chf: 0.91,
          cny: 7.24,
          hkd: 7.81
        })
      })
  }, [currency])
  
  return data
}

export default useCurrencyInfo;