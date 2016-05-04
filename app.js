(function() {
	angular
		.module('liftApp', ['ngAnimate', 'ui.bootstrap'])
		.controller('RoutineController', function() {
			var days = Object.keys(exercises);
			var exercisesForDay = exercises[day];
			// ng-click, 
		});


	// var exerciseList = [
	// 	{
	// 		day: 'Deadlifts',
	// 		name: 'Calf Press',
	// 	},
	// 	{
	// 		day: 'Deadlifts',
	// 		name: 'Calf Press'
	// 	},
	// 	{
	// 		day: 'Deadlifts',
	// 		name: 'Calf Press'
	// 	},
	// 	{
	// 		day: 'Deadlifts',
	// 		name: 'Calf Press'
	// 	}
	// ];

	var exercises = {
		Deadlifts: [
			'Calf Press',
			'deadlift'
		],
		Arms: [
			'curl',
			'standing curl'
		]
	};


	// where to store appended set data


})();

