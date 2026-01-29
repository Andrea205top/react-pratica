import {useState} from 'react';
import axios from "axios";

function useAPI(){


    const [data, setData] = useState(null) // dati dell'api
    const [loading, setLoading] = useState(false) // loading state
    const [error, setError] = useState(null)

    const API_URL = "https://apigw-prep.grupporealemutua.it/gateway/cIAM/loginEndpoint";
    const API_KEY = "d26c4461-169a-4792-b277-d0d1c2204913";

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try{
            const response = await axios.get(API_URL, {
                headers: {
                    "Autorization": `Bearer ${API_KEY}`
                }
            });

            console.log("Dati ricevuti: ", response.data);
            setData(response.data)
        } catch (err: any) {
            console.error("Errore: ", err);
            setError(err.message || "Errore generico");
        } finally {
            setLoading(false);
        }


        return {
            data,
            loading,
            error,
            fetchData
        }
    }

} export default useAPI;