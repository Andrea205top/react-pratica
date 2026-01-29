import {useState} from 'react';
import axios, {type AxiosResponse } from "axios";

const useAPI= ()=> { // T rende l'hook più generico possibile

    interface ApiState<T> {
        data: T | null;
        loading: boolean;
        error: string | null;
    }

    const [apiState, setApiState] = useState<ApiState<ApiState<any>>>({
        data: null,
        loading: false,
        error: null
    });

    const API_URL = "https://apigw-prep.grupporealemutua.it/gateway/cIAM/loginEndpoint";
    const API_KEY = "d26c4461-169a-4792-b277-d0d1c2204913";

    const fetchData = async () => {

        // faccio partire il collegamneto
        setApiState({
            data: null,
            loading: true,
            error: null
        });

        try{
            // faccio la chiamata
            const response: AxiosResponse<ApiState<any>> = await axios.get(API_URL, {
                    headers: {
                        "Authorization": `Bearer ${API_KEY}`
                    }
            });

            // salvo i dati
            console.log("Dati ricevuti:", response.data);
            setApiState({
                data: response.data,
                loading: false,
                error: null
            });

        } catch (err: any){
            console.error("Error:", err);
            setApiState({
                data: null,
                loading: false,
                error: err.message || "Errore generico"
            });
        }
    }

    return {
        apiState: {
            data: apiState.data,
            loading: apiState.loading,
            error: apiState.error,
        },
        fetchData
    };

}

export default useAPI;