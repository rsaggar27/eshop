import React, { useEffect , useState} from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
const Home = () => {
  const url='https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches'
  const [data, setData] = useState([{}])
  useEffect(()=>{
    axios.get(url).then((resp)=>{
      console.log(resp.data.data.data)
      setData(resp.data.data.data);
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <div>
      {data.map((item,index)=>{
        return (<div key={index} >
          <ProductCard item={item} />
        </div>)
      })}
    </div>
  )
}

export default Home