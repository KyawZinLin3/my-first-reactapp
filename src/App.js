import { useEffect } from "react";

//
const API_URL = "http://www.omdbapi.com?apikey=dcee200b";

const App = () => {
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovie("spider");
  }, []);
  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
};

export default App;
