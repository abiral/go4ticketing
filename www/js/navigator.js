jQuery(document).on('init', function(event){
	var page = event.target;
	/*
		event is an argument for the callback function of event listener. 
		
		event.target has the current page - page you see when you open the application 
		also when you navigate the pages in the application
	*/

	var navigator = document.getElementById('navigator');

	switch(page.id){
		case 'home':
			jQuery(document).on('tap', '#log-me-in', function(event){ //Event listener for navigating to login page
				navigator.pushPage('login.html');
			});

			jQuery(document).on('tap', '#sign-me-up', function(event){ //Event listener for navigating to signup page
				navigator.pushPage('signup.html');
			});

		break;


		case 'login':
			jQuery(document).on('tap', '#btn-login', function(event){ //Event Listener for login
				var username = jQuery('#username').val(); // get username from form element
				var password = jQuery('#password').val(); // get password from form element
				var isValidUser = verifyUser(username, password);
				if(isValidUser){
					navigator.pushPage('dashboard.html');
				}else{
					ons.notification.alert('Invalid username or password', {title:"Login Error"});
				}
			});
		break;

		case 'signup':
			jQuery(document).on('tap', '#btn-register', function(event){ //Event Listener for register button
				ons.notification.alert('Thank you for registering. Please proceed further', {title:"Registered Successfully"});
				navigator.pushPage('dashboard.html');
			});
		break;

		case 'dashboard':
			jQuery(document).on('tap', '.proceed-to-2', function(event){ //Event listener for navigating to step 2
				var location = jQuery('#location').val();
				if(location == ""){
					ons.notification.alert('Please select your location first', {title:"Locaiton Not Selected"});
				}else{
					navigator.pushPage('step2.html');
				}
			});
		break;

		
		case 'step2':

			jQuery(document).on('tap', '.seat:not(.occupied)', function(event){ //Event Listener to select the seats
				jQuery(this).toggleClass('selected');
			});

			jQuery(document).on('tap', '#btn-pay', function(event){ //Event listener for navigating to step 2
				navigator.pushPage('step3.html');
			});
		break;

		case 'step3':
			var orderID = Math.floor((Math.random() * 10000) + 2475); // Generating random order ID from 2,475 to 10,000
			jQuery('#order-number').text(orderID);
		break;
	}
});