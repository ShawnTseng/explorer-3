const beautify = (data: object) => {
    return JSON.stringify(data, null, '\t');
}

export default beautify;