



function donateMoney(event) {
    const accountBalance = parseFloat(document.getElementById('account-balance').innerText);
    const noakhaliAmount =parseFloat (document.getElementById('input-amount-noakhali').value);
    const noakhaliBalance = parseFloat(document.getElementById('noakhali-balance').innerText);
    
    const newAmount =  noakhaliAmount +noakhaliBalance;

    console.log(newAmount)
     
    document.getElementById('noakhali-balance').innerText =newAmount;

   modal()

}





 const historyBtn = document.getElementById('history-btn');
 historyBtn.addEventListener('click',function(){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');

   historyBtn.classList.add('bg-btn-color');
   historyBtn.classList.remove('bg-white','text-home-color');

   donationBtn.classList.add('bg-white', 'text-home-color');
   donationBtn.classList.remove('bg-btn-color')
 })


 const donationBtn = document.getElementById('donation-btn');
 donationBtn.addEventListener('click',function(){

   document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');

    historyBtn.classList.add('bg-white','text-home-color');
    historyBtn.classList.remove('bg-btn-color');
 
    donationBtn.classList.add('bg-btn-color');
    donationBtn.classList.remove('bg-white','text-home-color')
 })





























function modal(){
 const modal = document.getElementById('my_modal_1');
 modal.showModal();
}



