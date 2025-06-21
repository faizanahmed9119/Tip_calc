function tip(){
    const num1 = document.getElementById('total').value;
    const num2 = document.getElementById('perc').value;

    const val = Number(num1) * (Number(num2)/100);

    document.getElementById('result').textContent = `Result: ${val}`;
}