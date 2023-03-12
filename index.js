const input = document.querySelector("#input")
const button = document.querySelector("#submit")
const alert = document.querySelector("#alert")

button.onclick = ev => ev.preventDefault()

const allowedChars = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ"

input.addEventListener("input", ({ data, inputType }) => {
	const inputValue = input.value
	const isValidInput = inputValue.split('').every(char => allowedChars.includes(char))

	if (!isValidInput) {
		alert.classList.add("error")
	} else {
		alert.classList.remove("error")
	}
	console.log(inputValue.split(''))
})