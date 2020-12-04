import { Switch, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'

function App() {
  return (
    <div className='App'>
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </div>
    </div>
  )
}

export default App
