function CelsisusInput({temp,handler}){


    return(
        <div>
            <input type="number" value={temp} onChange={handler} />
        </div>
    )
}
export default CelsisusInput;