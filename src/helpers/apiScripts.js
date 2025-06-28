import axios from "axios";

async function pullAllPokeMon(setError, setApiData, toggleLoading, apiLink) {
    setError("");
    toggleLoading(true);

    try {
        const response = await axios.get(apiLink
        );
        setApiData(response.data);
    } catch (err) {
        console.error(err);
        setError("Er ging iets fout gegaan bij het ophalen van de data.");
    } finally {
        toggleLoading(false);
    }
}

export default pullAllPokeMon;