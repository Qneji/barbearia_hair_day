import dayjs from "dayjs"

// Seleciona as sessões manhã, tarde, noite
const  periodMorning = document.getElementById("period-morning")
const  periodAfternoon = document.getElementById("period-afternoon")
const  periodNight = document.getElementById("period-night")

export function schedulesShow({ dailySchedules }) {
  try {
    // Limpa a lista
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""

    // Renderizar os agendamentos por período
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li")
      const time = document.createElement("strong")
      const name = document.createElement("span")

      // Adiciona o id do agendamento
      item.setAttribute("data-id", schedule.id)

      time.textContent = dayjs(schedule.when).format("HH:mm")
      name.textContent = schedule.name

      // Cria o icone de cancelar o agendamento
      const cancelIcon = document.createElement("img")
      cancelIcon.classList.add("cancel-icon")
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
      cancelIcon.setAttribute("alt", "Cancelar agendamento")

      // Adiciona Nome, tempo e icone no item
      item.append(time, name, cancelIcon)

      // Obtém somente a hora
      const hour = dayjs(schedule.when).hour()

      // Renderizar o agendamento na sessão (manhã, tarde ou noite)
      if (hour <= 12) {
        periodMorning.append(item)
      } else if (hour > 12 && hour <=18 ) {
        periodAfternoon.append(item)
      } else {
        periodNight.append(item)
      }
    })
  } catch (error) {
    console.log(error)
    alert("Não foi possível exibir os agendamentos.")
  }
}