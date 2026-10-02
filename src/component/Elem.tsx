import "./elem.css";
interface ElemProps{
    elem: string,
    index: number,
    kattintasKezelo:(index:number)=>void
}

export default function Elem({elem,index,kattintasKezelo}:ElemProps){
        return(
            <>
                
                <button onClick={()=>{kattintasKezelo(index)}}>{elem}</button>
            
            </>
        )
}