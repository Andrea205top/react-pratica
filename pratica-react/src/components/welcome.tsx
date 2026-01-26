import Pagina from "./pagina.tsx";
import useStateExample from "./useStateExample.ts";
import usePagine from "./usePagine.ts";

document.title = "Welcome page"; // componente padre
function Welcome() {

    const { count, incrementa, decrementa, reset, salvaNumero} = useStateExample(0);

    const { pState } = usePagine()
    const { paginaAttiva, onPagChangeClick } = pState;

//    const { pagina1, onPag1Click} = p1;
//    const { pagina2, onPag2Click} = p2;
//    const { pagina1, pagina2, pagina3, onPagChangeClick } = pState;


    if (paginaAttiva === 1){
        return <Pagina numeroPagina={1}
                count = {count}
                incrementa = {incrementa}
                decrementa={decrementa}
                reset={reset}
                salvaNumero={salvaNumero}
                tornaIndietro={() => onPagChangeClick(0)}
                />
        //QUA FINISCE
    }

    if (paginaAttiva === 2) {
        return <Pagina numeroPagina={2}
            count={count}
            incrementa={incrementa}
            decrementa={decrementa}
            reset={reset}
            salvaNumero={salvaNumero}
            tornaIndietro={() => onPagChangeClick(0)}
        />
        //QUA FINISCE
    }
    if (paginaAttiva === 3) {
        return <Pagina numeroPagina={3}
            count={count}
            incrementa={incrementa}
            decrementa={decrementa}
            reset={reset}
            salvaNumero={salvaNumero}

            tornaIndietro={() => onPagChangeClick(0)}
        />
        //QUA FINISCE
    }

    return(
        <div style={{ padding: '50px' }}>
            <h1>Welcome Page</h1>
            <button onClick={() =>onPagChangeClick(1)}>Vai a Pagina 1</button>
            <button onClick={() =>onPagChangeClick(2)}>Vai a Pagina 2</button>
            <button onClick={() =>onPagChangeClick(3)}>Vai a Pagina 3</button>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>

            </p>
        </div>
    );
}

export default Welcome;