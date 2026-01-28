interface Example{
    count: number,
    incrementa: () => void,
    decrementa: () => void,
    salvaNumero: (reset?: boolean) => void,
    reset: () => void
}
function Example({ count, incrementa, decrementa, reset, salvaNumero }: Example ){
    return(
        <div style={{padding: '20px', border: '2px solid lightblue', marginTop: '20px'}}>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
                numero: {count}
            </p>
            <button onClick={incrementa}>Incrementa</button>
            <button onClick={decrementa}>Decrementa</button>
            <button onClick={()=> salvaNumero()}>Salva numero</button>
            <button onClick={()=> salvaNumero(true)}>Reset numeri</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Example;