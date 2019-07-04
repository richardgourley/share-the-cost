let intro = document.getElementById("intro");
let addPersonDiv = document.getElementById("addPersonDiv");
let displayResults = document.getElementById("displayResults");

let introContent = '';
introContent += '<h2>Share the costs</h2>';
introContent += '<p>Hey! This app lets you calculate how much you spent as a group and it calculates who owes what from a trip away!</p>';
introContent += '<h3>So, gather everyone round the table and ask them how much they contributed in total for food, petrol or any other expenditures!</h3>';
introContent += '<p>Remember, this app is for calculating at the end of the trip. If you refresh the page, you will have to start again!</p>';

intro.innerHTML = introContent;

let addPersonContent = '';
addPersonContent += '<div class="add-person-content-div">';
addPersonContent += '<table class="form-table">ADD A PERSON<br><br>';
addPersonContent += '<tbody>';
addPersonContent += '<tr>';
addPersonContent += '<th>Name:</th>';
addPersonContent += '<td>';
addPersonContent += '<input type="text" id="person" name="person">';
addPersonContent += '</td>';
addPersonContent += '</tr>';
addPersonContent += '<tr>';
addPersonContent += '<th>Ammount spent:</th>';
addPersonContent += '<td><input type="text" id="ammount" name="ammount"></td>';
addPersonContent += '</tr>';
addPersonContent += '</tbody>';
addPersonContent += '</table>';
addPersonContent += '<br><br><button type="submit" id="addPersonBtn">Add a person!</button>';
addPersonContent += '</div>';

addPersonDiv.innerHTML = addPersonContent;

let addPersonBtn = document.getElementById("addPersonBtn");
console.log(addPersonBtn);

trip = new Trip();
addPersonBtn.onclick = function(){
	let person = document.getElementById("person").value;
	let ammount = document.getElementById("ammount").value;
	let errors = trip.errorCheck(person, ammount);
	if(errors == ''){
		trip.addPerson();
	}else{
		alert(errors);
		return;
	}
}

function Trip(){
	this.people = [];
	this.addPerson = function(){
        //add a person to person array
        console.log('Person added');
        this.displayResults();
	}
	this.displayResults = function(){
		//calculate people ammount + money owed
		console.log('Display results');
	}
	this.errorCheck = function(person, ammount){
		if(person){
			return '';
		}else{
			return 'Errors added here!';
		}

	}
}







