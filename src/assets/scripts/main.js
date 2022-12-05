/**
 * Import dependencies from node_modules
 * see commented examples below
 */


import * as bootstrap from 'bootstrap';
import countdown from 'countdown';



/**
 * Write any other JavaScript below
 */



window.onload = function() {
    const nextConcertDate = new Date(2023, 0, 8, 19, 0);
    const nextConcertSite = ''
    const concertCountdown = document.getElementById('concert-countdown');
    
    setInterval( () => {
        concertCountdown.textContent = countdown(nextConcertDate)
            .toString()
            .replace('months', 'meses')
            .replace('month', 'mes')
            .replace('days', 'días')
            .replace('day', 'día')
            .replace('hours', 'horas')
            .replace('hour', 'hora')
            .replace('minutes', 'minutos')
            .replace('minute', 'minute')
            .replace('seconds', 'segundos')
            .replace('second', 'segundo')
            .replace('and', 'y');
    }, 1000);


    
    
}
 


