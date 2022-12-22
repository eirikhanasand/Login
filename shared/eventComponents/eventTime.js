import React from 'react';
import { View, Text } from 'react-native';
import { T } from '../../styles/text'
import { useSelector } from 'react-redux';

export default function EventTime(startTime, endTime) {
    
    const { lang  } = useSelector( (state) => state.lang  )

            //MAKE COUNTDOWN FUNCTION BASED ON HOURS AND MINUTES
    var year     = new Date().getFullYear()
    var month    = new Date().getMonth()
    var day      = new Date().getDate()
    var hour     = new Date().getHours()
    var minute   = new Date().getMinutes()

    if(startTime != null && endTime != null){                                                   //Concatenating start:
        const startYear   = (startTime)[0] + (startTime)[1] + (startTime)[2] + (startTime)[3]   //  year
        const startMonth  = (startTime)[5] + (startTime)[6]                                     //  month
        const startDay    = (startTime)[8] + (startTime)[9]                                     //  day
        const startHour   = (startTime)[11] + (startTime)[12]                                   //  hour
        const startMinute = (startTime)[14] + (startTime)[15]                                   //  minute
                                                                                                //Concatenating end:
        const endYear     = (endTime)[0]  + (endTime)[1] + (endTime)[2] + (endTime)[3]          //  year
        const endMonth    = (endTime)[5]  + (endTime)[6]                                        //  month
        const endDay      = (endTime)[8]  + (endTime)[9]                                        //  day
        const endHour     = (endTime)[11] + (endTime)[12]                                       //  hour
        const endMinute   = (endTime)[14] + (endTime)[15]                                       //  minute

        const startMinutesCalculated = startMinute-minute                                       //  Amount of minutes remaining if less than one hour

        const nextHour = 59-startMinutesCalculated                                              //  Minutes left if event is the next hour
        const nextMonth = lastDayOfMonth(month+=1)-day                                          //  Days left if event is next month
        const startHourCalculated = startHour-hour-1                                            //  Amount of hours remaining if the event is the same day
        const startMinutesAfterHourCalculated = 59-startMinutesCalculated+startMinute*2         //  Amount of minutes remaining after hours have been subtracted
        const startsNextDay = 24-(hour-startHour)
        const startDayNextMonth = lastDayOfMonth(month)-day                                     //  Startday if event is in more than 1 month
        const lessThanOneMonth = 31+startDay*2-startDay-day                                     //  Startday if event is in less than 1 month

        const monthThisYear = startMonth-month                                                  //  Startmonth if event is this year
        const monthNextYear = 12+monthThisYear                                                  //  Startmonth if event is next year
        const ongoingMinuteCalculated = minute-startMinute                                      //  How many minutes the event has gone on for

        const endMinuteCalculated = endMinute-minute                                            //  Minutes left
        const endHourCalculated   = endHour-hour                                                //  Hours left
        const endDayCalculated    = endDay-day                                                  //  Days left
        const endMonthCalculated  = endMonth-month                                              //  Months left
        const endYearCalculated   = endYear-year                                                //  Years left
        
        if(beyondTime(startTime) && !beyondTime(endTime)){
            if (endYear == year) {
                if (endMonth == month) {
                    if (endDay == day) {
                        if (endHour == hour) {
                            if (endMinute == minute) {
                                console.log(100)
                                return(<View><Text style={T.text25}>{lang ? 'Slutt' : 'Ended'}</Text></View>)
                            } else {
                                console.log(101)
                                return(<View><Text style={T.text25}>{lang ? 'Ferdig om ' + endMinuteCalculated + ' min' : 'Ends in ' + endMinuteCalculated + ' min'}</Text></View>)
                            }
                        } else {
                            console.log(102)
                            return(<View><Text style={T.text25}>{lang ? 'Ferdig om ' + endHourCalculated + 't' + endMinuteCalculated + ' min' : 'Ends in ' + endHourCalculated + 'h' + endMinuteCalculated + ' min'}</Text></View>)
                        }
                    } else {
                        if (endDayCalculated == 1) {
                            console.log(103)
                            return(<View><Text style={T.text25}>{lang ? 'Ferdig i morgen' : 'Ends tomorrow'}</Text></View>)
                        } else {
                            console.log(104)
                            return(<View><Text style={T.text25}>{lang ? 'Ferdig om ' + endDayCalculated + ' dager' : 'Ends in ' + endDayCalculated + ' days'}</Text></View>)
                        }                    
                    }
                } else {
                    if (endMonthCalculated == 1) {
                        console.log(105)
                        return(<View><Text style={T.text25}>{lang ? 'Ferdig neste måned' : 'Ends next month'}</Text></View>)
                    } else {
                        console.log(107)
                        return(<View><Text style={T.text25}>{lang ? 'Ferdig om ' + endMonthCalculated + ' måneder' : 'Ends in ' + endMonthCalculated + ' months'}</Text></View>)
                    }
                }
            } else {
                if (endYearCalculated == 1) {
                    console.log(108)
                    return(<View><Text style={T.text25}>{lang ? 'Ferdig neste år' : 'Ends next year'}</Text></View>)
                } else {
                    console.log(109)
                    return(<View><Text style={T.text25}>{lang ? 'Ferdig om ' + endYearCalculated + ' år' : 'Ends in ' + endYearCalculated + ' years'}</Text></View>)
                }
            }
        }

        if(startYear == year) {                                 //Event is this year
            if (startMonth == month) {                          //Event is this month
                if (startDay == day) {                          //Event is today
                    if (startHour == hour) {                    //Eventet is this hour
                        if (startMinute == minute) {            //Event is now
                            console.log(110)
                            return(<View><Text style={T.text25}>{lang ? 'Nå' : 'Now'}</Text></View>)
                        }else if(startMinute < minute){ //Event started x minutes ago
                            console.log(111)
                            return(<View><Text style={T.text25}>{lang ? 'Pågått i ' + ongoingMinuteCalculated + 'min' : 'Started ' + ongoingMinuteCalculated + ' min ago'}</Text></View>)
                        }else{  //Event starts in x minutes
                            console.log(112)
                            return(<View><Text style={T.text25}>{startMinutesCalculated} {lang ? ' min til' : ' min left'}</Text></View>)
                        }
                    }else if(startHour == hour-1){ //Event started less than 1 hour ago
                        console.log(113)
                        return(<View><Text style={T.text25}>{lang ? 'Pågått i' + nextHour + 'min': 'Started ' + nextHour + ' min ago'}</Text></View>)
                    }else if(startHour == hour-2){ //Event started between 1 and 2 hours ago
                        console.log(114)
                        return(<View><Text style={T.text25}>{hour-startHour-1} {lang ? ' time siden' : ' hour ago'}</Text></View>)
                    }else if(startHour < hour){ //Event was x hours ago
                        console.log(114)
                        return(<View><Text style={T.text25}>{hour-startHour-1} {lang ? ' timer siden' : ' hours ago'}</Text></View>)
                    }else if(startHour == hour+1){ //Event is the next hour
                        console.log(115)
                        return(<View><Text style={T.text25}>{lang ? startMinutesCalculated + 'min til' : 'Starts in ' + startMinutesCalculated + 'min'}</Text></View>)
                    }else{ //Event starts in x hours
                        console.log(116)
                        return(<View><Text style={T.text25}>{lang ? startHourCalculated + 't' + startMinutesAfterHourCalculated + 'min til' : 'Starts in ' + startHourCalculated + 'h ' + startMinutesAfterHourCalculated + 'min'}</Text></View>)
                    }
                }else if(startDay == day-1){ //Event was yesterday
                    console.log(117)
                    return(<View><Text style={T.text25}>{lang ? 'I går' : 'Yesterday'}</Text></View>)
                }else if(startDay < day){ //Event was x days ago
                    console.log(118)
                    return(<View><Text style={T.text25}>{day-startDay} {lang ? ' dager siden' : ' days ago'}</Text></View>)
                }else if(startDay == day+1){ //Event is tomorrow
                    if (startHour <= hour) { //Event is in less than 24 hours
                        console.log(119)
                        return(<View><Text style={T.text25}>{lang ? 'Starter om ' + startsNextDay + 't' : 'Starts in ' + startsNextDay + 'h'}</Text></View>)
                    }else{ //Event is tomorrow but in more than 24 hours
                        console.log(120)
                        return(<View><Text style={T.text25}>{lang ? 'I morgen' : 'Tomorrow'}</Text></View>)
                    }
                }else{ //Event is in x days
                    console.log(121)
                    return(<View><Text style={T.text25}>{startDay-day} {lang ? ' dager til' : ' days left'}</Text></View>)
                }
            }else if(startMonth == month+1){ //Event is next month
                if (day == lastDayOfMonth(month+1) && startDay == 1) {
                    console.log(122)
                    return(<View><Text style={T.text25}>{lang ? 'I morgen' : 'Tomorrow'}</Text></View>)
                } else if (day > startDay) {
                    console.log(123)
                    return(<View><Text style={T.text25}>{lang ? nextMonth + ' dager til' : 'Starts in ' + nextMonth + ' days'}</Text></View>)
                }else {
                    console.log(124)
                    return(<View><Text style={T.text25}>{lang ? 'Neste måned' : 'Next Month'}</Text></View>)
                }
            }else if(startMonth == month){ //Event was last month
                if (day == 1 && startDay == lastDayOfMonth(month)) { //If the event was the last day of the month and youre on the first day of the month
                    console.log(125)
                    return(<View><Text style={T.text25}>{lang ? 'I går': 'Yesterday'}</Text></View>)
                }else{ //If the event was last month, but youre not on the first day of the month
                    console.log(125)
                    return(<View><Text style={T.text25}>{lang ? 'Forrige måned' : 'Last month'}</Text></View>)
                }
            }else if(startMonth < month){ //Event was x months ago
                console.log(126)
                return(<View><Text style={T.text25}>{month-startMonth} {lang ? 'måneder siden' : 'months ago'}</Text></View>)
            }else if(startMonth == month+1){ //Event is next month
                console.log(127)
                return(<View><Text style={T.text25}>{lang ? startDayNextMonth + 'dager til' : 'Starts in ' + startDayNextMonth +  'days'}</Text></View>)
            }else{ //Event is in x months
                console.log(128)
                return(<View><Text style={T.text25}>{lang ? monthThisYear + 'måneder til' : 'Starts in ' + monthThisYear + ' months'}</Text></View>)
            }
        }else if(startYear == year-1){ //Event was last year
            console.log(129)
            return(<View><Text style={T.text25}>{lang ? 'I fjor' : 'Last year'}</Text></View>)
        }else if(startYear < year){ //Event was x years ago
            console.log(130)
            return(<View><Text style={T.text25}>{year-startYear} {lang ? 'år siden' : 'years ago'}</Text></View>)
        }else if(startYear == year+1){ //Event is next year
            if(monthNextYear <= 12){ //Event is in less than 12 months
                if(monthNextYear == 1){    //Event is in January
                    if (lessThanOneMonth <= 31) { //Less than one month till event
                        console.log(131)
                        return(<View><Text style={T.text25}>{lang ? lessThanOneMonth + 'dager til' : 'Starts in ' + lessThanOneMonth + ' days'}</Text></View>)
                    } else {    //More than one month till event
                        console.log(132)
                        return(<View><Text style={T.text25}>{lang ? 'Neste måned' : 'Next month'}</Text></View>)
                    }
                }else{   //Event is not in January
                    console.log(133)
                    return(<View><Text style={T.text25}>{lang ? monthNextYear + ' måneder til' : 'Starts in ' + monthNextYear + ' months'}</Text></View>)
                }
            }else{  //Event is in more than 12 months
                console.log(134)
                return(<View><Text style={T.text25}>{lang ? 'Neste år' : 'Next year'}</Text></View>)
            }
        }else{  //Event is in x years
            console.log(135)
            return(<View><Text style={T.text25}>{lang ? 'Starter om' : 'Starts in'} {startYear-year} {lang ? 'år' : 'years'}</Text></View>)
        }
    }else{  //Error occured
        console.log(136)
        return(<View><Text style={T.red}>{lang ? 'Feil ved henting av tid' : 'Error fetching time'}</Text></View>)
    }
}

