import Example from "./Example.tsx";
import Footer from "./footer.tsx";


interface PaginaProps {
    numeroPagina: number;
    count: number;
    incrementa: () => void;
    decrementa: () => void;
    salvaNumero: (reset?: boolean) => void,
    reset: () => void;
    tornaIndietro: () => void;
}

function Pagina({numeroPagina, count, incrementa, decrementa, reset, salvaNumero}: PaginaProps){

    return(
        <div style={{ padding: '100px', border: '3px solid blue', borderRadius: '20px' }}>
            <h2>Pagina {numeroPagina}</h2>

            <Example
                count={count}
                incrementa={incrementa}
                decrementa={decrementa}
                reset={reset}
                salvaNumero={salvaNumero}

            />

            <Footer />
        </div>
    );

}
export default Pagina;