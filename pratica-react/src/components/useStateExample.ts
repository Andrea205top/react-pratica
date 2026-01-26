import {useCallback, useEffect, useState} from "react";

function useStateExample(valoreIniziale: number = 0){
    // Sintassi: const [valore, funzionePerAggiornare] = useState(valoreIniziale)

    const [count, setCount] = useState(valoreIniziale);

    const [salvataggioNumeri, setSalvataggioNumeri] = useState<string[]>([]); // rs deve sapere che tipo di array è


    useEffect(() => {
        console.log("dati salvati: ", salvataggioNumeri)
    }, [salvataggioNumeri]);

    const incrementa =() =>{
        console.log("incrementa: ", count)
        setCount(count + 1);
    }

    const decrementa=()=>{
        console.log("decrementa: ", count)
        setCount(count - 1)
    }

    const salvaNumero= useCallback((reset?: boolean)=>{
        if (reset) {
            setSalvataggioNumeri([])
            return
        }
        const numeroStringa = count.toString();
        const salvoDati = [...salvataggioNumeri, numeroStringa]
        console.log("devo salvare: ", salvoDati)

        setSalvataggioNumeri(salvoDati)
    }, [count])


    function reset(){
        console.log("reset counter")
        setCount(valoreIniziale);
    }

    return {
            count,
            incrementa,
            decrementa,
            salvaNumero,
            reset,

    }
}

export default useStateExample;
