# NedapOnsApi.PayrollAccountTypeExpireStatisticApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payrollAccountTypeExpireStatisticAPIByEmployeeAtDate**](PayrollAccountTypeExpireStatisticApi.md#payrollAccountTypeExpireStatisticAPIByEmployeeAtDate) | **GET** /v0/administration/account_type_expire_statistics/by_employee_at_date/{employee_id} | Retrieve all the AccountTypeExpireStatistic for an Employee calculated at the given date

<a name="payrollAccountTypeExpireStatisticAPIByEmployeeAtDate"></a>
# **payrollAccountTypeExpireStatisticAPIByEmployeeAtDate**
> PayrollListAccountTypeExpireStatisticList payrollAccountTypeExpireStatisticAPIByEmployeeAtDate(employeeId, _date, subtype)

Retrieve all the AccountTypeExpireStatistic for an Employee calculated at the given date

Retrieve all the {@link AccountTypeExpireStatistic} for an {@link Employee} calculated at the given date

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollAccountTypeExpireStatisticApi();
let employeeId = 56; // Number | of the requested employee
let _date = new Date("2013-10-20"); // Date | the date for which AccountTypeExpireStatistics are requested
let subtype = 56; // Number | the subtype of the account types for which AccountTypeExpireStatistics should be returned. Valid inputs are 0 (none), 1 (PLB) and 2 (LFB).

apiInstance.payrollAccountTypeExpireStatisticAPIByEmployeeAtDate(employeeId, _date, subtype, (error, data, response) => {
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
 **employeeId** | **Number**| of the requested employee | 
 **_date** | **Date**| the date for which AccountTypeExpireStatistics are requested | 
 **subtype** | **Number**| the subtype of the account types for which AccountTypeExpireStatistics should be returned. Valid inputs are 0 (none), 1 (PLB) and 2 (LFB). | 

### Return type

[**PayrollListAccountTypeExpireStatisticList**](PayrollListAccountTypeExpireStatisticList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

