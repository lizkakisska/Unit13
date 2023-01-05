document.addEventListener('DOMContentLoaded',init,false);
let name,comments;

function init() {
	// get the dom objects one time
	name = document.querySelector('#name');
	comments = document.querySelector('#comments');

	// listen for input on all
	let elems = Array.from(document.querySelectorAll('#mainForm input, #mainForm select, #mainForm textarea'));
	// elems.forEach(e => e.addEventListener('input', handleChange, false));
}
function handleChange(e) {

	console.log('handleChange');

	let form = {};
	form.name = name.value;
	form.comments = comments.value;


	saveForm(form);
}
function saveForm(form) {
	let f = JSON.stringify(form);
	window.localStorage.setItem('form'+ new Date().toJSON(), f);
}

function getForm() {
	let f = window.localStorage.getItem('form');
	if(f) return JSON.parse(f);
}
document.querySelector('#mainForm').addEventListener('submit', (e) => {
handleChange(e)
}, false);