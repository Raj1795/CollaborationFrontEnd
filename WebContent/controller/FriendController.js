app.controller('FriendController',function($scope,$location,FriendService,$rootScope)
		{
	function listOfSuggestedUsers(){
		
		FriendService.listOfSuggestedUsers().then(function(response){
			$scope.suggestedUser=response.data
		},function(response){
		if(response.status==401){
			$location.path('/login')
		}
		})
	}
	$scope.sendRequest=function(toId){
		FriendService.sendRequest(toId).then(function(response){
			alert('Request Sent Successfully')
			$location.path('/getSuggestedUser')
		},function(response){
			if(response.status==401){
				$location.path('/login')
			}
			})
	}
	function pendingRequest(){
		FriendService.pendingRequest().then(function(response){
			$scope.pendingRequest=response.data
			$rootScope.pendingRequestLength=$scope.pendingRequest.length  
		},function(response){
		if(response.status==401){
			$location.path('/login')
		}
		})
	}
	$scope.updateRequest=function(request,statusValue){
		request.status=statusValue
		FriendService.updateRequest(request).then(function(request){
		pendingRequest()
		$location.path('/home')
		},function(response){
			
			if(response.status==401){
				$location.path('/login')
			}
		})
		
		}
	
	pendingRequest()
	listOfSuggestedUsers()
})