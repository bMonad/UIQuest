import { useEffect, useState, useCallback } from 'react'
import './styles.css'
import SuggestionList from './SuggestionList';

const AutoComplete = ({
  placeholder = "",
  fetchSuggestions,
  datakey = "",
  showAutoComplete,
  customLoading = "Loading...",
  onBlur = () => { },
  onFocus = () => { },
  customStyles = {}
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSuggestionClick = (suggestion) => {
    const value = datakey ? suggestion[datakey] : suggestion;
    setInputValue(value);
    setSuggestions([]);
  }

  const getSuggestions = useCallback(async (query) => {
    setLoading(true);
    setError(null);
    try {
      let results = [];
      if (fetchSuggestions) {
        let data = await fetchSuggestions(query);

        results = data.filter(item => {
          return item[datakey].toLowerCase().includes(query.toLowerCase())
        });
      }
      if (!results || results.length === 0) setError("No results found");
      setSuggestions(results);
    } catch (err) {
      setError("Failed to fetch suggestions\n" + err.message);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  }, [fetchSuggestions, datakey]);

  useEffect(() => {
    let timer = null;
    const run = async () => {
      if (inputValue.length > 0) {
        timer = setTimeout(() => getSuggestions(inputValue), 300);
      } else {
        clearTimeout(timer);
        setSuggestions([]);
      }
    };
    run();

    return () => clearTimeout(timer);
  }, [inputValue, getSuggestions]);

  return (
    <div className='container'>
      <div className="input-container">
        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={onBlur}
          onFocus={onFocus}
          style={customStyles}
        />
        <button onClick={() => setInputValue("")}>Clear</button>
      </div>

      {(suggestions.length > 0 || loading || error) && showAutoComplete && (
        <ul className="suggestions-list" role='listbox'>
          {error && <div className="error">{error}</div>}
          {loading && <div className='loading'>{customLoading}</div>}
          <SuggestionList suggestions={suggestions} highlight={inputValue} datakey={datakey} onSuggestionClick={handleSuggestionClick} />
        </ul>
      )}
    </div>
  )
}

export default AutoComplete