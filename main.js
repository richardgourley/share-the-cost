
if(addPersonDiv){
	let addPersonDiv = document.getElementById("addPersonDiv");
	let displayResults = document.getElementById("displayResults");

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
	        let ammountConverted = parseInt(ammount);
			let newPerson = {name:person, ammount:ammountConverted};
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
			let average = parseInt(total / numberPeople);

			for(i=0; i<this.people.length; i++){
				let owed = this.people[i].ammount - average;
				content += '<p>' + this.people[i].name + ' - PAID IN: <strong>' + this.people[i].ammount;
	            content += '</strong>. ';
	            content += owed > 0 ? '<span>You are OWED ' + owed + '</span>' : '<span style="color:red;">You OWE ' + owed + '</span>';
				content += '</p>';
			}

			displayResults.innerHTML = '';
			displayResults.innerHTML += '<h4>TOTAL SPENT: ' + total + '</h4>';
			displayResults.innerHTML += '<h4>NUMBER OF PEOPLE: ' + numberPeople + '</h4>';
			displayResults.innerHTML += '<h4>AVERAGE SPEND PP: ' + average + '</h4>';
			displayResults.innerHTML += content;
		}
		this.displayTotal = function(){
	        let num = 0;
	        for(i=0; i<this.people.length; i++){
				num += parseInt(this.people[i].ammount);
			}
			return num;
		}
		this.errorCheck = function(person, ammount){
			let errors = '';
			if(person == '') { errors += 'Name field is blank.  '; }
			if(ammount == '') { errors += 'Ammount field is blank.  '; }
			if(!this.checkStr(person)) { errors += 'Name field can only contain letters and spaces.  '; }
			if(isNaN(ammount)) { errors += 'Ammount field can only contain a number.  '; }
			return errors;
		}
		this.checkStr = function(str){
	        return /^[a-zA-Z\s]*$/.test(str);
		}
		
	}
}






