import { useEffect, useState } from "react";
import Comp from "./Comp";
import Panel from "./Panel";

function Main() {
  const [jsonData, setjsonData] = useState([]);
  const getData = () => {
    // const options = {
    // 	method: 'GET',
    // 	headers: {
    // 		'X-RapidAPI-Key': '848dbc1e9cmsha2062b22ceb6cc6p154580jsn908b37a658b4',
    // 		'X-RapidAPI-Host': 'google-news1.p.rapidapi.com'
    // 	}
    // };
    // fetch('https://google-news1.p.rapidapi.com/top-headlines?country=US&lang=en&limit=50', options)
    // 	.then(response => response.json())
    // 	.then(response => {
    // 	setjsonData(response.articles)
    //     })
    // 	.catch(err => console.error(err));
  };
  useEffect(() => {
    getData();
    console.log(jsonData);
  }, []);
  return (
    <div style={{ margin: "150px 0px 0px 0px" }}>
     <Panel />
      <Comp />
      <Comp />
    </div>
  );
}
export default Main;
