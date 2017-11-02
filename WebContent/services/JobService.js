app.factory('JobService',function($http){
	var jobService={}
	var Base_URL="http://localhost:8082/CollaborateRestfulService"
	
		jobService.addJob=function(job){
		return $http.post(Base_URL+"/addJob",job)
	}
	jobService.getJobs=function(){
		return $http.get(Base_URL+"/getJobs")
	}
	jobService.getJobDetails=function(jobId){
		return $http.get(Base_URL+"/getJobDetails/"+jobId)
	}
	return jobService
})