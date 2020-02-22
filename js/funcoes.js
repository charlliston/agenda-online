var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var afazeres = JSON.parse(localStorage.getItem('list_afazeres')) || [];


function renderAfazeres() {

	listElement.innerHTML = '';

	for (item of afazeres) {

		var itemElement = document.createElement('li');
		var itemText = document.createTextNode(item);

		var linkElement = document.createElement('a');
		linkElement.setAttribute('href', '#');

		var pos = afazeres.indexOf(item);

		linkElement.setAttribute('onclick', 'excluirAfazeres(' + pos + ')')
		
		var linkText = document.createTextNode('Excluir Item');

		linkElement.appendChild(linkText);
		itemElement.appendChild(itemText);
		itemElement.appendChild(linkElement);
		listElement.appendChild(itemElement);
	}
}

renderAfazeres();

function addAfazeres() {
	var itemText = inputElement.value;

	afazeres.push(itemText);
	inputElement.value = '';
	renderAfazeres();
	saveToStorage();
}

buttonElement.onclick = addAfazeres;

function excluirAfazeres(pos) {

	afazeres.splice(pos, 1);
	renderAfazeres();
	saveToStorage();
}

function saveToStorage() {
	localStorage.setItem('list_afazeres', JSON.stringify(afazeres));
}

