(function() {
	angular
		.module('liftApp', ['ngAnimate', 'ui.bootstrap'])
		.controller('DropdownController', function() {
			this.routine = menuData;
		})
		.controller('HistoryController', function() {
			// gets static history
			this.histRows = setHistory;

			// logs day of week
			this.workoutDate = dayOfWeek();
			function dayOfWeek(){
				var date = new Date();
				var today = date.getDay();
				var arrayDays = [
					'Sunday',
					'Monday',
					'Tuesday',
					'Wednesday',
					'Thursday',
					'Friday',
					'Saturday'
				];
				return arrayDays[today];
			};

			// pushes new sets onto history
			this.setWeight = [];
			this.submit = function(){
				setHistory.push(this.setWeight);
			};

		});

	var menuData = {
		arms: {
			name: 'Arms',
			exerciseType: [
				'Sit Down Curls',
				// objects sit-down-curls
				'Single Overheads',
	      'Standing Curl Dumbells',
	      'Kickbacks',
	      'Hammer Curls',
	      'Skull Crushers',
	      'Rope Down',
	      'Standing Bar Curls'
			]
		},
    deadlifts: {
    	name: 'Deadlifts',
    	exerciseType: [
				'Calf Press',
				'Deadlifts',
	      'Forearm Front',
	      'Forearm Back'
			]
		},
    chest: {
    	name: 'Chest',
    	exerciseType: [
				'Flat Bench',
	      'Mid Press',
	      'Decline Press',
	      'Incline Bench',
	      'Flys'
			]
		},
    back: {
    	name: 'Back',
    	exerciseType: [
				'Wide Rows',
				'Behind Head Lat Pull',
	      'Close Rows',
	      'Frontside Lat Pull',
	      'Rear Delt Rope Pull'
			]
		},
    legs: {
    	name: 'Legs',
    	exerciseType: [
				'Seated Calf Raises',
				'Squats',
	      'Front Squats',
	      'Leg Curls',
	      'Leg Extensions'
			]
		},
    shoulders: {
    	name: 'Shoulders',
    	exerciseType: [
				'Single Arm Raises',
	      'Bent Over Raises',
	      'Front Arm Raises (bar)',
	      'Dumbell Press',
	      'Shrugs',
	      'Chin Raises'
			]
		}
	};

	var setHistory = [
		['40/10', '90/10', '140/8'],
		['40/10', '90/10', '140/10'],
		['50/10', '100/10', '150/6'],
		['50/10', '100/10', '150/8'],
		['50/10', '100/10', '150/10'],
		['60/10', '110/10', '160/6']
	];



	


//var setDataDUPLICATE = {
	// 	unique1: {
	// 		date: x,
	// 		day: 'Arms',
	// 		exerciseType: 'standing-curl-dumbell',
	// 		orderNum: 1,
	// 		weight: 10,
	// 		reps: 10,
	// 	},
	// 	unique2: {
	// 		date: x,
	// 		day: 'Arms',
	// 		exerciseType: 'standing-curl-dumbell',
	// 		orderNum: 2,
	// 		weight: 20,
	// 		reps: 10,
	// 	},
	// 	unique3: {
	// 		date: x,
	// 		day: 'Arms',
	// 		exerciseType: 'standing-curl-dumbell',
	// 		orderNum: 3,
	// 		weight: 30,
	// 		reps: 10,
	// 	},
	// 	unique4: {
	// 		date: x,
	// 		day: 'Arms',
	// 		exerciseType: 'standing-curl-dumbell',
	// 		orderNum: 4,
	// 		weight: 0,
	// 		reps: 0,
	// 	},
	// 	unique5: {
	// 		date: x,
	// 		day: 'Arms',
	// 		exerciseType: 'standing-curl-dumbell',
	// 		orderNum: 5,
	// 		weight: 0,
	// 		reps: 0,
	// 	}
	// }




	// where to store appended set data


})();