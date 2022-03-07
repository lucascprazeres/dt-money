import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { createServer } from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Desenvolvimento de site',
          amount: 1200000,
          type: 'deposit',
          category: 'Venda',
          createdAt: '12/04/2021'
        },
        {
          id: 2,
          title: 'Hamburguer',
          amount: 5900,
          type: 'withdraw',
          category: 'Alimentação',
          createdAt: '10/04/2021'
        },
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
