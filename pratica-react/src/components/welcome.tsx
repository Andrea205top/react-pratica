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
        console.log("Bottone api cliccato");

        // mostro overlay
        const overlay = document.createElement('div');
        overlay.id = 'overlayId';
        overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5);
        z-index: 9999
        `;
        overlay.innerHTML = '<p style="color: white; text-align: center; margin-top: 300px;">Caricamento...</p>';
        document.body.appendChild(overlay);

        console.log("Attendi...");

        await new Promise(resolve => setTimeout(resolve, 1000));

        // chiamo api
        const chiamata = await fetchData();

        const removeOverlay = document.getElementById('overlayId');
        if (removeOverlay) removeOverlay.remove();

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

            <div style={{ padding: '50px' }}>


                <h2>Test API</h2>

                <button onClick={apiClick}>Chiama API</button>
            </div>

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