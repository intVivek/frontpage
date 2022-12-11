const getData = () => {
    return new Date().toISOString().slice(0, 19).replace('T', ' ');
}

export default getData