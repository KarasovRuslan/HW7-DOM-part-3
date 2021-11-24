let textInput = document.querySelector('#textInput'); 
let button = document.querySelector('#textBtn');	
let toDoList = document.querySelector('#toDoList');	

button.addEventListener('click', addPoint); 

function addPoint(event){
	event.preventDefault();
	let inputedPoint = textInput.value; 
	let liPoint = `<li class = "notDone"> ${inputedPoint}</li><button class = "deleteButton">Delete</button>`;
	let wrapper = document.createElement('span'); 
	wrapper.innerHTML = liPoint; 
	toDoList.append(wrapper); 
	textInput.value = ''; 
}

toDoList.addEventListener('click', (event) => {
	event.preventDefault();
	if(event.target.tagName === 'LI'){
		event.target.classList.toggle('done'); 
	}
	if(event.target.tagName === 'BUTTON'){
		event.target.closest('span').remove(); 
	}
})
