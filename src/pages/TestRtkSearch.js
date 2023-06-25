import { useState, useEffect } from "react";

export default function TestRtkSearch() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("https://dog23.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setData(data.message);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setErrorMessage(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  if (isError) {
    console.log(errorMessage);
    return <div className="App">Error...</div>;
  }

  return (
    <div className="App">
      <img src={data} alt="dog" width="500" />
    </div>
  );
}
