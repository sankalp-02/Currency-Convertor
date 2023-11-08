
const populate = async (amount, Currency) => {
    let firstString = ""

    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_0M16hah5r9tRemZC3u3stPB0C7hj7daAmTkaOPiF&base_currency=" + Currency
    let response = await fetch(url)
    let rJson = await response.json()
    document.querySelector(".output").style.display="block"



    for (i of Object.keys(rJson["data"])) {

        firstString += `<tr>
                        <td>${i}</td>
                        <td>${rJson["data"][i]["code"]}</td>
                        <td>${rJson["data"][i]["value"] * amount}</td>
                    </tr>`


    }

    const tableBody = document.querySelector("tbody");

    tableBody.innerHTML = firstString;




}


// console.log("Hello Javatpoint");

const button = document.querySelector('.button')
button.addEventListener("click", (e) => {
    e.preventDefault()
    // console.log("Button is clicked")
    const amount = parseInt(document.querySelector("input[name='amount']").value);
    const Currency = document.querySelector("select[name='Currency']").value;
    populate(amount, Currency)
})





