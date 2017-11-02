app.controller('BlogController',function($scope,BlogService,$location){
	$scope.addblog=function(){
		BlogService.addblog($scope.blog).then(function(response){
			alert('Blog added and waiting for Approval')
	$location.path('/home')
		},function(response){
			$scope.error=response.data
			if(resonse.status==401)
				$location.path('/login')
				else
					$location.path('/addblog')	
		})
	}
	function blogsApproved(){
		console.log("entering")
		BlogService.blogsApproved().then(function(response){
			
			$scope.listOfBlogsApproved=response.data
			console.log(response.status)
		},function(response){
		if(response.status==401)
			$location.path('/login')
		
		
		})
	}
	function blogsWaitingForApproval(){
		console.log("entering 2")
		BlogService.blogsWaitingForApproval().then(function(response){
			
			$scope.listOfBlogsWaitingForApproval=response.data
			console.log(response.status)
		},function(response){
		if(response.status==401)
			$location.path('/login')
		})
	}
	blogsApproved()
	blogsWaitingForApproval()
})