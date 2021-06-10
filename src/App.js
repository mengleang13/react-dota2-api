import logo from './logo.svg';
import './App.css';
import { DotaCard } from "./components/dota-card";
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  useEffect(() =>{
    axios.get("http://api.opendota.com/api/heroes").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);
  console.log("ggg", data);
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap'}}>
      {data.map((Value) =>{
      return <DotaCard hero={Value.localized_name} type={Value.attack_type} leg={Value.legs} />
    })}
    </div>
  );
}

export default App;
