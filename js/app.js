/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener("DOMContentLoaded", function() {

	var taskInput = document.querySelector("#taskInput");
	var body = document.querySelector("body");
	var addTaskButton = document.querySelector("#addTaskButton");
	var taskList = document.querySelector("#taskList");
	var removeFinishedTasksButton = document.querySelector("#removeFinishedTasksButton");
	var counter = document.querySelector("#counter");
	var counterEl = 0;


	addTaskButton.addEventListener("click", function(event) {
		if (taskInput.value.length > 5 && taskInput.value.length < 100) {
			var isComplete = false;
			counterEl = counterEl + 1;
			counter.innerText = counterEl;
			var li = document.createElement("li");
			var h1 = document.createElement("h1");
			h1.innerText = taskInput.value;
			var buttonDelete = document.createElement("button");
			buttonDelete.innerText = "Delete";
			var buttonComplete = document.createElement("button");
			buttonComplete.innerText = "Complete";
			li.appendChild(h1);
			li.appendChild(buttonDelete);
			li.appendChild(buttonComplete);
			taskList.appendChild(li);
			taskInput.value = " ";

		   

			buttonComplete.addEventListener("click", function(event) {
				h1.classList.toggle("done");
				isComplete = true;
			});

			buttonDelete.addEventListener("click", function(event) {
				taskList.removeChild(li);
				counter = counter -1;
			});

			removeFinishedTasksButton.addEventListener("click", function(event) {
				if (isComplete === true) {
					taskList.removeChild(li);
				}
			});
		}
		else {
			window.alert("Długość tekstu musi być większa niż 5 liter i krótsza niż 100");
		}
	});
});



// var newButton = document.createElement("button");
//       newButton.classList.add("close");
//       newButton.innerText = "Close";
//       newDiv.appendChild(newImg);
//       newDiv.appendChild(newButton);
//       body.appendChild(newDiv);






