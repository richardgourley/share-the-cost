if(addPersonDiv){
	let addPersonDiv = document.getElementById("addPersonDiv");
	let displayResults = document.getElementById("displayResults");

	//displays the addPerson form
	let pageSetUp = new PageSetUp();
	pageSetUp.setUpAddPersonDiv();

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
				content += '<p>' + this.people[i].name;
				content += ' - PAID IN: <strong>' + this.people[i].ammount;
	            content += '</strong>. ';
	            content += owed >= 0 ? '<span>You are OWED ' + owed + '</span>' : '<span style="color:red;">You OWE ' + Math.abs(owed) + '</span>';
				content += '</p>';
			}

			displayResults.innerHTML = '';
			displayResults.innerHTML += '<h3>TOTAL SPENT: ' + total + '</h3>';
			displayResults.innerHTML += '<h3>NUMBER OF PEOPLE: ' + numberPeople + '</h3>';
			displayResults.innerHTML += '<h3>AVERAGE SPEND PP: ' + average + '</h3>';
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

	function PageSetUp(){
		this.setUpAddPersonDiv = function(){
			let content = '';
			content += '<div class="add-person-content-div">';
			content += '<table class="form-table">ADD A PERSON<br><br>';
			content += '<tbody>';
			content += '<tr>';
			content += '<th>Name:</th>';
			content += '<td>';
			content += '<input type="text" id="person" name="person">';
			content += '</td>';
			content += '</tr>';
			content += '<tr>';
			content += '<th>Ammount spent:</th>';
			content += '<td><input type="text" id="ammount" name="ammount"></td>';
			content += '</tr>';
			content += '</tbody>';
			content += '</table>';
			content += '<br><br><button type="submit" id="addPersonBtn">Add a person!</button>';
			content += '</div>';

			addPersonDiv.innerHTML = content;
		}
	}
}






