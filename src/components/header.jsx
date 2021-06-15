

import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
export const Header = (props) =>{
    return (
        <div style={{ display: "flex", justifyContent:"space-evenly", padding:20 }}
    >
        <Link to="/">
             <div>
              <img width={100} src={Logo} alt="log"/>
             </div>
        </Link>
        <div>
            <ul style={{ display: "flex", listStyle:"none"}}>
            <Link to="/Dota2Hero">
                <li style={{paddingRight:30}}>Dota hero</li>
            </Link>
            <Link to="/ProPlayer">
                <li>Top Player</li>
            </Link>
            </ul>
        </div>
    </div>
    );
};