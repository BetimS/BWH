var header = document.getElementById("Coordinates");

window.addEventListener('deviceorientation', handleOrientation);

      function handleOrientation(event) {
        const alpha = event.alpha;
        const beta = event.beta;
        const gamma = event.gamma;

        header.innerHTML="Alpha: "+ alpha.toFixed(2)+ " Beta: "+ beta.toFixed(2)+ " Gamma: "+gamma.toFixed(2);
      }
