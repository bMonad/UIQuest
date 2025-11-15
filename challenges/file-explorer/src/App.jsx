import './App.css'
import List from './components/List'
import data from './data.json'

function App() {
  return (
    <div className='App'>
      <div className='card'>
        Explorer
        <List list={data} />
      </div>
    </div>
  )
}

export default App