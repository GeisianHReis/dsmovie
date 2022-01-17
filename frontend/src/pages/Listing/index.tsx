import axios from "axios";
import MovieCards from "componentes/MovieCards";
import Pagination from "componentes/Pagination";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/request";
import {useState, useEffect} from "react";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=0`)
            .then(resposta => {
                const data = resposta.data as MoviePage;
                console.log(resposta.data);
                setPageNumber(data.number);
                
        }) 
    }, []);
    
   
    return (
        <>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCards />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCards />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCards />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCards />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCards />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCards />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCards />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCards />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Listing;