/**
 * Import dependencies from node_modules
 * see commented examples below
 */


import * as bootstrap from 'bootstrap';
//import countdown from 'countdown';
import Countdown  from 'ds-countdown';




/**
 * Write any other JavaScript below
 */



window.onload = function() {
    // const nextConcertDate = new Date(2023, 0, 8, 19, 0);
    // const nextConcertSite = ''
    // const concertCountdown = document.getElementById('concert-countdown');
    
    // setInterval( () => {
    //     concertCountdown.textContent = countdown(nextConcertDate)
    //         .toString()
    //         .replace('months', 'meses')
    //         .replace('month', 'mes')
    //         .replace('days', 'días')
    //         .replace('day', 'día')
    //         .replace('hours', 'horas')
    //         .replace('hour', 'hora')
    //         .replace('minutes', 'minutos')
    //         .replace('minute', 'minute')
    //         .replace('seconds', 'segundos')
    //         .replace('second', 'segundo')
    //         .replace('and', 'y');
    // }, 1000);

    new Countdown({
        id: 'concert-countdown',
        // targetTime: '2023-01-08 19:00:00',
        targetTime: '2022-12-06 19:00:00',
        noDay: false,
        hideDayAtZero: false,
        separator: '/',
        afterEnd() {
          // alert("Time over !")
        }
      });

    

    
    
}
 


