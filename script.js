function resultKeliling() {
    // Get input keliling
    const alasKeliling = document.querySelector("#keliling-alas");
    const alasKel = alasKeliling.value;

    //execute
    const execute = alasKel * 3;

    //print-head
    const printH2 = document.querySelector(".result-head")
    printH2.innerHTML = "Hasil Perhitungan Keliling";

    // print-result
    const printResult = document.querySelector(".result")
    printResult.innerHTML = execute;
}


function resultLuas() {
    // Get input alas luas
    const alasLuas = document.querySelector("#luas-alas");
    const alasL = alasLuas.value;

    // Get input tinggi luas
    const tinggiLuas = document.querySelector("#luas-tinggi");
    const tinggiL = tinggiLuas.value;

    //execute
    const execute =(alasL * tinggiL) / 2;

    //print-head
    const printH2 = document.querySelector(".result-head")
    printH2.innerHTML = "Hasil Perhitungan Luas";

    // print-result
    const printResult = document.querySelector(".result")
    printResult.innerHTML = execute;
}
