import axios from "axios";

const apiRetrieveAllLink = "https://pokeapi.co/api/v2/pokemon/";
const apiSpecificItemLink = "https://pokeapi.co/api/v2/pokemon/1/";
const apiHeaders = {};

/*---api pull all------------------------------------------------------------------------------------------------------*/
async function pullAllPokeMon(setError, setApiData, toggleLoading) {
    setError("");
    toggleLoading(true);

    try {
        const response = await axios.get(apiRetrieveAllLink, {
            headers: apiHeaders,
        });
        console.log(response);
        setApiData(response.data);
    } catch (err) {
        console.error(err);
        setError("Er ging iets fout gegaan bij het ophalen van de data.");
    } finally {
        toggleLoading(false);
    }
}

/*---api pull specific ------------------------------------------------------------------------------------------------------*/
export async function pullSpecificPokeMon(setError, setApiData, toggleLoading, apiLink) {
    setError("");
    toggleLoading(true);

    try {
        const response = await axios.get(apiLink, {
            headers: apiHeaders,
        });
        console.log(response);
        setApiData(response.data);
    } catch (err) {
        console.error(err);
        setError("Er ging iets fout gegaan bij het ophalen van de data.");
    } finally {
        toggleLoading(false);
    }
}

/*---end of api actions ------------------------------------------------------------------------------------------------------*/
export default pullAllPokeMon;