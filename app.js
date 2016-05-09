(function() {
	angular
		.module('liftApp', ['ngAnimate', 'ui.bootstrap'])
		.controller('DropdownController', DropdownController)
		.controller('HistoryController', HistoryController)
		.constant('menuData', {
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
		});

	function DropdownController(menuData) {
		this.routine = menuData;
	}

	function HistoryController() {
		// creates empty array for input ng-models
		this.sets = []
		this.set = {};

		// ADD + DELETE new sets onto history
		this.submit = function(){
			this.sets.push(this.set);
			this.set = {};
		};
		this.undo = function(){
			if (confirm('Okay to delete your last set?')) {
				this.sets.pop();
			};
		};
	}
})();