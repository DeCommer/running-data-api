$(document).ready(() => {
    $.getJSON("/runs")
    .then(displayRuns)
});

const displayRuns = (runs) => {
    runs.forEach((run) => {
        let runList = $(
        `<div class="runContainer"> 

        <div class="id">${run.id}</div>
            <div class="run">            
                <div class="title">
                Title: ${run.title},
                </div>
                <div class="pace">
                Avg Pace: ${run.avg_pace},
                </div> 
                <div class="distance">
                Dist: ${run.distance}, 
                </div>
                <div class="duration">
                Duration: ${run.duration},
                </div> 
                <div class="calsBurned">
                Calories Burned: ${run.est_calories},
                </div> 
                <div class="location">
                Location: ${run.location},
                </div>

            </div> 
         </div>
         `);
        $('.listContent').append(runList);
    });
}