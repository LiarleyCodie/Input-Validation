const button = document.querySelector("#submit")
var existAnyInvalidEntry = false

button.onclick = ev => {
	ev.preventDefault()

	if (input.element.value.trim() != "" && !existAnyInvalidEntry) {
		alert("SEND")
	}
}

const input = {
	element: document.querySelector("#input"),
	wrapper: document.querySelector("#usernameInput"),
	allowedChars: "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	checkEntry: function() {
		const inputValue = this.element.value
		const isValidInput = inputValue.split('').every(char => this.allowedChars.includes(char))

		if (!isValidInput) {
			existAnyInvalidEntry = true
			return true
		} else {
			existAnyInvalidEntry = false
			return false
		}
	},
	updateElement: function(state) {
		if (state) {
			this.wrapper.classList.add("error")
		} else {
			this.wrapper.classList.remove("error")
		}
	}
}

input.element.addEventListener("input", ({ data, inputType }) => {
	input.checkEntry()
	input.updateElement(input.checkEntry())
})