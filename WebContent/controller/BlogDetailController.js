app.controller('BlogDetailController',function($scope,$location,BlogService,$routeParams){
	$scope.isRejected=false
	var blogId=$routeParams.blogId
	BlogService.getBlogById(blogId).then(function(response){
		$scope.blog=response.data
	},function(response){
		if(response.status==401)
	$location.path('/login')
	})


$scope.updateBlog=function(){
		BlogService.updateBlog($scope.blog).then(function(response){
			$location.path('/getblogs')
		},function(response){
			console.log(response.status)
			if(response.status==401)
				$location.path('/login')
		})
	}

	$scope.updateLikes=function(){
		$scope.isLiked=!$scope.isLiked
		if($scope.isLiked){
			$scope.blog.likes=$scope.blog.likes + 1
		}
		else{
			$scope.blog.likes=$scope.blog.likes - 1
		}
		BlogService.updateBlog($scope.blog).then(function(response){
			console.log(response.data)
		},function(response){
			console.log(response.status)
			if(response.status==401)
				$location.path('/login')
		})
	}
	$scope.addComment=function(){
		console.log($scope.blogComment)
		$scope.blogComment.blog=$scope.blog
		console.log($scope.blogComment)
		BlogService.addComment($scope.blogComment).then(function(response){
			console.log(response.data)
			$location.path('/getblogs')
		},function(response){
			if(response.status==401)
				$location.path('/login')
				else
					$location.path('/getBlogById/'+blogId)
		})
	}
	function getBlogComments(){
		BlogService.getBlogComments(blogId).then(function(response){
			$scope.blogComments=response.data
		},function(response){
			if(response.status==401)
				$location.path('/login')
		
		})
	}
	getBlogComments()
$scope.showRejectionTxt=function(val){
	$scope.isRejected=val
}



})