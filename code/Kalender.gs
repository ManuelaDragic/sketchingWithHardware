function doGet(e) {
  
  var calendars = CalendarApp.getAllCalendars();
  
  if (calendars == undefined) {
    Logger.log("No data");
    return ContentService.createTextOutput("no access to calendar");
  }
  
  var calendars_selected = [];
  for (var i = 0; i < calendars.length; i++) {
    if (calendars[i].isSelected()) {
      calendars_selected.push(calendars[i]);
      Logger.log(calendars[i].getName());
    }
  }
  
  Logger.log("Old: " + calendars.length + " New: " + calendars_selected.length);
  const now = new Date();
  var start = new Date(); start.setHours(0, 0, 0);      // start at midnight
  const oneday = 24*3600000;                            // milliseconds
  const stop = new Date(start.getTime() + 7 * oneday);  // appointments for the next 7 days
  var events = mergeCalendarEvents(calendars_selected, start, stop);

  
  var str = '';
  for (var i = 0; i < events.length; i++) {  
    var event=events[i];    
    var myStatus = event.getMyStatus();
    
    switch(myStatus) {
      case CalendarApp.GuestStatus.OWNER:
      case CalendarApp.GuestStatus.YES:
      case CalendarApp.GuestStatus.NO:  
      case CalendarApp.GuestStatus.INVITED:
      case CalendarApp.GuestStatus.MAYBE:
      default:
        break;
    }
    
    // format date and time output
    const options1 = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    const options2 = {
      hour: "numeric",
      minute: "numeric",
    };

    // create output string
    str += new Date(event.getStartTime()).toLocaleString("de-DE", options1) +  ' ';
    if (event.isAllDayEvent()) {
      str += '(Ganztägig) ';
    }
    else {
      str += new Date(event.getStartTime()).toLocaleString("de-DE", options2) +  '-' 
      + new Date(event.getEndTime()).toLocaleString("de-DE", options2) +  ' ';
    }
    str += event.getTitle() + " \n";

  }

  // replace vowels
  str = str.replace(/Ä/g, "AE");
  str = str.replace(/Ö/g, "OE");
  str = str.replace(/Ü/g, "UE");
  str = str.replace(/ä/g, 'ae');
  str = str.replace(/ö/g, 'oe');
  str = str.replace(/ü/g, 'ue');

  
  // return output String
  return ContentService.createTextOutput(str);
}

function mergeCalendarEvents(calendars, startTime, endTime) {
  var params = { start:startTime, end:endTime, uniqueIds:[] };
  return calendars.map(toUniqueEvents_, params)
                  .reduce(toSingleArray_)
                  .sort(byStart_);
}

function toCalendars_(id) { 
  return CalendarApp.getCalendarById(id); 
}

function toUniqueEvents_ (calendar) {
  return calendar.getEvents(this.start, this.end)
                 .filter(onlyUniqueEvents_, this.uniqueIds);
}

function onlyUniqueEvents_(event) {
  var eventId = event.getId();
  var uniqueEvent = this.indexOf(eventId) < 0;
  if(uniqueEvent) this.push(eventId);
  return uniqueEvent;
}

function toSingleArray_(a, b) { 
  return a.concat(b) 
}

function byStart_(a, b) {
  return a.getStartTime().getTime() - b.getStartTime().getTime();
}
