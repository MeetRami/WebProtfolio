const projects = [
				{
					name: "Inventory Management",
					photo:"img/projImg/inventory.jpg",
					description:"This project is still in progress. The goal of the project is to create a web application where store manager can login using their credentials\
								check the inventory usign keywords, update items, delete items, add items, etc. For initial start, there will be an option to upload a csv file to\
								populate database with all the items rather than adding them individually for scalability. Top notch technologies and frameworks are used for scalability and speed",
					techUsed:"Java, JSP, Hibernate, SpringBoot, MySQL, HTML5, CSS3, Bootstrap3, JQuery, React, REST api, Tomcat server",
					problems:"Currently I am implementing micro-service to maximize longterm use of this application in professional environment"
				},
				{
					name: "Boutit.com",
					photo:"img/projImg/boutit.jpg",
					description:"Using scrum methodology for project management me and my team created three web applications from scratch in a\
								semester long project. We have created loan application, quote application and admin panel as per clients request.\
								Laravel artisan was used to create blade templates and backend population using: migration, seeding and unit testing \
								on each lower environment",
					techUsed:"PHP, Laravel, HTML5, CSS3, Bootstrap, JavaScript, JQuery, MySQL",
					problems:"As we were using scrum methodology for project management. With every scrum cycle as we were meeting the requirements\
							  our client was introducing new sets of features to add on which many times made us change half of the work we had done\
							  in previous scrum cycle"
				},
				{
					name: "Exam Website",
					photo:"img/projImg/examweb.jpg",
					description:"This exam website would let professor or teacher create an exam, using existing questions stored in database by their credentials\
								or creating new questions and using them down the road. Student logs in with their credentials and if professor has uploaded the exam\
								students take the exam online. System auto-grades student response and give it a score which can be override later on by \
								professor or teacher before they publish the result for students to see. So, this was a real replication of an online exam websites like\
								professors and teachers set on blackboard, canvas, moodle etc.",
					techUsed:"PHP, JavaScript, CSS3, HTML5, MySQL",
					problems:"Initially we struggle getting the connection setup using cURL, once that was done everything went smooth as planned; Learnign cRUL was also challenging"
				},
				{
					name: "House Game",
					photo:"img/projImg/housegame.jpg",
					description:"This project utilizes Linked list data structure and generic linked bag.\
								In this project you will travel to different locations in a house and using singly linked list all the houses are mapped.\
								Based on where you are in a house, program will give you available options to choose from and move forward.\
								This project has many game implementations, one of them is to create a game, collect most points in fewer steps.",
					techUsed:"Java",
					problems:"Using generic class and collection framework for the first time and managing object orientation"
				}
];


function showcase(ele){
	return `
	<div class="container">
		<div class="row">
			<div class="col-sm-4">
				<img class="img-thumbnail" src="${ele.photo}">
			</div>
			<div class="col-sm-8">
			<ul class="fa-ul mb-0">
				<li>
					<i class="fa fa-angle-double-right"></i>
					<span><b>Name:</b> ${ele.name}</span>
				</li>
				<li>
					<i class="fa fa-angle-double-right"></i>
					<span><b>Description:</b> ${ele.description}</span>
				</li>
				<li>
					<i class="fa fa-angle-double-right"></i>
					<span><b>Languages:</b> ${ele.techUsed}</span>
				</li>
				<li>
					<i class="fa fa-angle-double-right"></i>
					<span><b>Difficulties:</b> ${ele.problems}</span>
				</li>
			</ul>
			</div>
		</div>
	</div>
	`
};

document.getElementById("project").innerHTML = `
${projects.map(showcase).join('')}
`