import dataGame from "./data/dataGame";

function criateURL(date:dataGame) {
    const params = new URLSearchParams();

    for (let [key, val] of Object.entries(date)) {
        params.append(key, `${val}`);
    }
    const query = String(params);
    console.log(query);
    return query;
  
}
export default criateURL