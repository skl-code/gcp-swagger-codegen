# NedapOnsApi.MovesNavigationAvailabilityApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**movesNavigationAvailabilityAPIByEmployeeId**](MovesNavigationAvailabilityApi.md#movesNavigationAvailabilityAPIByEmployeeId) | **GET** /v0/plannen_roosteren/employees/{employee_id}/navigation_availabilities | Return the navigation availabilities of an employee specified by id.

<a name="movesNavigationAvailabilityAPIByEmployeeId"></a>
# **movesNavigationAvailabilityAPIByEmployeeId**
> MovesListNavigationAvailabilityList movesNavigationAvailabilityAPIByEmployeeId(employeeId)

Return the navigation availabilities of an employee specified by id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesNavigationAvailabilityApi();
let employeeId = 789; // Number | The {id} of the requested Employee

apiInstance.movesNavigationAvailabilityAPIByEmployeeId(employeeId, (error, data, response) => {
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

[**MovesListNavigationAvailabilityList**](MovesListNavigationAvailabilityList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

