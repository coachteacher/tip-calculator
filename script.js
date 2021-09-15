 window.onload = function(){
        
        const tipBtn = document.querySelectorAll('.operator');
        const bill = document.getElementById('bill');
        const ppl = document.getElementById('numPpl');
        const varTip = document.getElementById('varPct');
        const displayTip = document.getElementById('totalTip');
        const displayTotal = document.getElementById('totalPerPerson');
        const reset = document.getElementById('reset');
        const error =document.getElementById('numError');
        let tipPercentage;
      
        //Calculate Tip
        function calculateTip(e){
            tipPercentage = e.target.value;
            tipPercentage = parseFloat(tipPercentage / 100).toFixed(2);
            calculateBill();
        };
     
        //Calculate Bill total
        function calculateBill(){
            
            if(ppl.value < 1){
            error.style.visibility = "visible";
            }else if(bill.value > 0 && ppl.value > 0){
            error.style.visibility = "hidden";
            let total = bill.value / ppl.value;
            let tipTotal = tipPercentage * total;
            let fullAmt = total + tipTotal;
                if(tipTotal > 0){
                displayTip.innerText = "$" + parseFloat(tipTotal).toFixed(2);
                displayTotal.innerText = "$" + parseFloat(fullAmt).toFixed(2);
                }
            }
        };
        //Reset
        function resetBill(){
            bill.value = '';
            ppl.value = '1';
            varTip.value = '';
            displayTip.innerHTML = "$0.00"
            displayTotal.innerHTML = "$0.00"
        }
        
        //Event Listeners
        tipBtn.forEach(tip => {
            tip.addEventListener('click', calculateTip);
        });
        bill.addEventListener('input', calculateBill);
        ppl.addEventListener('input', calculateBill);
        varTip.addEventListener('input', calculateTip);
        bill.addEventListener('click', () =>{
            bill.value = '';
        })
        ppl.addEventListener('click', () =>{
            ppl.value = '';
        })
        varTip.addEventListener('click', () =>{
            varTip.value = '';
        })
        reset.addEventListener('click', resetBill);
     
     
    
};