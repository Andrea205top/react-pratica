import Pagina from "./pagina.tsx";
import useStateExample from "./useStateExample.ts";
import usePagine from "./usePagine.ts";
import Header from "./header.tsx";
import Footer from "./footer.tsx";

document.title = "Welcome page"; // componente padre
function Welcome() {

    const { count, incrementa, decrementa, reset, salvaNumero} = useStateExample(0);

    const { pState } = usePagine()
    const { paginaAttiva, onPagChangeClick } = pState;

//    const { pagina1, onPag1Click} = p1;
//    const { pagina2, onPag2Click} = p2;
//    const { pagina1, pagina2, pagina3, onPagChangeClick } = pState;

    if (paginaAttiva == 0){
        return (
            <div>
                {/* Header anche in Welcome */}
                <div style={{ padding: '50px' }}>
                    <h1>Benvenuto!</h1>
                </div>

                {/* Contenuto Welcome */}
                <Header
                    paginaAttiva={paginaAttiva}
                    onPagChangeClick={onPagChangeClick}
                />
                <Footer />
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
        </div>
    )
}

export default Welcome;