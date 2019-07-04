let mainDiv = document.getElementById("mainDiv");

let content = '';
content += '<h2>Share the costs</h2>';
content += '<p>Hey! This app lets you calculate how much you spent as a group and it calculates who owes what from a trip away!</p>';
content += '<h3>So, gather everyone round the table and ask them how much they contributed in total for food, petrol or any other expenditures!</h3>';
content += '<p>Remember, this app is for calculating at the end of the trip. If you refresh the page, you will have to start again!</p>';

content += '<table class="form-table">';
content += '<tbody>';
content += '<tr>';
content += '</tr>';
content += '</tbody>';
content += '</table>';

mainDiv.innerHTML = content;

function Trip(){
	this.people = [];
	this.addPerson = function(){
		
	}
}







