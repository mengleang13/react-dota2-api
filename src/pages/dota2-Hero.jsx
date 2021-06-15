import axios from "axios";
import { useEffect, useState } from "react";
import { DotaCard } from "../components/dota-card";

function Dota2Hero() {
    const [data, setData] = useState([]);
    useEffect(() =>{
      axios.get("http://api.opendota.com/api/heroes").then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    }, []);
    console.log("ggg", data);
    return (
      <div>
       <div style={{ display: 'flex', flexWrap: 'wrap'}}>
           {data.map((Value) =>{
        return <DotaCard hero={Value.localized_name} type={Value.attack_type} leg={Value.legs} />
      })}
       </div>
      </div>
    );
  }
    export default Dota2Hero;