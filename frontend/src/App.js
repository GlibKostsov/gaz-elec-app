import { Fragment } from 'react'
import GetStarted from './screens/GetStarted'
import Home from './screens/Home'

const App = () => {
  const isLoggedIn = false

  return (
    <Fragment>
      <main>
        {!isLoggedIn && <GetStarted />}
        {isLoggedIn && <Home />}
      </main>
    </Fragment>
  )
}

export default App
