import { Card, Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const ProPlayer = () => { 
    const [data, setData] = useState ();
    const [selectPlayer, setSelectplayer] = useState ([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        axios.get("https://api.opendota.com/api/proPlayers").then((res) =>{console.log(res);
        setData(res.data);
        console.log(res.data)
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, []);
    console.log(data);
    const filterTeam = (team) =>{
       const datas = data.filter((data) => data.team_name === team);
       console.log(datas);
       setSelectplayer(datas);
       return datas;
    };
    const teamArr =["OG", "Nigma", "Team Secret", "Team Liquid", "Evil Geniuses", "Alliance"]
    return (
    <div>
     <div style={{ display: "flex", justifyContent: "center"}}>
         {loading ?<p>loading!</p> : null}
         <Select
            disabled={loading}
            onSelect={(value) =>{

                console.log(value);
                filterTeam(value);
            }}
         >
             {teamArr.map((data, key) =>{
                 return(
                    <Select.Option value={data} key={key}>
                        {data}
                    </Select.Option>
                 );
             })}
           
         </Select>
        
         </div>
         <div style={{ 
             display: "flex", 
             justifyContent: "center", 
             flexWrap: "wrap"}}
        >
            {selectPlayer.map((data) =>{
                console.log(data)
                return(
                    <Card 
                        title={data.name}
                        extra={<a href={data.profileur}>More</a>}
                        style={{ width: 300, margin: 20}}    
            >
                        <img src={data.avatarmedium}  />  
                        
                     </Card>
                );
            })}
         </div>
     </div>
    );
};
    export default ProPlayer; 