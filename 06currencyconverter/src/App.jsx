import { useState, useEffect } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)


  useEffect(() => {
    if(options.length > 0) {
      convert()
    }
  }, [currencyInfo, amount, from, to])

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
  
    <div 
      className="flex justify-center items-center min-h-screen w-full"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/7230322/pexels-photo-7230322.jpeg?auto=compress&cs=tinysrgb&w=600')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
      }}
    >
      {/* Added centering div wrapper */}
      <div className="flex justify-center items-center w-full h-full">
        
        {/* Dark centered container */}
        <div className="w-full max-w-md border border-gray-600 rounded-lg p-6 backdrop-blur-sm bg-black/70 shadow-xl">
          <h2 className="text-2xl font-bold text-white text-center mb-6">Currency Converter</h2>
          
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-4">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            
            <div className="relative w-full h-0.5 my-6">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-3 py-1 hover:bg-blue-700 transition-colors shadow-lg"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            
            <div className="w-full mb-6">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App