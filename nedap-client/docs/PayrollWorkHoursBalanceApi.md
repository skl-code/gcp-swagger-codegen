# NedapOnsApi.PayrollWorkHoursBalanceApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payrollWorkHoursBalanceAPIByEmployee**](PayrollWorkHoursBalanceApi.md#payrollWorkHoursBalanceAPIByEmployee) | **GET** /v0/administration/work_hours_balances/by_employee/{employee_object_id} | Retrieves a list with all workhour balances for the given employee.
[**payrollWorkHoursBalanceAPIByEmployeeAndAccountType**](PayrollWorkHoursBalanceApi.md#payrollWorkHoursBalanceAPIByEmployeeAndAccountType) | **GET** /v0/administration/work_hours_balances/by_employee_with_type/{employee_object_id} | Retrieves a workhour balance for the given employee and account type.
[**payrollWorkHoursBalanceAPIByEmployeeAndAccountTypeAtDate**](PayrollWorkHoursBalanceApi.md#payrollWorkHoursBalanceAPIByEmployeeAndAccountTypeAtDate) | **GET** /v0/administration/work_hours_balances/by_employee_with_type_at_date/{employee_object_id} | Retrieves a workhour balance for the given employee/accounttype and date.
[**payrollWorkHoursBalanceAPIByEmployeeAtDate**](PayrollWorkHoursBalanceApi.md#payrollWorkHoursBalanceAPIByEmployeeAtDate) | **GET** /v0/administration/work_hours_balances/by_employee_at_date/{employee_object_id} | Retrieves a list with all workhour balances for the given employee and for the given date.

<a name="payrollWorkHoursBalanceAPIByEmployee"></a>
# **payrollWorkHoursBalanceAPIByEmployee**
> PayrollListWorkHoursBalanceList payrollWorkHoursBalanceAPIByEmployee(employeeObjectId)

Retrieves a list with all workhour balances for the given employee.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollWorkHoursBalanceApi();
let employeeObjectId = 56; // Number | 

apiInstance.payrollWorkHoursBalanceAPIByEmployee(employeeObjectId, (error, data, response) => {
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

[**PayrollListWorkHoursBalanceList**](PayrollListWorkHoursBalanceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="payrollWorkHoursBalanceAPIByEmployeeAndAccountType"></a>
# **payrollWorkHoursBalanceAPIByEmployeeAndAccountType**
> PayrollWorkHoursBalance payrollWorkHoursBalanceAPIByEmployeeAndAccountType(employeeObjectId, accountTypeId)

Retrieves a workhour balance for the given employee and account type.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollWorkHoursBalanceApi();
let employeeObjectId = 56; // Number | 
let accountTypeId = 56; // Number | 

apiInstance.payrollWorkHoursBalanceAPIByEmployeeAndAccountType(employeeObjectId, accountTypeId, (error, data, response) => {
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
 **accountTypeId** | **Number**|  | 

### Return type

[**PayrollWorkHoursBalance**](PayrollWorkHoursBalance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="payrollWorkHoursBalanceAPIByEmployeeAndAccountTypeAtDate"></a>
# **payrollWorkHoursBalanceAPIByEmployeeAndAccountTypeAtDate**
> PayrollWorkHoursBalance payrollWorkHoursBalanceAPIByEmployeeAndAccountTypeAtDate(employeeObjectId, _date, accountTypeId)

Retrieves a workhour balance for the given employee/accounttype and date.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollWorkHoursBalanceApi();
let employeeObjectId = 56; // Number | 
let _date = new Date("2013-10-20"); // Date | 
let accountTypeId = 56; // Number | 

apiInstance.payrollWorkHoursBalanceAPIByEmployeeAndAccountTypeAtDate(employeeObjectId, _date, accountTypeId, (error, data, response) => {
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
 **_date** | **Date**|  | 
 **accountTypeId** | **Number**|  | 

### Return type

[**PayrollWorkHoursBalance**](PayrollWorkHoursBalance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="payrollWorkHoursBalanceAPIByEmployeeAtDate"></a>
# **payrollWorkHoursBalanceAPIByEmployeeAtDate**
> PayrollListWorkHoursBalanceList payrollWorkHoursBalanceAPIByEmployeeAtDate(employeeObjectId, _date)

Retrieves a list with all workhour balances for the given employee and for the given date.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollWorkHoursBalanceApi();
let employeeObjectId = 56; // Number | 
let _date = new Date("2013-10-20"); // Date | 

apiInstance.payrollWorkHoursBalanceAPIByEmployeeAtDate(employeeObjectId, _date, (error, data, response) => {
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
 **_date** | **Date**|  | 

### Return type

[**PayrollListWorkHoursBalanceList**](PayrollListWorkHoursBalanceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

