import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Card.css'
import Card1 from './Card1.jsx'
import Card2 from './Card2.jsx'
import Card3 from './Card3.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />

    <Card1></Card1>
    <Card2></Card2>
    <Card3></Card3>
    
  </React.StrictMode>,
)
