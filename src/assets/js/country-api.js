
let url = "https://restcountries.com/v3.1/all";

let response = fetch(url)
    .then((res) => res.json())
    .then((data) => {

        let fullData = data;

        let store = '';
        fullData.map((val) =>{
            store += `<li class="d-flex align-items-center justify-content-start"><img src=${val.flags.png} alt=""><h5>${val.name.common}</h5></li>`
        });

        // let x = document.getElementById("country")
		// x.innerHTML = store;

    })


