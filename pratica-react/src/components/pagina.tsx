import Example from "./Example.tsx";

interface PaginaProps {
    numeroPagina: number;
    count: number;
    incrementa: () => void;
    decrementa: () => void;
    salvaNumero: (reset?: boolean) => void,
    reset: () => void;
    tornaIndietro: () => void;
}

function Pagina({numeroPagina, count, incrementa, decrementa, reset, salvaNumero, tornaIndietro}: PaginaProps){

    return(
        <div style={{ padding: '100px', border: '3px solid blue', borderRadius: '20px' }}>
            <button onClick={tornaIndietro}>Welcome page</button>
            <h2>Pagina {numeroPagina}</h2>
            <p>Counter</p>

            <Example
                count={count}
                incrementa={incrementa}
                decrementa={decrementa}
                reset={reset}
                salvaNumero={salvaNumero}

            />
        </div>
    );

}
export default Pagina;