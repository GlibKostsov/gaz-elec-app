import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import GetStarted from './screens/GetStarted'
import Home from './screens/Home'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={['/', '/getstarted']} component={GetStarted} />
        <Route exact path='/home' component={Home} />
      </Switch>
    </Router>
  )
}

export default App
