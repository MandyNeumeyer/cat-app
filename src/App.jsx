import { useState, useEffect, useCallback } from 'react';
import Loading from './components/Loading';
import CatFacts from './components/CatFacts';
import './App.scss'



function App() {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const catFacts = await response.json();
      setData(catFacts);
      setLoading(false);
    } catch (e) {
      console.log(e, e.message);
    }
  }, []);

  useEffect(() => {

    const timer = setTimeout(() => {
      fetchData();
    }, 6000);

    return () => clearTimeout(timer);

  }, [fetchData]);


  return (
    <div>
      {loading
        ? <Loading />
        : <CatFacts
          data={data}
          fetchData={fetchData}
        />
      }
    </div>
  )

}




export default App
