import {useState,useEffect,useMemo} from "react";
import SkeletonCard from "./SkeletonCard";
import EmptyState from "./EmptyState";
function FetchPosts(){
    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(true);
    const[err,setErr]=useState();
    const[search,setSearch]=useState("");
    const[page,setPage]=useState(1);
    const postperpage=10;
    
    useEffect(()=>{
        async function fecthuser(){
            try{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            if(!response.ok){
                throw new Error("something went wrong");
            }
            const data=await response.json();
            setData(data);
            }
            catch(err){
                setErr(err.message);
            }
            finally{
                setLoading(false);
            }
        }
        fecthuser();
    },[])
    function handler(e){
        setSearch(e.target.value);
        setPage(1);
    }
    const filteredposts=useMemo(()=>{
        return data.filter((post)=>(post.title.toLowerCase().includes(search.toLowerCase())));
    },[data,search])
    const totalpages = Math.ceil(filteredposts.length/postperpage);
    const currentposts = filteredposts.slice((page-1)*postperpage,page*postperpage)
    if(loading){
        return (
            <div>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
            </div>
        )
    }
    if(err){
        return <p>{err}</p>
    }
    if(data.length===0){
        return (<EmptyState icon="😭" message="no posts yet"  />)
    }
    return(
        <div>
        <input value={search} type="text" onChange={handler} />
        {(filteredposts.length===0 && search.trim()!=="")?<EmptyState icon="😂" message={`no result for "${search}"`} onText="clear search" onAction={()=>(setSearch(""))} />:
         <ul>
            {currentposts.map((post)=><li key={post.id}>{post.title}</li>)}
         </ul>
}
         <button onClick={()=>(setPage(page-1))} disabled={page===1}>prev</button>
         <span>{page} of {totalpages}</span>
         <button onClick={()=>(setPage(page+1))} disabled={page===totalpages}>nxt</button>
        </div>
    )
}
export default FetchPosts;