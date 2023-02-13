(()=>{
    const getTheTime=()=>{
        let date = new Date();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        
        
        hour = (hour<10) ? '0' + hour:hour;
        minutes = (minutes<10) ? '0' + minutes:minutes;
        seconds = (seconds<10) ? '0' + seconds:seconds;

        let time = hour + ':' + minutes + ':' + seconds;
        let watch =  document.querySelector('#watch');
        watch.innerHTML = time;
    };
    setInterval(getTheTime,1000);

    let today = new Date();
    let writeToday = document.querySelector('.today');
    writeToday.innerHTML=today;

})();

