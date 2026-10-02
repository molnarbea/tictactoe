import Elem from "./Elem";
import "./jatekTer.css"

interface ListaProps{
    lista: string[],
    kattintasKezelo:(index:number)=>void
}

export default function JatekTer({lista,kattintasKezelo}:ListaProps){
    return(
        <>
        <div className="tarolo">
            {
                lista.map((e,i)=>{
                    return <Elem elem={e} key={i} index={i} kattintasKezelo={kattintasKezelo}/>
                })
            }
        </div>
        </>
    )
}