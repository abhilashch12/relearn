function Productcard({name,price,instock}){


    return(
        <div>
            <p>name:{name}</p>
            <p>price:{price}</p>
            {instock===true?<p style={{color:"green"}}>instock</p>:<p style={{color:"red"}}>out of stock</p>}
        </div>
    )
}
export default Productcard;