import { Button, Input } from "antd";
import { useState } from "react";


const CrudPage = () =>{
    const [todo, setTodo] = useState([]);
    const [textInput, setTextInput] = useState()

    return (
        <div style={{ padding: 30}}>
        <h1>Testing Crud</h1>
        <h3>What to do</h3>
        <h3>Create</h3>
        <Input 
            allowClear
            style={{ width: 500}} 
            onChange={(elements) =>{
            console.log(elements.target.value);
            setTextInput(elements.target.value)
        }}/>
        <Button onClick={() =>{
            setTodo([
            ...todo, textInput
            ])
        }}>Add</Button>
        <h3>List</h3>
        {todo?.map((data) =>{
            return (
            <li
                style={{ cursor: "pointer" }}
                onClick={() => {
                    const newData = todo.filter((filterData) => filterData !== data);
                    console.log(newData);
                    setTodo(newData);
                }}
            >
                {data}
            </li>
        );
        })}
    </div>
    );
};

export default CrudPage;