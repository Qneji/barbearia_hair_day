const periods = document.querySelectorAll(".period")

// Gera evento de click para cada lista (manhã, tarde e noite)

periods.forEach((period) => {
  period.addEventListener("click", (event) => {
    if(event.target.classList.contains("cancel-icon")){
      // Obtém a li pai do elemento clicado
      const item = event.target.closest("li")
      const { id } = item.dataset

      if(id) {
        const isConfirm = confirm("Deseja realmente cancelar o agendamento?")

        if(isConfirm) {
          console.log("Cancelou o agendamento")
        }
      }
    }
  })
})