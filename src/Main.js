import { useEffect, useState } from "react";
import Comp from "./Comp";

function Main(props) {
  const [aticles, setAticles] = useState([]);
    const updateNews =()=>{
      const apiKey = process.env.React_App_News_Api_Key;
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&sortBy=popularity&category=${props.category}&apiKey=${apiKey}&pageSize=${props.pageSize}`;
      let req = new Request(url);
      fetch(req).then((response)=>response.json()).then((data)=>{
        setAticles(data.articles);
        console.log(aticles);
      })
    }
    useEffect(() => {
      updateNews(); 
      // eslint-disable-next-line
  }, [])
  return (
    <>
      {aticles.map((aticle)=>{
        return <Comp heading ={aticle.title?aticle.title:''} author = {aticle.author} date = {aticle.publishedAt} newsMedia={aticle.source.name} description = {aticle.description?aticle.description:''} link = {aticle.url} image = {aticle.urlToImage}/>
      })}
    </>
  );
}
export default Main;
