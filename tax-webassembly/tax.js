import init, {calculate_tax} from "./pkg/tax_webassembly";

async function run() {
    await init()
    function calculateTax() {
        const income = parseFloat(document.getElementById("income").value)
        const tax = calculate_tax(income)
        document.getElementById("tax").innerText = `Tax: $${tax.toFixed(2)}`
    }
    Document.getElementById("calculateButton").addEventListener("click", calculateTax)
}

run()