export function leapYear(year){         //Bool for leapyear
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

export function lastDayOfMonth(month) { //Returns amount of days in the given month, also checks for leap year
    var year = new Date().getFullYear()
    switch (month) {
        case 2:     
            if(leapYear(year)){return 29} //29 days in february if true
            else{return 28}
        case 4:     return 30;
        case 6:     return 30;
        case 9:     return 30;
        case 11:    return 30;
        default:    return 31;
    }
}

export function beyondTime(eventTime) { // True if the given time has passed
    var year     = new Date().getFullYear()
    var month    = 1 + new Date().getMonth()
    var day      = new Date().getDate()
    var hour     = new Date().getHours()
    var minute   = new Date().getMinutes()

    const eventYear     = (eventTime)[0]  + (eventTime)[1] + (eventTime)[2] + (eventTime)[3]      //  year
    const eventMonth    = (eventTime)[5]  + (eventTime)[6]                                        //  month
    const eventDay      = (eventTime)[8]  + (eventTime)[9]                                        //  day
    const eventHour     = (eventTime)[11] + (eventTime)[12]                                       //  hour
    const eventMinute   = (eventTime)[14] + (eventTime)[15]                                       //  minute
    
    if (eventYear >= year) {
        if(eventYear > year) return false
        if (eventMonth >= month) {
            if(eventMonth > month) return false
            if (eventDay >= day) {
                if(eventDay > day) return false
                if (eventHour >= hour) {
                    if(eventHour > hour) return false
                    if (eventMinute >= minute) { return false} 
                    else {return true}
                } else {return true}
            } else {return true}
        } else {return true}
    } else {return true}
}

export function endsSoon(endTime) {     //Bool for if we are more than half way through the event
    var year     = new Date().getFullYear()
    var month    = 1 + new Date().getMonth()
    var day      = new Date().getDate()
    var hour     = new Date().getHours()
    var minute   = new Date().getMinutes()

    const endYear     = (endTime)[0]  + (endTime)[1] + (endTime)[2] + (endTime)[3]  //  year
    const endMonth    = (endTime)[5]  + (endTime)[6]                                //  month
    const endDay      = (endTime)[8]  + (endTime)[9]                                //  day
    const endHour     = (endTime)[11] + (endTime)[12]                               //  hour
    const endMinute   = (endTime)[14] + (endTime)[15]                               //  minute
    
    if(endYear/2 <= year){
        if(endYear != year){ return true
        }else{
            if(endMonth/2 <= month){
                if(endMonth != month){ return true
                }else{
                    if(endDay/2 <= day){
                        if(endDay != day){ return true
                        }else{
                            if(endHour/2 <= hour){
                                if(endHour != hour){ return true
                                }else{
                                    if(endMinute/2 <= minute){
                                        if(endMinute != minute){ return true
                                        }else{return false}
                                    }else{return false}}
                            }else{return false}}
                    }else{return false}}
            }else{return false}}
    }else{return false}
}