import dataGame from "./data/dataGame";

function criateURL(date:dataGame) {
    const params = new URLSearchParams();
    for (let [key, val] of Object.entries(date)) {
        params.append(key, `${val}`.replace(/\s/g, '%20'));
    }
    const query = String(params);
    return query;

}
export default criateURL
