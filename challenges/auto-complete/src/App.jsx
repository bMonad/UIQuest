import axios from 'axios'
import './App.css'
import AutoComplete from './components/AutoComplete';
import { useState } from 'react';
import { UseCache } from './hooks/UseCache';

function App() {
  const [showAutoComplete, setShowAutoComplete] = useState(false);

  const fetchFromAPI = async (query) => {
    const result = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
    if (result.status !== 200) throw new Error("Error fetching data");
    return result.data.products;
  }

  const fetchSuggestions = UseCache(fetchFromAPI);

  const handleFocus = () => {
    setShowAutoComplete(true);
  }

  const handleBlur = () => {
    setTimeout(() => {
      setShowAutoComplete(false);
    }, 100);

    clearTimeout();
  }

  return (
    <AutoComplete
      placeholder={"Search..."}
      fetchSuggestions={fetchSuggestions}
      datakey={"title"}
      showAutoComplete={showAutoComplete}
      customLoading={<>Loading...</>}
      onBlur={handleBlur}
      onFocus={handleFocus}
      customStyles={{}}
    />
  )
}

export default App
