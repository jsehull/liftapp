(function() {
	angular
		.module('liftApp', ['ngAnimate', 'ui.bootstrap'])
		.controller('DropdownController', function() {
			this.routine = menuData;
		})
		/// future use for new input area ///
		.controller('SetController', function() {
			// this.setInput = setData;

		});

	var menuData = {
		arms: {
			name: 'Arms',
			exerciseType: [
				'Sit Down Curls',
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
	}

	// var setData = {
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