
export const fetchDiseases = async (val) => {
    const response = await fetch(`https://clinicaltables.nlm.nih.gov/api/disease_names/v3/search?terms=${val}`);
    const result = await response.json();
    const resultNames = result[3].length > 0 ? result[3].map((elem) => elem[0]) : [];
    
    return resultNames
}