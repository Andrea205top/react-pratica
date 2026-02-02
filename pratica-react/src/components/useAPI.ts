import axios from "axios";

function useAPI(){


    const API_URL = "https://apigw-prep.grupporealemutua.it/gateway/cIAM/loginEndpoint";
    const API_KEY = "d26c4461-169a-4792-b277-d0d1c2204913";

    const fetchData = async () => {

        try { // provo a dalvare la risposta dell'api
            const response = await axios.get(API_URL,{
                headers: {
                    "Autorization": `Bearer ${API_KEY}`
                }
            });

            console.log("Dati: ", response.data);

        return {
            data: response.data,
            error: null
        };
        } catch (err: any) {
            console.log("error", err);

            return {
                data: null,
                error: err.message || "Errore generico"
            }
        }
    }

    return {
        pApi:{
            fetchData,
        }
    }

} export default useAPI;