import {useEffect, useState} from "react";

function usePagine() {

 //   const [pagina1, setPagina1] = useState(false);
 //   const [pagina2, setPagina2] = useState(false);
 //   const [pagina3, setPagina3] = useState(false);

    const [count, setCount] = useState(0);

    const [paginaAttiva, setPaginaAttiva] = useState(0);

/* per ogni pagina bisogna aggiungere un &&
    useEffect(() => {

        if (pagina1 == false && pagina2 == false && pagina3 == false) {
            console.log("non sono in nessuna pag")
            return
        };

        setCount(count + 1)

    }, [pagina1, pagina2, pagina3]);

 */

    useEffect(() => {
        if (paginaAttiva === 0) {
            console.log("Sono in Welcome");
            return;
        }

        console.log(`Sono in Pagina ${paginaAttiva}`);
        setCount(count + 1);
    }, [paginaAttiva]);

    useEffect(() => {
        console.log("numPagVariation:", count)

    }, [count]);

/* funziona ma per ogni pagina che si aggiunge bisogna aggiungere un case
    const onPagChangeClick = (pagNum: number) => {


        switch (pagNum) {
            case 1:
                console.log("case 1, PAG 1", pagina1);
                setPagina1(true)
                break;

            case 2:
                console.log("case 2, PAG 2", pagina2);
                setPagina2(true)
                break;
            case 3:
                console.log("case 3, PAG 3", pagina3);
                setPagina3(true)
                break;

            case 0:
                console.log("case 0");
                setPagina1(false)
                setPagina2(false)
                setPagina3(false)
                break;
            default:
                console.log("nessun caso ricevuto");
        }
        console.log("PAG 1 FINE SWITCH: ", pagina1)
        console.log("PAG 2 FINE SWITCH: ", pagina2)
        console.log("PAG 3 FINE SWITCH: ", pagina3)
    }
*/

    const onPagChangeClick = (pagNum: number) => {
        console.log(`Navigazione a pagina: ${pagNum}`);

        if (pagNum >= 0 && pagNum <= 10) {
            setPaginaAttiva(pagNum);
        } else {
            console.error("Numero pagina non valido:", pagNum);
        }
    }

    return{
        pState:{
            // pagina1,
            // pagina2,
            // pagina3,
            paginaAttiva,
            onPagChangeClick
        },
    }

}
export default usePagine;