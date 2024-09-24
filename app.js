








// noakhali part

document.getElementById('donate-Noakhali').addEventListener('click',function(){
  const noakhaliBalance = parseFloat(document.getElementById('noakhali-balance').innerText);
  const inputValue = getInputFieldValueById('input-amount-noakhali');

   const result=  donateMoney(noakhaliBalance,inputValue);

 if(result){
   const {newBalance, remainingBalance } = result;
  document.getElementById('noakhali-balance').innerText =newBalance;
  document.getElementById('account-balance').innerText = remainingBalance;
  modal();
 }

});






// feni part

document.getElementById('donate-feni').addEventListener('click',function(){
  const feniBalance = parseFloat(document.getElementById('feni-balance').innerText);
  const inputValue = getInputFieldValueById('input-amount-feni');

 const result=  donateMoney(feniBalance,inputValue);

 if(result){
   const {newBalance, remainingBalance } = result;
  document.getElementById('feni-balance').innerText =newBalance;
  document.getElementById('account-balance').innerText = remainingBalance;
  modal();
 }

});




// quota part 
 document.getElementById('donate-quota').addEventListener('click',function(){
  const quotaBalance = parseFloat(document.getElementById('quota-balance').innerText);
  const inputValue = getInputFieldValueById('input-amount-quota');
  
  const result=  donateMoney(quotaBalance,inputValue);

 if(result){
   const {newBalance, remainingBalance } = result;
  document.getElementById('quota-balance').innerText =newBalance;
  document.getElementById('account-balance').innerText = remainingBalance;
  modal();
 }

});





// common function 

 function getInputFieldValueById(id){
       const inputValue = parseFloat(document.getElementById(id).value);
       document.getElementById(id).value='';
       return inputValue;
 }



// modal function

function modal(){
  const modal = document.getElementById('my_modal_1');
  modal.showModal();
 }





// donation calculation

function donateMoney(balance, donateAmount ) {
       
  const accountBalance = parseFloat(document.getElementById('account-balance').innerText);

   if(donateAmount > 0 && accountBalance >= donateAmount){
    const newBalance = balance + donateAmount;
   const remainingBalance = accountBalance - donateAmount;
     return {newBalance, remainingBalance }; 
   }else{
       alert('invalid input');
       return null;
   }  

}







// donation and history button functionality

 const historyBtn = document.getElementById('history-btn');
 historyBtn.addEventListener('click',function(){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');

   historyBtn.classList.add('bg-btn-color','hover:bg-btn-color');
   historyBtn.classList.remove('bg-white','text-home-color');

   donationBtn.classList.add('bg-white', 'text-home-color');
   donationBtn.classList.remove('bg-btn-color','hover:bg-btn-color')
 })


 const donationBtn = document.getElementById('donation-btn');
 donationBtn.addEventListener('click',function(){

   document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');

    historyBtn.classList.add('bg-white','text-home-color');
    historyBtn.classList.remove('bg-btn-color','hover:bg-btn-color');
 
    donationBtn.classList.add('bg-btn-color','hover:bg-btn-color');
    donationBtn.classList.remove('bg-white','text-home-color')
 })
