import { schedulesDay } from "../schedules/load.js"

// Seleciona o imput de data
const selectedDate = document.getElementById("date")

// Recarrega a lista de horários quando o input de data mudar
selectedDate.onchange = () => schedulesDay()