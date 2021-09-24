import React,{useState,useEffect} from 'react'
import CountryCard from './Component/CountryCard'
const Country = () => {
    const [c,setC]=useState([])
    const getCountries = async ()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
        await  fetch("https://restcountries.com/v2/continent/asia", requestOptions)
            .then(response => response.json())
            .then((result) =>{setC(result)})
            .catch(error => console.log('error', error));
    }
    useEffect(()=>{
        getCountries()
    },[])
    return (
    <>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 tg">Project Country</h1>
                <p className="lead tg2">Data For Every Asian Country</p>
                <button type="button" className="btn btn-success" onClick={()=>{getCountries();console.log("clicked")}}>⟳</button>
            </div>
        </div>
        <div className="container row mx-auto">
            {c.length>0&&c.map((item,index)=>{return <CountryCard data={item} key={index} />})}
        </div>
    </>
    )
}
export default Country