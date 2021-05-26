const App=()=>{

    const [products,setProducts]=React.useState([]);
    React.useEffect(()=>{
        fetchProducts();
    },[])

    function fetchProducts(){
        fetch('/api/products')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }
    return (
        <ul className="list-group">
       
        <li className="list-group-item">A second item</li>
        
      </ul>
    )
}

ReactDOM.render(<App/>,document.getElementById('app'));