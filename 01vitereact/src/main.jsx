import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
  return (
  <div>
      <h1>Custom App!</h1>
   </div>
  )
}
const anotherElement = (
   <a href="https://google.com" target='_blank' >Visit google</a>
)
const anotheruser="Hemant"
const reactElement=React.createElement(
  'a',
  {
    href:'https://google.com',target :'_blank'
  },'Click me to visit google',anotheruser
)
ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)

