var app=angular.module("app",['ngRoute','ngCookies'])




app.config(function($routeProvider){
	
	$routeProvider
	
	
	.when('/register',{
		templateUrl:'views/register.html',
		controller:'UserController'
	})
	.when('/home',{
		templateUrl:'views/home.html',
		controller:'HomeController'
	})
	.when('/login',{
		templateUrl:'views/login.html',
		controller:'UserController'
	})
	.when('/editprofile',{
		templateUrl:'views/editprofile.html',
		controller:'UserController'
	})
	.when('/createblog',{
		templateUrl:'views/blog.html',
		controller:'BlogController'
	})
	.when('/getblogs',{
		templateUrl:'views/blogslist.html',
		controller:'BlogController'
	})
	.when('/getBlogById/:blogId',{
		templateUrl:'views/blogdetails.html',
		controller:'BlogDetailController'
	})
	.when('/getapprovalform/:blogId',{
		templateUrl:'views/blogapprovalform.html',
		controller:'BlogDetailController'
	})
	.when('/addJob',{
		templateUrl:'views/job.html',
		controller:'JobController'
	})
	.when('/getJobs',{
		templateUrl:'views/joblist.html',
		controller:'JobController'
	})
	.when('/profilepic',{
		templateUrl:'views/profilepic.html'
	})
	.when('/getSuggestedUser',{
		templateUrl:'views/suggesteduser.html',
		controller:'FriendController'
	})
	.when('/pendingRequest',{
		templateUrl:'views/pendingrequest.html',
		controller:'FriendController'
	})
	.when('/chat',{
		templateUrl:'views/chat.html',
		controller:'ChatController'
	})
		
	
	.otherwise({
		templateUrl:'views/home.html',
			
	})

})
app.run(function($rootScope,$cookieStore,UserService,$location,BlogService){
	console.log("logout 2")
	if($rootScope.currentUser==undefined)
		$rootScope.currentUser=$cookieStore.get('userDetails')
		
		$rootScope.logout=function(){
		console.log("logout")
		UserService.logout().then(function(response){
			console.log("logout 1")
			delete $rootScope.currentUser;
			$cookieStore.remove('userDetails')
			$location.path('/login')
	
		},function(response){
			console.log(response.status)
			if(response.status==401){
				console.log("error in logout")
				delete $rootScope.currentUser
				$cookieStore.remove('userDetails')
				$location.path('/login')
			}
		
		
		})
	}
	BlogService.getNotification().then(function(response){
		$rootScope.blogApprovalStatus=response.data 
		$rootScope.approvalStatusLength=$rootScope.blogApprovalStatus.length  
	},function(response){
		if(response.status==401)
			$location.path('/login')
	})
	
	$rootScope.updateViewedStatus=function(blog){
		blog.viewed=1
		BlogService.updateBlog(blog).then(function(response){
			getNotification();
		},function(response){
			if(response.status==401)
				$location.path('/login')
		})
	}
	
})


