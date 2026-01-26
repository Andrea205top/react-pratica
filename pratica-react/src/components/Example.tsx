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
            <button onClick={decrementa} style={{ marginLeft: '10px' }}>Decrementa</button>
            <button onClick={()=> salvaNumero()} style={{ marginLeft: '10px' }}>Salva numero</button>
            <button onClick={()=> salvaNumero(true)} style={{ marginLeft: '10px' }}>Reset numeri</button>
            <button onClick={reset} style={{ marginLeft: '10px' }}>Reset</button>
        </div>
    );
}

export default Example;