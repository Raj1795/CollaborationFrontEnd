app.controller('UserController',function($scope,UserService,$location,$rootScope,$cookieStore){
	$scope.register=function(){
		
	console.log("USER DATA IS"+$scope.user)
		UserService.register($scope.user).then(function(response){
			console.log(response.data)
			console.log(response.status)
			alert('submitted sucessfully')
			$location.path('/home')
		},function(response){
			console.log(response.data)
			console.log(response.status)
			$scope.error=response.data
			$location.path('/register')
		
		})
		}
	$scope.login=function(){
		console.log("USER DATA IS"+$scope.user)
		UserService.login($scope.user).then(function(response){
			$rootScope.currentUser=response.data
			console.log(response.data)
			$cookieStore.put('userDetails',response.data)
			$location.path('/home')
		},function(response){
			
			$scope.error=response.data.message
			$location.path('/login')
		
		})
	}
	$scope.updateUser=function(){
		console.log("entering is")
		UserService.updateUser($scope.user).then(function(response){
			alert('updated')
			$location.path('/home')
		},function(response){
		if(response.status==401){
			$location.path('/login')
		}	
		else{
			$scope.error=response.data
			$location.path('/editprofile')}
		})
	}
	if($rootScope.currentUser!=undefined){
		UserService.getUser().then(function(response){
			$scope.user=response.data
		},function(response){
			console.log(response.status)
		
		
		})
		
	}
})
	

