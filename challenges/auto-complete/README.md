## Auto-Complete Project

This project is a React-based auto-complete component built with Vite. It demonstrates a modular approach to building a feature-rich auto-complete input, including custom hooks, API integration, error handling, and more.

## Features

- **Dynamic Suggestions:** Fetches suggestions from an external API as the user types.
- **Custom Hook (`UseCache`):** Implements caching for API results to minimize redundant network requests and improve performance.
- **Debounced API Calls:** Uses a debounce mechanism to avoid excessive API calls while typing.
- **Error Handling:** Displays user-friendly error messages for failed API requests or when no results are found.
- **Loading State:** Shows a loading indicator while fetching suggestions.
- **Customizable UI:** Supports custom styles and loading messages via props.
- **Keyboard & Mouse Interaction:** Allows users to select suggestions via mouse clicks.
- **Clear Input:** Provides a button to clear the input field.

## Project Structure

```
challenges/auto-complete/
├── public/
├── src/
│   ├── App.jsx                # Main app component
│   ├── App.css                # App styles
│   ├── index.css              # Global styles
│   ├── main.jsx               # Entry point
│   ├── assets/                # Static assets
│   ├── components/
│   │   ├── AutoComplete.jsx   # Auto-complete input component
│   │   ├── SuggestionList.jsx # Renders suggestion items
│   │   └── styles.css         # Component-specific styles
│   └── hooks/
│       └── UseCache.jsx       # Custom hook for caching API results
├── package.json
├── vite.config.js
├── README.md                  # Project documentation
```

## Key Components

### 1. `AutoComplete.jsx`

- Renders the input field and suggestion list.
- Handles input changes, suggestion selection, and UI states (loading, error, etc.).
- Accepts props for customization (placeholder, styles, loading message, etc.).
- Integrates with the custom hook and API fetch logic.

### 2. `SuggestionList.jsx`

- Displays the list of suggestions.
- Highlights matching text within suggestions.
- Handles click events for selecting a suggestion.

### 3. `UseCache.jsx` (Custom Hook)

- Wraps the API fetch function to cache results by query.
- Returns cached results if available, otherwise fetches from the API.
- Improves performance and reduces unnecessary network requests.

### 4. API Integration

- Uses Axios to fetch product suggestions from `https://dummyjson.com/products/search?q=<query>`.
- Handles API errors and displays appropriate messages.

### 5. Error Handling & Loading States

- Shows a loading indicator while fetching data.
- Displays error messages for failed requests or empty results.

## Usage

1. Start typing in the input field to trigger suggestions.
2. Suggestions are fetched from the API and displayed in a dropdown.
3. Click a suggestion to select it and populate the input field.
4. Use the clear button to reset the input.

## Customization

- Pass custom styles, loading messages, and event handlers via props to the `AutoComplete` component.
- Easily extend the component for different data sources or UI requirements.

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. Open the app in your browser and test the auto-complete functionality.

---

For more details, see the source code in the `src/components` and `src/hooks` folders.
