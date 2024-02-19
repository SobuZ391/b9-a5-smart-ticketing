

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
        updateReciet();
        discount ();
        checkInputs()
        
      });
   }
   function updateReciet() {
    selectedSeatsElement.innerText = selectedCount;
    SeatsLeft.innerText = seats - selectedCount;
    document.getElementById('totalPrice').innerText = `: ${totalPrice}`;
    

}





function discount() {
    let TotalMoney = totalPrice; // Assuming totalPrice is defined elsewhere

    const grandTotal = document.getElementById('total-cost');
    const couponBtn = document.getElementById('coupon-btn');
    const couponInput = document.getElementById('coupon');
    const couponMessage = document.getElementById('coupon-message');
    const couponSection = document.getElementById('coupon-section');
    let alertShown = false;
    
    // Disable the button initially
    couponBtn.disabled = true;
    
    couponInput.addEventListener('input', function() {
        // const couponCode = couponInput.value.trim().toUpperCase(); // Trim whitespace and convert to uppercase
        const couponInput = document.getElementById('coupon').value;
        const couponCode = couponInput.split(" ").join('').toUpperCase();
        // Enable the button if a coupon is entered, disable otherwise
        couponBtn.disabled = (couponCode === '');
        
        // Reset alertShown when a new coupon is entered
        alertShown = false;
        
        // Clear previous coupon message
        couponMessage.textContent = '';
    });
    
    couponBtn.addEventListener('click', function() {
                const couponInput = document.getElementById('coupon').value;
                const couponCode = couponInput.split(" ").join('').toUpperCase();
                
        
                console.log(couponCode);
                if (couponCode === "NEW15") {
                    // Calculate the discount (15% discount)
                    const discountPrice = TotalMoney * 0.85; 
                    grandTotal.innerText = discountPrice.toString();
                    console.log("Discount applied: 15%");
        
                } 
                // Calculate the discount (20% discount)
                else if (couponCode == "COUPLE20") {
                    const discountPrice = TotalMoney * 0.80;
                    grandTotal.innerText = discountPrice.toString();
                } 
                
                
        
                else {
                    
                    if (!alertShown) {
                        alert('Invalid Coupon');
                        alertShown = true; 
                    }
                    grandTotal.innerText = TotalMoney.toString();

                }
                  // couponBtn.addEventListener('click', function() {
    //     const couponSection = document.getElementById('coupon-section');
    //     couponSection.style.display = "none";
    // });
    if (couponCode === "NEW15" || couponCode === "COUPLE20") {
        couponSection.style.display = "none";
    }
            });
}


   
    
  




let updateCounter = 0;

function updateSeatInfo(selectedButton) {
    if (updateCounter < 4) {
        const seatDetail = document.createElement('div');
        seatDetail.classList.add('seat-detail');

        seatDetail.innerHTML = `
            <div class='flex justify-evenly'>
                <h3>${selectedButton.textContent}</h3>
                <h3>Economy</h3>
                <h3>${seatPrice}</h3>
            </div>
        `;
        
        seatInfoContainer.appendChild(seatDetail);
        
        updateCounter++;
    }
    
}
 


const input1 = document.getElementById("input-mobile");
const input2 = document.getElementById("input-email");
const submitButton = document.getElementById("next-btn");

function checkInputs() {
  const value1 = input1.value.trim();
  const value2 = input2.value.trim();
  selectedSeatsElement.innerText = selectedCount;
 
  // Validate input1 as a number
  const isValidInput1 = !isNaN(value1) && value1.length > 0; // Check if input1 is not NaN  and is not empty
  
  // Validate input2 as an email address
  const isValidInput2 = value2.length > 0 && value2.includes("@"); 
  
  if (isValidInput1 && isValidInput2 && selectedCount) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "disabled");
  }
}

input1.addEventListener("input", checkInputs);
input2.addEventListener("input", checkInputs);





