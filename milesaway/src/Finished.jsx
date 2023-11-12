import Header from './Header.jsx';
import Footer from './Footer.jsx';
import {Box} from './Box.jsx';
import { useFetch, useFetchPut } from './useFetch.jsx';
import { useState, useEffect } from 'react';
import './styles/Finished.css';

function Erase(props) {
    useFetchPut("http://localhost:4000/" + props.endpoint, {"checked": false});
}

function ArrayErase(props) {
    let { data, isPending, error } = useFetch("http://localhost:4000/" + props.endpoint);
    return (
        <>
        {!error && !isPending && data && data.map(item => {
            console.log("ER-"+props.endpoint+item.id);
            return <Erase key={"ER-"+props.endpoint+item.id} endpoint={props.endpoint+"/"+item.id}/>;
        })}
        </>
    )
}

function Finished() {
    return (
    <>
        <Header/>
        <div id="successBox">
            <Box name="Sucesso!">
                <h1>Compra concluida</h1>
                <ArrayErase endpoint="flights"/>
                <ArrayErase endpoint="stays"/>
            </Box>
        </div>
        <Footer/>
    </>
    )

}

export default Finished;
