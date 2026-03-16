import { useState } from "react"


export default function Practice(){
    const [arr, setArr] = useState(["Aryan","Anshul","Deepak"]);
    const [ele,setEle] = useState("");
    const [edit, setEdit] = useState(null);

    function handleSubmit(e){
        e.preventDefault();
        if(edit !== null){
            const updatearr = arr.map((val,idx) =>idx === edit ? ele : val );
            setArr(updatearr);
            setEle("");
            setEdit(null);
            
        }
        else setArr([...arr,ele]);
        setEle("");
    }
    function handleDelete(index){
        const updateArray = arr.filter((_,indexEle) => index!==indexEle);
        setArr(updateArray);
    }

    function handleEdit(index){
        setEle(arr[index]);
        setEdit(index);
    }
    return (
        <div style={{textAlign:"center"}}>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Name"  value={ele} onChange={(e) => setEle(e.target.value)}/>
            <button type="Submit">{edit !== null ? "edit" : "update"}</button>
        </form>
       {
        arr.map((item, index) => (
           <div key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleEdit(index)}>Edit</button>
           </div>
        ))
       }
        </div>
    )
}