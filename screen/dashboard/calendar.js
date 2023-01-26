import React, { useEffect, useState } from 'react'
import { Image, Text, View,TouchableHighlight } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import EventCard from '../../components/inputs/eventCard';
import SchedCard from '../../components/inputs/schedCard';
import { useSelector,useDispatch} from "react-redux";
const Calendar = () => {
  const [date,setDate] = useState("Aprl 21");
const [time,setTime] = useState("7:20 AM");
const schedules = useSelector((state) => state.sched.value)
const [today,setToday] = useState("FRI")



  setInterval(()=>{
    displayDateTime()
   
  },1000)



  const displayDateTime = () => {
    let currentDateAndTime = new Date();
  
    let month = currentDateAndTime.getMonth();
    let day = currentDateAndTime.getDate();
    let currentDay = currentDateAndTime.getDay();
    let hours = currentDateAndTime.getHours();
    let minutes = currentDateAndTime.getMinutes();
    let seconds = currentDateAndTime.getSeconds();
    let amPm = 'AM';
  
  if (hours >= 12) {
    amPm = 'PM';
    hours -= 12;
  }



    let monthNames = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    let monthName = monthNames[month];
  
    let dateString = monthName + " " + day;
  
    if (hours >= 12) {
      amPm = 'PM';
      hours -= 12;
    }
  
    setTime(`${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds} ${amPm}`)
    
    
    setDate(dateString)
   
    setToday(['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][currentDay])
   
  };
  return (
    <View style={{width:"70%",minHeight:"20%",backgroundColor:"blue",borderBottomRightRadius:10,borderTopEndRadius:10,overflow:"hidden"}}>
      
      <View style={{width:"100%",height:40,backgroundColor:"#fdb417",flexDirection:"row",alignItems:"center"}}>
        <View style={{width:"26%",marginLeft:"5%"}}>
          <Text style={{fontSize:11,fontWeight:"bold",color:"white"}}>{date}</Text>
          <Text style={{fontSize:10,color:"white"}}>{time}</Text>
        </View>
        <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Upcoming Events  </Text>
      </View>

      <EventCard
        title = "Week Of Welcome"
        date = "JAN 29"
        time = "7:00AM - 10:00AM"
      />
      {schedules.filter(e=>e.day == today).map((e,key)=>(

        <SchedCard 
          key={key}
          title = {e.title}
        
          time = {e.time}
          />
      ))}
      
      


      
    </View>
  )
}

export default Calendar;

