import { useState,useEffect } from "react"
import Card from './Card';
export default function NewsCall(){
    const [news,setNews] = useState([]);
    const [error,setError] = useState("");
    const [loading,setLoading] = useState(true);
    const [index,setIndex] = useState(0)
    const [search , setSearch] = useState("tesla");
    const [currentPage,setCurrentPage] = useState(1);

    const itemperpage = 6;
    
    
    function handleNextClick(){
        setIndex(prev => (prev+1)%news.length);
    }
    function handlePreviousClick(){
        if(index!=0)
        setIndex(prev => prev-1);
    }

    function fetchData(){
        fetch(`https://newsapi.org/v2/everything?q=${search}&from=2026-02-28&sortBy=publishedAt&apiKey=bc92c988bfd84fe99263aaad71b07f77`)
        .then((response)=> response.json())
        .then(data =>{
            setNews(data.articles);
            setLoading(false);
            setSearch("");
            setCurrentPage(1);
        })
        .catch(()=>{
            setError("failed to Load News");
            setLoading(false);
        })
        
    }

    
    useEffect(()=>{
        fetchData();
    },[])

    const lastindex = currentPage*itemperpage;
    const firstindex = (currentPage-1)*itemperpage;
    const currentnews = news.slice(firstindex,lastindex);

    const totalPages = Math.ceil(news.length/itemperpage);

    if(loading) return <h2>Loading...</h2>
    if(error) return <h2>{error}</h2>
    if(news.length===0) return <h2>No news Found</h2>

return (
    <div>
        <form onSubmit={fetchData}>
            <input style={{width:"300px", height:"30px", border: "2px solid black", borderRadius:"6px"}} type="text" placeholder="Search for news" value={search} onChange={(e) => setSearch(e.target.value)}/>

        <button style={{border:"2px solid black", width:"100px", margin:"0px 7px", height:"30px",borderRadius:"10px"}} onClick={fetchData} className="">Search</button>
        </form>



        <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", padding: "16px"}}>

             {/* in this we can search on index base  */}
            {/* {search !== "" ? (
                <Card 
                    author={news[search]?.author || "Unknown"} 
                    description={news[search]?.description || "No description"} 
                    img={news[search]?.urlToImage} 
                    handleNextClick={handleNextClick}
                    handlePreviousClick={handlePreviousClick}
                />
            ) : (
                news.map((data, i) => (
                    <Card 
                        key={i}
                        author={news[i]?.author || "Unknown"} 
                        description={news[i]?.description || "No description"} 
                        img={news[i]?.urlToImage} 
                        handleNextClick={handleNextClick}
                        handlePreviousClick={handlePreviousClick}
                    />
                ))
            )} */}

            {/*  this is for different apicall like putting in input value {tesla and apple} */}

            {
                currentnews.map((data, i) => (
                    <Card 
                        key={i}
                        // author={news[i]?.author || "Unknown"} 
                        // description={news[i]?.description || "No description"} 
                        // img={news[i]?.urlToImage} 
                        author={data?.author || "Unknown"}
                        description={data?.description || "No description"}
                        img={data?.urlToImage}
                        handleNextClick={handleNextClick}
                        handlePreviousClick={handlePreviousClick}
                    />
                ))
            }
        </div>

        <div style={{ textAlign: "center", margin: "40px" }}>
                <button
                    onClick={() => setCurrentPage(prev => prev - 1)}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>

                <span style={{ margin: "0 10px" }}>
                    Page {currentPage} of {totalPages}
                </span>

                <button
                    onClick={() => setCurrentPage(prev => prev + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>

            </div>
    </div>
);
}


