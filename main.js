let inp = document.querySelector('#input')
let getText = document.querySelector('.text')
function add() {
	if (inp.value == '') {
		alert("Create Some Task")
	}
	else {
		let newElement = document.createElement('ul')
		newElement.innerHTML = `${inp.value}  <i class="fa-solid fa-trash"></i>`
		getText.appendChild(newElement)
		inp.value = ""
		newElement.querySelector('i').addEventListener("click", deleteTask)
		function deleteTask() {
			newElement.remove()
		}
	}
}
