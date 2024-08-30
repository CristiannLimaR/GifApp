import { useState } from "react";
import { useGif } from "../hooks/useGif";

//Funcional component
export const GifApp = () => {
  const [categoria, setCategoria] = useState("");
  const { handleGetGif, arregloGifs } = useGif();

  return (
    <>
      <div className="conteiner d-flex flex-row justify-content-center align-items-center m-5">
        <form
          className="d-flex"
          onSubmit={(e) => {
            handleGetGif(categoria, e);
          }}
        >
          <input
            className=" form-control"
            type="text"
            onChange={(e) => {
              setCategoria(e.target.value);
            }}
          />
          <input className=" btn btn-outline-success" type="submit"></input>
        </form>
      </div>
      <div className="d-flex flex-row justify-content-center row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        {arregloGifs.map(({ id, url }) => {
          return (
            <img key={id} src={url} className="rounded w-25" />
          );
        })}
      </div>
    </>
  );
};
