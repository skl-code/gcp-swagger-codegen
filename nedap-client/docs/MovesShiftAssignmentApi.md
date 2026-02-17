# NedapOnsApi.MovesShiftAssignmentApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**movesShiftAssignmentAPIStartingBetween**](MovesShiftAssignmentApi.md#movesShiftAssignmentAPIStartingBetween) | **GET** /v0/plannen_roosteren/shift_assignments/starting_between | Return all the shift assignments starting within the specified period
[**movesShiftAssignmentAPIUpcomingForEmployee**](MovesShiftAssignmentApi.md#movesShiftAssignmentAPIUpcomingForEmployee) | **GET** /v0/plannen_roosteren/employees/{employee_id}/shift_assignments/upcoming | Return the first upcoming shift assignment of an Employee specified by id

<a name="movesShiftAssignmentAPIStartingBetween"></a>
# **movesShiftAssignmentAPIStartingBetween**
> MovesListShiftAssignmentList movesShiftAssignmentAPIStartingBetween(startDatetime, endDatetime)

Return all the shift assignments starting within the specified period

The requested period must be 1 hour or less

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesShiftAssignmentApi();
let startDatetime = new Date("2013-10-20T19:20:30+01:00"); // Date | The start of the requested period
let endDatetime = new Date("2013-10-20T19:20:30+01:00"); // Date | The end of the requested period (exclusive)

apiInstance.movesShiftAssignmentAPIStartingBetween(startDatetime, endDatetime, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDatetime** | **Date**| The start of the requested period | 
 **endDatetime** | **Date**| The end of the requested period (exclusive) | 

### Return type

[**MovesListShiftAssignmentList**](MovesListShiftAssignmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="movesShiftAssignmentAPIUpcomingForEmployee"></a>
# **movesShiftAssignmentAPIUpcomingForEmployee**
> MovesListShiftAssignmentList movesShiftAssignmentAPIUpcomingForEmployee(employeeId)

Return the first upcoming shift assignment of an Employee specified by id

The response is a list of shift assignments of length 1

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesShiftAssignmentApi();
let employeeId = 789; // Number | The {id} of the requested Employee

apiInstance.movesShiftAssignmentAPIUpcomingForEmployee(employeeId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employeeId** | **Number**| The {id} of the requested Employee | 

### Return type

[**MovesListShiftAssignmentList**](MovesListShiftAssignmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

