# NedapOnsApi.EmployeeWorkflowApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**employeeWorkflowAPISetTimesheetSubmitDate**](EmployeeWorkflowApi.md#employeeWorkflowAPISetTimesheetSubmitDate) | **PUT** /v0/administration/employee_workflows/{employee_id}/timesheet_submit_date | 
[**employeeWorkflowAPISetTimesheetSubmitDateAuthorized**](EmployeeWorkflowApi.md#employeeWorkflowAPISetTimesheetSubmitDateAuthorized) | **PUT** /v0/administration/employee_workflows/{employee_id}/timesheet_submit_date_authorized | 

<a name="employeeWorkflowAPISetTimesheetSubmitDate"></a>
# **employeeWorkflowAPISetTimesheetSubmitDate**
> employeeWorkflowAPISetTimesheetSubmitDate(employeeId, submitDate)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.EmployeeWorkflowApi();
let employeeId = 789; // Number | id
let submitDate = new Date("2013-10-20"); // Date | 

apiInstance.employeeWorkflowAPISetTimesheetSubmitDate(employeeId, submitDate, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employeeId** | **Number**| id | 
 **submitDate** | **Date**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="employeeWorkflowAPISetTimesheetSubmitDateAuthorized"></a>
# **employeeWorkflowAPISetTimesheetSubmitDateAuthorized**
> employeeWorkflowAPISetTimesheetSubmitDateAuthorized(employeeId, submitDate)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.EmployeeWorkflowApi();
let employeeId = 789; // Number | id
let submitDate = new Date("2013-10-20"); // Date | 

apiInstance.employeeWorkflowAPISetTimesheetSubmitDateAuthorized(employeeId, submitDate, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employeeId** | **Number**| id | 
 **submitDate** | **Date**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

