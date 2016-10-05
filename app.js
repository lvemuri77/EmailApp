var app=angular.module('EmailApp',[]);

app.controller('EmailController',function($scope) {
  $scope.activeTab="inbox";
  $scope.isPopupVisible = false;
  $scope.isComposePopupVisible= false;
  $scope.composeEmail = {};
  $scope.sentEmails=[];

  $scope.showPopup=function(email){
	$scope.isPopupVisible=true;
	$scope.selectedEmail=email;
  };
  $scope.closePopup=function(){
	$scope.isPopupVisible=false;
  };

  $scope.showComposePopup=function(){
    $scope.composeEmail={};
	$scope.isComposePopupVisible=true;
  };
  $scope.closeComposePopup=function(){
	$scope.isComposePopupVisible=false;
  };
  $scope.sendEmail=function(){
	$scope.isComposePopupVisible = false;
	$scope.sentEmails.splice(0,0,$scope.composeEmail);
	$scope.composeEmail.date = new Date();
    $scope.composeEmail.from="me";

  };

	$scope.replyEmail=function(){
	// hide the view details popup
    $scope.isPopupVisible = false;
    // create an empty composeEmail object the compose email popup is bound to
    $scope.composeEmail = {};
    // copy the data from selectedEmail into composeEmail
    angular.copy($scope.selectedEmail, $scope.composeEmail);

    // edit the body to prefix it with a line and the original email information
    $scope.composeEmail.body =
        "\n-------------------------------\n"
        + "from: " + $scope.composeEmail.from + "\n"
        + "sent: " + $scope.composeEmail.date + "\n"
        + "to: " + $scope.composeEmail.to + "\n"
        + "subject: " + $scope.composeEmail.subject + "\n"
        + $scope.composeEmail.body;

    // prefix the subject with “RE:”
    $scope.composeEmail.subject = "RE: " + $scope.composeEmail.subject;
    // the email is going to the person who sent it to us
    // so populate the to with from
    $scope.composeEmail.to = $scope.composeEmail.from;
    // it’s coming from us
    $scope.composeEmail.from = "me";
    // show the compose email popup
    $scope.isComposePopupVisible = true;

  };

	$scope.forwardEmail=function(){
	// hide the view details popup
    $scope.isPopupVisible = false;
    // create an empty composeEmail object the compose email popup is bound to
    $scope.composeEmail = {};
    // copy the data from selectedEmail into composeEmail
    angular.copy($scope.selectedEmail, $scope.composeEmail);

    // edit the body to prefix it with a line and the original email information
    $scope.composeEmail.body =
        "\n-------------------------------\n"
        + "from: " + $scope.composeEmail.from + "\n"
        + "sent: " + $scope.composeEmail.date + "\n"
        + "to: " + $scope.composeEmail.to + "\n"
        + "subject: " + $scope.composeEmail.subject + "\n"
        + $scope.composeEmail.body;

    // prefix the subject with “RE:”
    $scope.composeEmail.subject = "FWD: " + $scope.composeEmail.subject;
    // the email is going to the person who sent it to us
    // so populate the to with from
    $scope.composeEmail.to = "";
    // it’s coming from us
    $scope.composeEmail.from = "me";
    // show the compose email popups
    $scope.isComposePopupVisible = true;

  };


	$scope.emails = [
    {
		from: 'John',
		to: 'me',
	    subject: 'I love angular',
		date: 'Jan 1',
		body: 'hello world!'
	},
     {
            from: 'Jack',
            to: 'me',
            subject: 'Angular and I are just friends',
            date: 'Feb 15',
            body: 'just kidding'
        },
        {
            from: 'Ember',
            to: 'me',
            subject: 'I hate you Angular!',
            date: 'Dec 8',
            body: 'wassup dude'
        }
  ];


});
