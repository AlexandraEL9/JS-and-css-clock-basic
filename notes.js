<script>
  // Selecting the clock hands from the HTML document
  const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  // Function to update the clock hands' positions
  function setDate() {
    // Getting the current time
    const now = new Date();

    // Calculating the degrees for the second hand
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    // Applying the rotation to the second hand
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // Calculating the degrees for the minute hand
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    // Applying the rotation to the minute hand
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    // Calculating the degrees for the hour hand
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    // Applying the rotation to the hour hand
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  // Calling the setDate function every second to update the clock hands
  setInterval(setDate, 1000);

  // Calling the setDate function initially to set the initial position of the clock hands
  setDate();

</script>

This script first selects the HTML elements representing the 
clock hands (secondHand, minsHand, hourHand). Then, it defines
 a setDate function which calculates the rotation degrees for 
 each clock hand based on the current time, and applies these 
 rotations using CSS transform property.

Finally, it sets up a setInterval to call the setDate function
 every second, ensuring that the clock hands continuously 
 update to reflect the current time. Additionally, it 
 immediately calls the setDate function once to ensure the 
 initial position of the clock hands reflects the current 
 time when the page loads.