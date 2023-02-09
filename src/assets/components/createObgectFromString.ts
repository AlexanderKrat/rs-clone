function createObgectFromString(params:string) {
    let obj = JSON.parse('{"' + params.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
        (key, value) => {
            return key === "" ? value : decodeURIComponent(value)
        })
        
    return obj
}


export default createObgectFromString