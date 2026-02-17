# NedapOnsApi.PayrollWorkLoadApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payrollWorkLoadAPIByEmployeeInYear**](PayrollWorkLoadApi.md#payrollWorkLoadAPIByEmployeeInYear) | **GET** /v0/administration/work_load/by_employee_in_year/{employee_object_id} | Retrieves the workload for the given year and employee.

<a name="payrollWorkLoadAPIByEmployeeInYear"></a>
# **payrollWorkLoadAPIByEmployeeInYear**
> PayrollWorkLoad payrollWorkLoadAPIByEmployeeInYear(employeeObjectId, year)

Retrieves the workload for the given year and employee.

When the work load is requested for the current year, the result will be given until last Sunday.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollWorkLoadApi();
let employeeObjectId = 56; // Number | 
let year = 56; // Number | 

apiInstance.payrollWorkLoadAPIByEmployeeInYear(employeeObjectId, year, (error, data, response) => {
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
 **employeeObjectId** | **Number**|  | 
 **year** | **Number**|  | 

### Return type

[**PayrollWorkLoad**](PayrollWorkLoad.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

