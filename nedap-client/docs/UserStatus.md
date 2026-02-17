# NedapOnsApi.UserStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userLoginAllowed** | **Boolean** | true if the user is allowed to log in | [optional] 
**loginDescription** | **String** | describes why the user can (not) log in | [optional] 
**type** | **String** | describes the state as enum name - APPLICATION_LOCK_DOWN - CONTRACT_REQUIRED_USER_NEEDS_NO_CONTRACT - CONTRACT_REQUIRED_USER_HAS_ACTIVE_CONTRACT - CONTRACT_REQUIRED_USER_HAS_ACTIVE_CONTRACT_IN_NEAR_FUTURE - CONTRACT_REQUIRED_USER_HAS_NO_ACTIVE_CONTRACT_IN_NEAR_FUTURE - CONTRACT_REQUIRED_USER_HAS_NO_CONTRACTS - CONTRACT_NOT_REQUIRED_USER_HAS_CONTRACT_WITH_NO_ENDDATE - CONTRACT_NOT_REQUIRED_USER_HAS_NO_CONTRACTS - CONTRACT_NOT_REQUIRED_USER_HAS_ACTIVE_CONTRACT - CONTRACT_NOT_REQUIRED_USER_HAS_NO_ACTIVE_CONTRACT | [optional] 
