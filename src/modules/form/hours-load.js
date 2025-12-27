import dayjs from "dayjs"

import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"

const hours = document.getElementById("hours")

export function hoursLoad({ date }) {
  //Limpa a lista de horários
  hours.innerHTML = ""
  
  const opening = openingHours.map((hour) => {
    // Recupera somente a hora
    const [schedulesHour] = hour.split(":") // Recupera somente a hora ex: 09:00 -> 09 sem o :00

    // Adiciona a hora na data e verifica se ela está no passado
    const isHourPast = dayjs(date).add(schedulesHour, "hour").isAfter(dayjs())

    return {
      hour,
      avaiable: isHourPast, 
    }
  })

  // Renderiza os  horários.
  opening.forEach(({ hour, avaiable }) => {
    const li = document.createElement("li")

    li.classList.add("hour")
    li.classList.add(avaiable ? "hour-available" : "hour-unavailable")

    li.textContent = hour

    if(hour === "9:00") {
      hourHeaderAdd("Manhã")
    } else if (hour === "13:00") {
      hourHeaderAdd("Tarde")
    } else if (hour === "19:00") {
      hourHeaderAdd("Noite")
    }

    hours.appendChild(li)
  })

  hoursClick()
}

function hourHeaderAdd(title){
  const header = document.createElement("li")

  header.classList.add("hour-period")
  header.textContent = title

  hours.append(header)
}