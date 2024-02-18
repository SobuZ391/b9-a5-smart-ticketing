

const buttons = document.querySelectorAll('.button');
let selectedCount = 0;
let totalPrice = 0;
const seatPrice = 550;
const seats =40;

const selectedSeatsElement = document.getElementById('selectedSeats');
const SeatsLeft = document.getElementById('seatsLeft');
const seatInfoContainer = document.getElementById('seatInfo');


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        const button = buttons[i];
        if (button.classList.contains('bg-green-500')) {
            button.classList.remove('bg-green-500');
            selectedCount--;
            totalPrice -= seatPrice;
            //remove seat info 
        } else if (selectedCount < 4) {
            button.classList.add('bg-green-500');
            selectedCount++;
            totalPrice += seatPrice;
            //update seat info
            updateSeatInfo(button);
        }
        updateUI();
      });
   }
   


   function updateUI() {
      selectedSeatsElement.innerText = selectedCount;
      SeatsLeft.innerText= seats - selectedCount;
      document.getElementById('totalPrice').innerText = `: ${totalPrice}`;
  }

   function updateSeatInfo(selectedButton) {
      
      const seatDetail = document.getElementById('seatInfo')
    
      seatDetail.innerHTML = `
      <h3 >${selectedButton.textContent}</h3>
            <h3 class='grid-col-2'>Economy</h3>
            <h3>${seatPrice}</h3>
      `;
      seatInfoContainer.appendChild(seatDetailsDiv);
      
      updateSeatInfo();
   }
   
   
   
