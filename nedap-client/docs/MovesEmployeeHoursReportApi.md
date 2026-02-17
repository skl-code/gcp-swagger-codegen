# NedapOnsApi.MovesEmployeeHoursReportApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**movesEmployeeHoursReportAPIByEmployeeId**](MovesEmployeeHoursReportApi.md#movesEmployeeHoursReportAPIByEmployeeId) | **GET** /v0/plannen_roosteren/employees/{employee_id}/hours_report | Return a report of the worked and leave hours of an employee in the current state and the future.

<a name="movesEmployeeHoursReportAPIByEmployeeId"></a>
# **movesEmployeeHoursReportAPIByEmployeeId**
> MovesEmployeeHoursReport movesEmployeeHoursReportAPIByEmployeeId(employeeId)

Return a report of the worked and leave hours of an employee in the current state and the future.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesEmployeeHoursReportApi();
let employeeId = 789; // Number | The id of the requested Employee

apiInstance.movesEmployeeHoursReportAPIByEmployeeId(employeeId, (error, data, response) => {
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
 **employeeId** | **Number**| The id of the requested Employee | 

### Return type

[**MovesEmployeeHoursReport**](MovesEmployeeHoursReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

