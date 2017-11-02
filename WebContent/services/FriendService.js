app.factory('FriendService',function($http){

	var friendService={}
var Base_URL="http://localhost:8082/CollaborateRestfulService"
	
	friendService.listOfSuggestedUsers=function(){
		return $http.get(Base_URL+"/getsuggestedusers")
	}

	friendService.sendRequest=function(toId){
		return $http.get(Base_URL+"/friendRequest/"+toId)
	}

	friendService.pendingRequest=function(){
		return $http.get(Base_URL+"/pendingRequest")
	}
	friendService.updateRequest=function(request){
		return $http.put(Base_URL+"/updateRequest",request)
	}

return friendService;








})