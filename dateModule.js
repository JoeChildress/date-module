var timeKeeper = ( function () {

  var date = new Date();
  var MONTHS = new Array( 12 );
  MONTHS[0] = 'January';
  MONTHS[1] = 'February';
  MONTHS[2] = 'March';
  MONTHS[3] = 'April';
  MONTHS[4] = 'May';
  MONTHS[5] = 'June';
  MONTHS[6] = 'July';
  MONTHS[7] = 'August';
  MONTHS[8] = 'September';
  MONTHS[9] = 'October';
  MONTHS[10] = 'November';
  MONTHS[11] = 'December';
  var WEEKDAY = new Array( 7 );
  WEEKDAY[0]=  'Sunday';
  WEEKDAY[1] = 'Monday';
  WEEKDAY[2] = 'Tuesday';
  WEEKDAY[3] = 'Wednesday';
  WEEKDAY[4] = 'Thursday';
  WEEKDAY[5] = 'Friday';
  WEEKDAY[6] = 'Saturday';

  function __checkDate(){

    if ( date instanceof Date ) {
      return;
    } else {
      date  = new Date();
    }
  }

  //UPDATES THE INTERNAL DATE VARIABLE: TAKES DATE INSTANCE new Date(), MILISECOND VALUE OR NOTHING
  function setDate( d ) {

    if ( d ) {
      if ( d instanceof Date ) {
        date = d;
      } else if ( isNaN(d) === false ) {
        date = new Date( d );
      } else {
        return;
      }
    } else {
      date = new Date();
    }
  }

  //RETURNS INTERNAL DATE AS REQUESTED WITH {format: "miliseconds"} or {format: "formatted"}, MILISECONDS IF NOTHING
  function getDate( f ) {

    __checkDate();

    if ( typeof f === 'object' ) {
      if ( f.format === 'milliseconds' ) {
        return Date.parse( date );
      } else if ( f.format === 'formatted' ) {
        return getMonthName() + ' ' + date.getDate() + ', ' +
            date.getFullYear();
      } else {
        return;
      }
    } else {
      return Date.parse( date );
    }
  }

  //RETURNS THE WEEKDAY NAME OF THE INTERNAL DATE VAR
  function getDayName() {

    __checkDate();

    return WEEKDAY[ date.getDay() ];
  }

  //RETURNS THE MONTH NAME OF THE INTERNAL DATE VAR
  function getMonthName() {

    __checkDate();

    return MONTHS[ date.getMonth() ];
  }

  //RETURNS BOOLEAN IF INTERNAL DATE IS IN THE FUTURE
  function isFuture() {

    var dateNow = new Date();

    __checkDate();

    if ( dateNow > date ) {
      return false;
    } else {
      return true;
    }
  }

  //RETURNS BOOLEAN IF THE INTERNAL DATE IS THE SAME DAY AS WHEN THE METHOD IS CALLED
  function isToday() {

    var now = new Date();
    var nowMon = MONTHS[now.getMonth()];
    var nowDay = WEEKDAY[now.getDay()];
    var nowYr = now.getFullYear();
    var dateMon;
    var dateDay;
    var dateYr;

    __checkDate();

    dateMon = getMonthName();
    dateDay = getDayName();
    dateYr = date.getFullYear();

    if ( nowMon === dateMon && nowDay === dateDay && nowYr === dateYr ) {
      return true;
    } else {
      return false;
    }
  }

  //RETURNED METHODS
  return {
    setDate: setDate,
    getDate: getDate,
    getDayName: getDayName,
    getMonthName: getMonthName,
    isFuture: isFuture,
    isToday: isToday
  };
})();