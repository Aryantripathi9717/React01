import { use, useState } from "react"

export default function UseEffect(){
    const [names, setNames] = useState([
        "Aryan" ,"Deepak","Arpit","Ayush"
    ])
    const [name , setName] = useState("");
    const [edit , setEdit] = useState(null);

    function handleSubmit(e){
        e.preventDefault();
        if(name==="") return; // so that it doesn't have blank value
        if(names.some(prev => prev.toLowerCase() === name.toLowerCase())){ 
            setName("")
            alert("Name already Exists"); // for double
            return;
        } // some return bool if atleast one match the condition 
            let flag = 0;
            
            if(edit!==null){
                setNames(prev => prev.map((ele,index)=>
                    edit===index ? name : ele
                ));
                setEdit(null);
            }else setNames(prev => [...prev,name]);

            setName("")
        
    }

    function handleDelete(index){
        setNames(prev => prev.filter((ele,i)=> i!==index))
    }

    function handleEdit(index){
        setEdit(index);
        setName(names[index]);
    }
    function handleUpperCase(index){
        setNames(prev => prev.map((ele,i)=>
            i===index ? ele.toUpperCase() : ele
        ))
    }
    return (
        <div>
            {/* <h1>hello</h1> */}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)} />
                <button>{edit !== null ? "Update" : "Add Name"}</button>
            </form>
            {
                names.map((ele,index)=>
                    <div key={index} style={{display:"flex"}}>
                        <p>{ele}</p> &nbsp;&nbsp;&nbsp;
                        <button onClick={()=>handleDelete(index)}>Delete</button>
                        <button onClick={()=>handleEdit(index)}>Edit</button>
                        <button onClick={()=>handleUpperCase(index)}>UpperCase</button>
                    </div>
                )
            }
        </div>
    )
}