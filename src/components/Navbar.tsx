const Navbar=()=>{
    return(
        <nav style={{display:"flex",backgroundColor:"#084298",color:"white",width:"100%",height:"110px"}}>
            <h1 style={{padding:"1.5%"}}> 🍔 My Restaurent App</h1> 
            <ul style={{display:"flex",listStyle:"none",gap:"20px",padding:"3%",marginLeft:"auto"}}>
                <li>Home</li>
                <li>Menu</li>
                <li>About-us</li>
            </ul>
        </nav>
            
        
    )
}
export default Navbar