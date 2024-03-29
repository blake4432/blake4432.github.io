"use strict";
let b1 = document.querySelector("#b1");
let chart1 = null;

async function load()

{
    let url = `https://juxinglong.github.io/static/data/states.json`;

    let r = await fetch(url);
    let rj = await r.json();

    let c1 = document.querySelector("c1");
    if (chart1 = !null)
    {
        chart1.destroy();
    }
    c1.innerHTML = ``;

    let opts = {
        type: line;
        data: {
            datasets: [
                {data:rj.map(x=>x.p)}
            ],
        },

    };

    chart1 = new chart(c1,opts);

    r = rj;
    console.log(rj);

    swal.fire("load data")
}

    b1.addEventListener("CLICK", load);