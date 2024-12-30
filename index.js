function helloNpm() {
    const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
        }).format(number);
    }

    rupiah(20000)
}

module.exports = helloNpm