$(document).ready(() => {
    $.getJSON("/runs")
    .then(displayRuns)
});

const displayRuns = (runs) => {
    runs.forEach((run) => {
        let runList = $(`<li> 
        ${run.id} 
        Title: ${run.title}, 
        Avg Pace: ${run.avg_pace}, 
        Dist: ${run.distance}, 
        Duration: ${run.duration}, 
        Calories Burned: ${run.est_calories}, 
        Location: ${run.location}, 
         </li>`);
        $('.listContent').append(runList);
    });
}