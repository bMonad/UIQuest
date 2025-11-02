import { useRef } from 'react'

export function UseCache(fetcher) {
  const cacheRef = useRef(new Map());

  const getSuggestions = async (query) => {
    if (cacheRef.current.has(query)) {
      return cacheRef.current.get(query);
    }

    const results = await fetcher(query);
    cacheRef.current.set(query, results);
    return results;
  }

  return getSuggestions;
}
