function updateSeatInfo(selectedButton) {
    const seatDetailsDiv = document.createElement('div');
    seatDetailsDiv.classList.add('flex', 'justify-evenly', 'm-4', 'text-[#03071299]', 'text-lg', 'font-normal');
    seatDetailsDiv.innerHTML = `
        <div>
            <h3>${selectedButton.textContent}</h3>
            <h3>Economy</h3>
            <h3>${seatPrice}</h3>
        </div>
    `;
    seatInfoContainer.appendChild(seatDetailsDiv);
}

