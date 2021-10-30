(async () => {
    const holamundo = async (...param) => {

        param.forEach((p) => {
            console.log(p);
        })
    }
    await holamundo('Hola', 'Mundo', 'tus');

})();
