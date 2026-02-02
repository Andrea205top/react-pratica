import Pagina from "./pagina.tsx";
import useStateExample from "./useStateExample.ts";
import usePagine from "./usePagine.ts";
import Header from "./header.tsx";
import Footer from "./footer.tsx";

import useAPI from "./useAPI.ts";

document.title = "Welcome page"; // componente padre
function Welcome() {

    const { count, incrementa, decrementa, reset, salvaNumero} = useStateExample(0);

    const { pState } = usePagine()
    const { paginaAttiva, onPagChangeClick } = pState;

    const { pApi } = useAPI();
    const { fetchData } = pApi;

    const apiClick = async () => {
        console.log("Bottone api click");

        const chiamata = await fetchData();

        if (chiamata.error) {
            console.log(chiamata.error);
        } else {
            console.log(chiamata.data);
        }
    }

    if (paginaAttiva == 0){
        return (
            <div>
                {/* Header anche in Welcome */}
                <div style={{ padding: '50px' }}>
                    <h1>Benvenuto!</h1>
                </div>

                <button onClick={apiClick}>API</button>

                {/* Contenuto Welcome */}
                <Header
                    paginaAttiva={paginaAttiva}
                    onPagChangeClick={onPagChangeClick}
                />
                <Footer/>
            </div>
        );
    }

    return (
        <div>
            {/* Header sempre visibile */}
            <Header
                paginaAttiva={paginaAttiva}
                onPagChangeClick={onPagChangeClick}
            />

            {/* Contenuto della pagina */}
            <Pagina
                numeroPagina={paginaAttiva}
                count={count}
                incrementa={incrementa}
                decrementa={decrementa}
                reset={reset}
                tornaIndietro={() => onPagChangeClick(0)}
                salvaNumero={salvaNumero}
            />
            <Footer/>
        </div>
    )
}

export default Welcome;