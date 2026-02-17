# NedapOnsApi.PayrollPayableHoursAverageApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payrollPayableHoursAverageAPIOnDayOfWeekInPeriod**](PayrollPayableHoursAverageApi.md#payrollPayableHoursAverageAPIOnDayOfWeekInPeriod) | **GET** /v0/administration/payable_hours_averages/on_day_of_week_in_period/{employee_id} | Get the average payable hours for a given day of the week, for the specified employee and the requested period (inclusive).
[**payrollPayableHoursAverageAPIOnDaysOfWeekInPeriod**](PayrollPayableHoursAverageApi.md#payrollPayableHoursAverageAPIOnDaysOfWeekInPeriod) | **GET** /v0/administration/payable_hours_averages/on_days_of_week_in_period/{employee_id} | Get the average payable hours for the given days of the week, for the specified employee and the requested period (inclusive).
[**payrollPayableHoursAverageAPIPerDayInPeriod**](PayrollPayableHoursAverageApi.md#payrollPayableHoursAverageAPIPerDayInPeriod) | **GET** /v0/administration/payable_hours_averages/per_day_in_period/{employee_id} | Get the average payable hours per day, for the specified employee and the requested period (inclusive).
[**payrollPayableHoursAverageAPIPerWeekInPeriod**](PayrollPayableHoursAverageApi.md#payrollPayableHoursAverageAPIPerWeekInPeriod) | **GET** /v0/administration/payable_hours_averages/per_week_in_period/{employee_id} | Get the average payable hours per week, for the specified employee and the requested period (inclusive).

<a name="payrollPayableHoursAverageAPIOnDayOfWeekInPeriod"></a>
# **payrollPayableHoursAverageAPIOnDayOfWeekInPeriod**
> PayrollPayableHoursAverage payrollPayableHoursAverageAPIOnDayOfWeekInPeriod(employeeId, opts)

Get the average payable hours for a given day of the week, for the specified employee and the requested period (inclusive).

use {@link #onDaysOfWeekInPeriod(Long, LocalDate, LocalDate, List, List)} instead The default period is last thirteen weeks. Only payable hours are included. Shifts are not automatically payable hours. Only the parts of the shift for which active work was booked. We include payrolling, vacation, sick leave, PLB vacation, LFB, moved shifts, moved shift day off, calls during shifts, and overtime.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollPayableHoursAverageApi();
let employeeId = 789; // Number | 
let opts = { 
  'validFrom': new Date("2013-10-20"), // Date | 
  'validTo': new Date("2013-10-20"), // Date | 
  'dayOfWeek': 56, // Number | ISO8601 day of week number, where Monday (1) is the first day of the week, and Sunday (7) is the last. {@see java.time.DayOfWeek}
  'hourTypeId': [3.4], // [Number] | array style id's: hour_type_id=1&hour_type_id=2&etc
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.payrollPayableHoursAverageAPIOnDayOfWeekInPeriod(employeeId, opts, (error, data, response) => {
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
 **employeeId** | **Number**|  | 
 **validFrom** | **Date**|  | [optional] 
 **validTo** | **Date**|  | [optional] 
 **dayOfWeek** | **Number**| ISO8601 day of week number, where Monday (1) is the first day of the week, and Sunday (7) is the last. {@see java.time.DayOfWeek} | [optional] 
 **hourTypeId** | [**[Number]**](Number.md)| array style id&#x27;s: hour_type_id&#x3D;1&amp;hour_type_id&#x3D;2&amp;etc | [optional] 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**PayrollPayableHoursAverage**](PayrollPayableHoursAverage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="payrollPayableHoursAverageAPIOnDaysOfWeekInPeriod"></a>
# **payrollPayableHoursAverageAPIOnDaysOfWeekInPeriod**
> PayrollListPayableHoursAverageList payrollPayableHoursAverageAPIOnDaysOfWeekInPeriod(employeeId, opts)

Get the average payable hours for the given days of the week, for the specified employee and the requested period (inclusive).

The default period is last thirteen weeks. Only payable hours are included. Shifts are not automatically payable hours. Only the parts of the shift for which active work was booked. We include payrolling, vacation, sick leave, PLB vacation, LFB, moved shifts, moved shift day off, calls during shifts, and overtime.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollPayableHoursAverageApi();
let employeeId = 789; // Number | 
let opts = { 
  'validFrom': new Date("2013-10-20"), // Date | 
  'validTo': new Date("2013-10-20"), // Date | 
  'dayOfWeek': [3.4], // [Number] | ISO8601 day of week number, where Monday (1) is the first day of the week, and Sunday (7) is the last. {@see java.time.DayOfWeek}
  'hourTypeId': [3.4], // [Number] | array style id's: hour_type_id=1&hour_type_id=2&etc
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.payrollPayableHoursAverageAPIOnDaysOfWeekInPeriod(employeeId, opts, (error, data, response) => {
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
 **employeeId** | **Number**|  | 
 **validFrom** | **Date**|  | [optional] 
 **validTo** | **Date**|  | [optional] 
 **dayOfWeek** | [**[Number]**](Number.md)| ISO8601 day of week number, where Monday (1) is the first day of the week, and Sunday (7) is the last. {@see java.time.DayOfWeek} | [optional] 
 **hourTypeId** | [**[Number]**](Number.md)| array style id&#x27;s: hour_type_id&#x3D;1&amp;hour_type_id&#x3D;2&amp;etc | [optional] 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**PayrollListPayableHoursAverageList**](PayrollListPayableHoursAverageList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="payrollPayableHoursAverageAPIPerDayInPeriod"></a>
# **payrollPayableHoursAverageAPIPerDayInPeriod**
> PayrollPayableHoursAverage payrollPayableHoursAverageAPIPerDayInPeriod(employeeId, opts)

Get the average payable hours per day, for the specified employee and the requested period (inclusive).

The default period is the last thirteen weeks. Only payable hours are included. Shifts are not automatically payable hours. Only the parts of the shift for which active work was booked. We include payrolling, vacation, sick leave, PLB vacation, LFB, moved shifts, moved shift day off, calls during shifts, and overtime.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollPayableHoursAverageApi();
let employeeId = 789; // Number | 
let opts = { 
  'validFrom': new Date("2013-10-20"), // Date | 
  'validTo': new Date("2013-10-20"), // Date | 
  'hourTypeId': [3.4], // [Number] | array style id's: hour_type_id=1&hour_type_id=2&etc
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.payrollPayableHoursAverageAPIPerDayInPeriod(employeeId, opts, (error, data, response) => {
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
 **employeeId** | **Number**|  | 
 **validFrom** | **Date**|  | [optional] 
 **validTo** | **Date**|  | [optional] 
 **hourTypeId** | [**[Number]**](Number.md)| array style id&#x27;s: hour_type_id&#x3D;1&amp;hour_type_id&#x3D;2&amp;etc | [optional] 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**PayrollPayableHoursAverage**](PayrollPayableHoursAverage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="payrollPayableHoursAverageAPIPerWeekInPeriod"></a>
# **payrollPayableHoursAverageAPIPerWeekInPeriod**
> PayrollPayableHoursAverage payrollPayableHoursAverageAPIPerWeekInPeriod(employeeId, opts)

Get the average payable hours per week, for the specified employee and the requested period (inclusive).

The default period is last thirteen weeks. Only payable hours are included. Shifts are not automatically payable hours. Only the parts of the shift for which active work was booked. We include payrolling, vacation, sick leave, PLB vacation, LFB, moved shifts, moved shift day off, calls during shifts, and overtime.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollPayableHoursAverageApi();
let employeeId = 789; // Number | 
let opts = { 
  'validFrom': new Date("2013-10-20"), // Date | 
  'validTo': new Date("2013-10-20"), // Date | 
  'hourTypeId': [3.4], // [Number] | array style id's: hour_type_id=1&hour_type_id=2&etc
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.payrollPayableHoursAverageAPIPerWeekInPeriod(employeeId, opts, (error, data, response) => {
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
 **employeeId** | **Number**|  | 
 **validFrom** | **Date**|  | [optional] 
 **validTo** | **Date**|  | [optional] 
 **hourTypeId** | [**[Number]**](Number.md)| array style id&#x27;s: hour_type_id&#x3D;1&amp;hour_type_id&#x3D;2&amp;etc | [optional] 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**PayrollPayableHoursAverage**](PayrollPayableHoursAverage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

