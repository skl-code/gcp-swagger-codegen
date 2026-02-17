# NedapOnsApi.MovesWorkingEmployeeReportApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**movesWorkingEmployeeReportAPIBetween**](MovesWorkingEmployeeReportApi.md#movesWorkingEmployeeReportAPIBetween) | **GET** /v0/plannen_roosteren/working_employee_report | Return the list of Employee ids working within the specified period.

<a name="movesWorkingEmployeeReportAPIBetween"></a>
# **movesWorkingEmployeeReportAPIBetween**
> MovesWorkingEmployeeReport movesWorkingEmployeeReportAPIBetween(startDatetime, endDatetime)

Return the list of Employee ids working within the specified period.

Working according to the planning.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesWorkingEmployeeReportApi();
let startDatetime = new Date("2013-10-20T19:20:30+01:00"); // Date | The start of the requested period
let endDatetime = new Date("2013-10-20T19:20:30+01:00"); // Date | The end of the requested period (exclusive)

apiInstance.movesWorkingEmployeeReportAPIBetween(startDatetime, endDatetime, (error, data, response) => {
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

[**MovesWorkingEmployeeReport**](MovesWorkingEmployeeReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

