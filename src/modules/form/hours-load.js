import dayjs from "dayjs"

import { openingHours } from "../../utils/opening-hours.js"

const hours = document.getElementById("hours")

export function hoursLoad({ date }) {
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
    hours.appendChild(li)
  })
}
