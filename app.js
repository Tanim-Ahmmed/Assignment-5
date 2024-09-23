 
 const accountBalance = parseFloat(document.getElementById('account-balance').innerText);


 const feniAmount =parseFloat (document.getElementById('input-amount-feni').value);
 const feniBalance = parseFloat(document.getElementById('feni-balance').innerText);

 const quotaAmount =parseFloat (document.getElementById('input-amount-quota').value);
 const quotaBalance = parseFloat(document.getElementById('quota-balance').innerText);


 document.getElementById('donate-Noakhali').addEventListener('click',function(){
   const accountBalance = parseFloat(document.getElementById('account-balance').innerText);
   const noakhaliAmount =parseFloat (document.getElementById('input-amount-noakhali').value);
   const noakhaliAmountEl =document.getElementById('input-amount-noakhali');
   const noakhaliBalance = parseFloat(document.getElementById('noakhali-balance').innerText);
    
   noakhaliAmountEl.value = '';
   
 const {newBalance, remainingBalance }=  donateMoney(accountBalance,noakhaliAmount,noakhaliBalance)
   
  if(newBalance !== undefined){
   document.getElementById('noakhali-balance').innerText =newBalance;
   document.getElementById('account-balance').innerText = remainingBalance;
   modal();
  }

 });




function donateMoney(accountBalance, amount,balance) {
       
   if(amount > 0 && accountBalance >= amount){
    const newBalance = balance + amount;
   const remainingBalance = accountBalance - amount;
     return {newBalance, remainingBalance }; 
   }else{
       alert('invalid input');
       return undefined;
   }  

}




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





























function modal(){
 const modal = document.getElementById('my_modal_1');
 modal.showModal();
}



