import React, {useEffect, useState} from 'react';
import {getData} from "./action";

function App(props) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setTimeout(()=>{
      let data = getData(query).then((res)=>{
        setData(res.data.hits)
      });
    },500)
  }, [query]);


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <form method="post">
            <div className="form-group">
              <label htmlFor="search"></label>
              <input
                type="text"
                name="search" id="search"
                className="form-control"
                placeholder=""
                aria-describedby="helpId"
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="col-md-12">
          <ul>
            <ShowListData datas={data}/>
          </ul>
        </div>
      </div>
    </div>

  );
}
const ShowListData = ({datas}) => {
  let listData = datas.map((data, index)=>{
    if(data.title){
      return <li key={index}>{data.title}</li>
    }
  })
  return(
    <>{listData}</>
  )
}
export default App;
