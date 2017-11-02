app.controller('JobController',function($scope,$location,JobService){
	
	$scope.showJobDetails=false;
	
	$scope.addJob=function(){
		JobService.addJob($scope.job).then(function(response){
			alert('Job Details Added Sucessfully')
			console.log(response.data)
			getJobs()
		$location.path('/home')
		},function(response){
			console.log(response.data)
		if(response.status==401){
			$scope.error=response.data
			$location.path('/login')
		}
		else{
			$scope.error=response.data
			$location.path('/addJob')
		}
		})
	}
$scope.getJobDetails=function(jobId){
		
		$scope.showJobDetails=true;
		
		JobService.getJobDetails(jobId).then(function(response){
			$scope.job=response.data
		},function(response){
			if(response.status==401){
				$scope.error=response.data
				$location.path('/login')
			}
		
		
		})
	}
	
	function getJobs(){
		JobService.getJobs().then(function(response){
			$scope.jobs=response.data
		},function(response){
			if(response.status==401){
				$scope.error=response.data
				$location.path('/login')
			}
		})
	}
	
	
	getJobs()



})