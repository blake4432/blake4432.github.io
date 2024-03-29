"use strict";

let r = null; 
let chart2 = null;
let opts = {
    type: "pie",
    data: {
        labels:rj.map(x=>x.lg) ,
        datasets: [{data:rj.map(x=>x.n), label:"number",},]

    },


};
if (chart2!=null)
{
    chart2.destroy()

}
c2.innerHTML = ``;
chart2 = new chart(c2, opts)
opts = {
    targets: [],
    rotate: {value:60,duration:3000,},

};
anime(opts);

let b2 = document.querySelector("#b2");

async function showc()
{
    let url = `https://juxinglong.github.io/static/HW/hw6/MIS3033.json`

    let r = await fetch(url);

    let rj = await r.json();

    let c2 = document.querySelector("#C2");

    r = rj;

    console.log(rj);
}

b2.addEventListener("click",showc);