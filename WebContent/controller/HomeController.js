app.controller('HomeController',function(BlogService,$rootScope,$location){
	function getNotification(){
		
		BlogService.getNotification().then(function(response){
			$rootScope.blogApprovalStatus=response.data 
			$rootScope.approvalStatusLength=$rootScope.blogApprovalStatus.length  
			console.log(approvalStatusLength)
		},function(response){
			if(response.status==401)
				$location.path('/login')
		})
	}
	
	$rootScope.updateViewedStatus=function(blog){
		blog.viewed=1
		BlogService.updateBlog(blog).then(function(response){
			getNotification();
		},function(response){
			if(response.status==401)
				$location.path('/login')
		})
	}
	
	$rootScope.updateLength=function()
	{
		$rootScope.approvalStatusLength=0
	}
	getNotification()
})