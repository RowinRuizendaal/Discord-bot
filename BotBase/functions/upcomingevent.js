const getJson = require('./getJson.js');
module.exports = upcomingEvent;


function upcomingEvent() {
    //import json
    let jsonData = getJson('././data.json');
    for (let i = 0; i < jsonData.Activities.length; i++) {
        // Split Start time into usable chunks
        let eventDateRaw = jsonData.Activities[i].Start.toString().split(", ");

        // Get day month year, year minus 20
        let eventDate = eventDateRaw[1].toString().split(" ");

        // Rearange array to work with date
        // Format Month Day Year
        eventDate.unshift(eventDate[1]);
        eventDate.splice(2, 1);

        // Make year contain all 4 digit
        // Only works in 2000s
        eventDate[2] += "20";

        // Convert into single string
        eventDate.join(" ");

        // convert event date to day of year
        eventDate = new Date(eventDate);
        let eventDateDay = Math.ceil(
            (eventDate - new Date(eventDate.getFullYear(), 0, 1)) / 86400000 + 1
        );

        // convert current day to day of year
        let currentDate = new Date();
        let currentDateDay = Math.ceil(
            (currentDate - new Date(currentDate.getFullYear(), 0, 1)) / 86400000
        );

        let currentHour = currentDate.getHours();
        let currentMin = currentDate.getMinutes();
        let currentMinTotal = currentHour * 60 + currentMin;

        let eventHourMin = eventDateRaw[2].split(":");
        let eventMinTotal = Number(eventHourMin[0]) * 60 + Number(eventHourMin[1]);

        // if eventDate is larger than current day return

        // assuming json items are sorted by date
        if (eventDateDay == currentDateDay && eventMinTotal > currentMinTotal) {
            return `Next scheduled event is today: **${jsonData.Activities[i].Name}** and starts at : **${eventDateRaw[2]}**`;
        } else if (eventDateDay > currentDateDay) {
            return `Next scheduled event: **${jsonData.Activities[i].Name}** and starts at : **${eventDateRaw[2]} on: ${eventDateRaw[0]} ${eventDateRaw[1]}**`;

            // Change day from year to day stratring from 1970?
        }

    }
    return 'No upcomming events found'
}