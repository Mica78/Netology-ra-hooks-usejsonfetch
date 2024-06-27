

import './App.css'
import { ErrorComponent } from './components/ErrorComponent'
import { Loading } from './components/Loading'
import { Success } from './components/Success'

function App() {


  return (
    <>
      <Success />
      <Loading />
      <ErrorComponent />
    </>
  )
}

export default App
