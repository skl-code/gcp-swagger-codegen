# NedapOnsApi.MovesEmployeePlanningApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**movesEmployeePlanningAPIPlanningByEmployeeId**](MovesEmployeePlanningApi.md#movesEmployeePlanningAPIPlanningByEmployeeId) | **GET** /v0/plannen_roosteren/employees/{employee_id}/planning | Returns the Planning for the given Employee for the requested period.
[**movesEmployeePlanningAPIRosterByEmployeeId**](MovesEmployeePlanningApi.md#movesEmployeePlanningAPIRosterByEmployeeId) | **GET** /v0/plannen_roosteren/employees/{employee_id}/roster | Returns the Roster for the given Employee for the requested period.

<a name="movesEmployeePlanningAPIPlanningByEmployeeId"></a>
# **movesEmployeePlanningAPIPlanningByEmployeeId**
> MovesEmployeePlanning movesEmployeePlanningAPIPlanningByEmployeeId(employeeId, _date)

Returns the Planning for the given Employee for the requested period.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesEmployeePlanningApi();
let employeeId = 789; // Number | The {id} of the requested Employee
let _date = new Date("2013-10-20"); // Date | The start date of the period.

apiInstance.movesEmployeePlanningAPIPlanningByEmployeeId(employeeId, _date, (error, data, response) => {
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
 **_date** | **Date**| The start date of the period. | 

### Return type

[**MovesEmployeePlanning**](MovesEmployeePlanning.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="movesEmployeePlanningAPIRosterByEmployeeId"></a>
# **movesEmployeePlanningAPIRosterByEmployeeId**
> MovesListEmployeeRosterDayList movesEmployeePlanningAPIRosterByEmployeeId(employeeId, from, to)

Returns the Roster for the given Employee for the requested period.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesEmployeePlanningApi();
let employeeId = 789; // Number | The {id} of the requested Employee
let from = new Date("2013-10-20"); // Date | The start date of the period.
let to = new Date("2013-10-20"); // Date | The end date of the period (exclusive).

apiInstance.movesEmployeePlanningAPIRosterByEmployeeId(employeeId, from, to, (error, data, response) => {
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
 **from** | **Date**| The start date of the period. | 
 **to** | **Date**| The end date of the period (exclusive). | 

### Return type

[**MovesListEmployeeRosterDayList**](MovesListEmployeeRosterDayList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

