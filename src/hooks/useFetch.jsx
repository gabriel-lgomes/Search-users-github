import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      
      setIsLoading(true);
      
      try {
        const response = await fetch(url);
        if(!response.ok) {
          throw new Error('Erro ao buscar dados');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch(error) {
        setError(error.message)
        navigate("/");
      }
  
      setIsLoading(false)
  
    } 

    fetchData();

  }, [url]);

  return {data, isLoading, error}

};

export default useFetch;