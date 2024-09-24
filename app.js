

// noakhali part

document.getElementById('donate-Noakhali').addEventListener('click',function(){
  const noakhaliBalance = parseFloat(document.getElementById('noakhali-balance').innerText);
  const inputValue = getInputFieldValueById('input-amount-noakhali');

   const result=  donateMoney(noakhaliBalance,inputValue);
   const donationName = 'Flood at Noakhali, Bangladesh';

 if(result){
   const {newBalance, remainingBalance } = result;
  document.getElementById('noakhali-balance').innerText =newBalance;
  document.getElementById('account-balance').innerText = remainingBalance;
  modal();
  donationHistory(inputValue, donationName);
 }

});


// feni part

document.getElementById('donate-feni').addEventListener('click',function(){
  const feniBalance = parseFloat(document.getElementById('feni-balance').innerText);
  const inputValue = getInputFieldValueById('input-amount-feni');

 const result=  donateMoney(feniBalance,inputValue);
const donationName = 'Flood Relief in Feni,Bangladesh';

 if(result){
   const {newBalance, remainingBalance } = result;
  document.getElementById('feni-balance').innerText =newBalance;
  document.getElementById('account-balance').innerText = remainingBalance;
  modal();
  donationHistory(inputValue, donationName);
 }

});




// quota part 
 document.getElementById('donate-quota').addEventListener('click',function(){
  const quotaBalance = parseFloat(document.getElementById('quota-balance').innerText);
  const inputValue = getInputFieldValueById('input-amount-quota');
  
  const result=  donateMoney(quotaBalance,inputValue);
  const donationName = 'Aid for Injured in the Quota Movement, Bangladesh';

 if(result){
   const {newBalance, remainingBalance } = result;
  document.getElementById('quota-balance').innerText =newBalance;
  document.getElementById('account-balance').innerText = remainingBalance;
  modal();
  donationHistory(inputValue, donationName);
 }

});





// common function 

function getInputFieldValueById(id){
  const inputValueEl = document.getElementById(id).value;
   document.getElementById(id).value='';
       if(!isNaN(inputValueEl)){
      const inputValueNum = parseFloat(inputValueEl);
      const inputValue = inputValueNum.toFixed(2);
        return parseFloat(inputValue);
       }
       else{
        return ;
       }    
 }



// modal function

function modal(){
  const modal = document.getElementById('my_modal_1');
  modal.showModal();
 }


// history part starts here

function donationHistory (donationAmount, donationName){
  const currentTime = new Date ();
  const div = document.createElement('div');
  div.classList.add('border-2','rounded-xl','mt-6','w-full','p-8');

  div.innerHTML = `
        <h2 class="text-lg font-bold">${donationAmount} Taka is Donated for ${donationName}</h2>
       <p  class="text-home-color mt-4">${currentTime}</p> `
   
       document.getElementById('history-section').appendChild(div);
}




// donation calculation

function donateMoney(balance, donateAmount ) {
       
  const accountBalance = parseFloat(document.getElementById('account-balance').innerText);

   if(donateAmount > 0 && accountBalance >= donateAmount){
    const newAmount = balance + donateAmount;
   const remainingAmount = accountBalance - donateAmount;
   
   const newBalance = newAmount.toFixed(2);
   const remainingBalance = remainingAmount.toFixed(2);
     return {  newBalance, remainingBalance }; 
   }else{
       alert('Invalid Donation Amount');
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
