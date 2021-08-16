document.currentScript = document.currentScript || (function() {
    var scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
})();
let pageName = document.currentScript.getAttribute('page');

$(document).ready(function() {
    async function pushToDB(pos, log='Navigator Position') {
        $.getJSON('https://ipapi.co/json/', function (geodata) {

            const timeElapsed = Date.now();
            const today = new Date(timeElapsed);
            geodata.time = today.toUTCString();
            geodata.time_timezone = 'UTC';
            geodata.page= pageName;
            geodata.pos = pos;
            geodata.log = log;
            geodata.comment = '';

            actualPush(geodata)
        });
    }

    async function actualPush(geodata) {
        $.post( "https://jyotirmays-api.herokuapp.com/v1/insertJson", geodata, function( data ) {});
    }

    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
            pushToDB,
            (error) => {
                if (error.code === error.PERMISSION_DENIED) {
                    // console.log("you denied me :-(");
                    pushToDB(null, 'Denied Me');
                } else {
                    pushToDB(null, 'Some Other Error!');
                }
            });
    } else {
        pushToDB(null, 'No Navigator');
    }

    laodGitCalendar();
});

async function laodGitCalendar(){
    await GitHubCalendar(".calendar", "jyotirmay123", { responsive: true });

    // $('#git-tooltip').tooltip();
    $('rect').mousemove((evt) => {
        showTooltip(evt);
    }).mouseleave((evt) => {
        hideTooltip();
    })
}

function showTooltip(evt) {
    let tooltip = document.getElementById("tooltip");
    if(evt.target.dataset.count == undefined || evt.target.dataset.date == undefined) {
        return false;
    }
    tooltip.innerHTML = evt.target.dataset.count + ' push on '+ evt.target.dataset.date;
    tooltip.style.display = "block";
    tooltip.style.left = evt.pageX + 10 + 'px';
    tooltip.style.top = evt.pageY + 10 + 'px';
}

function hideTooltip() {
    var tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
}