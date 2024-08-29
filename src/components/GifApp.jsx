import { useState } from "react"
import { useGif } from "../hooks/useGif"

//Funcional component
export const GifApp = () => {
    const [categoria, setCategoria] = useState('')
    const { handleGetGif, arregloGifs } = useGif()

    return (
        <>
            <div className="conteiner d-flex flex-row justify-content-center">
                <form onSubmit={(e)=>{handleGetGif(categoria,e)}}>
                <input className="d-flex flex-row form-control" type="text" onChange={(e)=>{setCategoria(e.target.value)}} />
                <input className=" d-flex flex-row btn btn-outline-success"type="submit"></input>
                </form>
                
                
            </div>

            {
                arregloGifs.map(({ id, url }) => {
                    return (
                        <img key={id} src={url} className="img-fluid rounded m-5 d-block" />
                    )
                })
            }
        </>
    )
}