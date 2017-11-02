app.factory('UserService',function($http){
	var userService={}
var Base_URL="http://localhost:8082/CollaborateRestfulService"
	userService.register=function(user){
		return $http.post(Base_URL+"/register",user)
	}
userService.login=function(user){
	return $http.post(Base_URL+"/login",user)
}
userService.logout=function(){
	return $http.put(Base_URL+"/logout")
}
userService.getUser=function(){
	return $http.get(Base_URL+"/getUser")
}
userService.updateUser=function(user){
	return $http.put(Base_URL+"/updateUser",user)
}
return userService;
})