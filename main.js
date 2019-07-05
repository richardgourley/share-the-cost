/*let myVar1 = 26.55555;
let myVar1r = myVar1.toFixed(2);
console.log(myVar1r);*/

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

trip = new Trip();
addPersonBtn.onclick = function(){
	let person = document.getElementById("person").value;
	let ammount = document.getElementById("ammount").value;
	let errors = trip.errorCheck(person, ammount);
	if(errors == ''){
		let newPerson = {name:person, ammountPaid:ammount};
		trip.people.push(newPerson);
		trip.displayResults();
	}else{
		alert(errors);
		return;
	}
}

function Trip(){
	this.people = [];

	this.displayResults = function(){
		//calculate people ammount + money owed
		content = '';
		
		let total = this.displayTotal();
        let numberPeople = this.people.length;
		let average = total / numberPeople;

		for(i=0; i<this.people.length; i++){
			let owed = this.people[i].ammountPaid - average;
			content += '<p>' + this.people[i].name + ' - PAID IN: <strong>' + this.people[i].ammountPaid;
            content += '</strong>. ';
            content += owed > 0 ? 'You are OWED ' + owed : 'You OWE ' + owed;
			content += '</p>';
		}

		displayResults.innerHTML = '';
		displayResults.innerHTML += '<h4>TOTAL SPENT: ' + total + '</h4>';
		displayResults.innerHTML += '<h4>NUMBER OF PEOPLE: ' + numberPeople + '</h4>';
		displayResults.innerHTML += '<h4>AVERAGE SPEND PP: ' + average + '</h4>';
		displayResults.innerHTML += content;
	}
	this.errorCheck = function(person, ammount){
		if(person){
			return '';
		}else{
			return 'Errors added here!';
		}
	}
	this.displayTotal = function(){
        let num = 0;
        for(i=0; i<this.people.length; i++){
			num += parseInt(this.people[i].ammountPaid);
		}
		return num;
	}
}







