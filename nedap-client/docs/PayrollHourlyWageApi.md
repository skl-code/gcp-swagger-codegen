# NedapOnsApi.PayrollHourlyWageApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payrollHourlyWageAPIByEmployee**](PayrollHourlyWageApi.md#payrollHourlyWageAPIByEmployee) | **GET** /v0/administration/hourly_wages/by_employee/{employee_object_id} | Retrieves all the hourly wages of the employee.
[**payrollHourlyWageAPIById**](PayrollHourlyWageApi.md#payrollHourlyWageAPIById) | **GET** /v0/administration/hourly_wages/{id} | Return the Hourly Wage corresponding to the given id
[**payrollHourlyWageAPIStreamAll**](PayrollHourlyWageApi.md#payrollHourlyWageAPIStreamAll) | **GET** /v0/xstream/hourly_wages/data | Return all Hourly wages odels in a streaming manner
[**payrollHourlyWageAPIStreamUpdates**](PayrollHourlyWageApi.md#payrollHourlyWageAPIStreamUpdates) | **GET** /v0/xstream/hourly_wages/updates | Return all Hourly wages models which where updated since the date given in the request.

<a name="payrollHourlyWageAPIByEmployee"></a>
# **payrollHourlyWageAPIByEmployee**
> PayrollListHourlyWageList payrollHourlyWageAPIByEmployee(employeeObjectId)

Retrieves all the hourly wages of the employee.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollHourlyWageApi();
let employeeObjectId = 789; // Number | 

apiInstance.payrollHourlyWageAPIByEmployee(employeeObjectId, (error, data, response) => {
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

### Return type

[**PayrollListHourlyWageList**](PayrollListHourlyWageList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="payrollHourlyWageAPIById"></a>
# **payrollHourlyWageAPIById**
> PayrollHourlyWage payrollHourlyWageAPIById(id)

Return the Hourly Wage corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollHourlyWageApi();
let id = 789; // Number | used for selecting HourlyWage

apiInstance.payrollHourlyWageAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting HourlyWage | 

### Return type

[**PayrollHourlyWage**](PayrollHourlyWage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="payrollHourlyWageAPIStreamAll"></a>
# **payrollHourlyWageAPIStreamAll**
> PayrollListHourlyWageList payrollHourlyWageAPIStreamAll()

Return all Hourly wages odels in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollHourlyWageApi();
apiInstance.payrollHourlyWageAPIStreamAll((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PayrollListHourlyWageList**](PayrollListHourlyWageList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="payrollHourlyWageAPIStreamUpdates"></a>
# **payrollHourlyWageAPIStreamUpdates**
> PayrollListHourlyWageList payrollHourlyWageAPIStreamUpdates(since)

Return all Hourly wages models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollHourlyWageApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.payrollHourlyWageAPIStreamUpdates(since, (error, data, response) => {
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
 **since** | **Date**|  | 

### Return type

[**PayrollListHourlyWageList**](PayrollListHourlyWageList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

