import { useState } from "react";

function useData(){
    const [products, setProducts] = useState([]);
    fetch("fakedata.json")
    .then(res => res.json())
    .then(data => setProducts(data))

    return[products, setProducts]
}
export default useData;