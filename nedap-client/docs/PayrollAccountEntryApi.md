# NedapOnsApi.PayrollAccountEntryApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payrollAccountEntryAPIByEmployee**](PayrollAccountEntryApi.md#payrollAccountEntryAPIByEmployee) | **GET** /v0/administration/account_entries/by_employee/{employee_id} | Retrieve all AccountEntry for an Employee
[**payrollAccountEntryAPIByEmployeeAndAccountType**](PayrollAccountEntryApi.md#payrollAccountEntryAPIByEmployeeAndAccountType) | **GET** /v0/administration/account_entries/by_employee_and_type/{employee_id} | Retrieve all AccountEntry for an Employee and a specific AccountType
[**payrollAccountEntryAPIByEmployeeAndAccountTypeInPeriod**](PayrollAccountEntryApi.md#payrollAccountEntryAPIByEmployeeAndAccountTypeInPeriod) | **GET** /v0/administration/account_entries/by_employee_and_type_in_period/{employee_id} | Retrieve all AccountEntry for an Employee for a specific AccountType in a period
[**payrollAccountEntryAPIByEmployeeIdAndAccountTypeIdTillDate**](PayrollAccountEntryApi.md#payrollAccountEntryAPIByEmployeeIdAndAccountTypeIdTillDate) | **GET** /v0/administration/account_entries/by_employee_and_type_till_date/{employee_id} | Retrieve the account entries up until the specified date for a specific employee and specified type
[**payrollAccountEntryAPIByEmployeeIdTillDate**](PayrollAccountEntryApi.md#payrollAccountEntryAPIByEmployeeIdTillDate) | **GET** /v0/administration/account_entries/by_employee_till_date/{employee_id} | Retrieve the account entries up until the specified date for a specific employee
[**payrollAccountEntryAPIByEmployeeInPeriod**](PayrollAccountEntryApi.md#payrollAccountEntryAPIByEmployeeInPeriod) | **GET** /v0/administration/account_entries/by_employee_in_period/{employee_id} | Retrieve all the AccountEntry for an Employee in a specified period
[**payrollAccountEntryAPIById**](PayrollAccountEntryApi.md#payrollAccountEntryAPIById) | **GET** /v0/administration/account_entries/{id} | Return the Account Entry corresponding to the given id

<a name="payrollAccountEntryAPIByEmployee"></a>
# **payrollAccountEntryAPIByEmployee**
> PayrollListAccountEntryList payrollAccountEntryAPIByEmployee(employeeId)

Retrieve all AccountEntry for an Employee

Retrieve all {@link AccountEntry} for an {@link Employee}

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollAccountEntryApi();
let employeeId = 789; // Number | the requested employee

apiInstance.payrollAccountEntryAPIByEmployee(employeeId, (error, data, response) => {
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
 **employeeId** | **Number**| the requested employee | 

### Return type

[**PayrollListAccountEntryList**](PayrollListAccountEntryList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="payrollAccountEntryAPIByEmployeeAndAccountType"></a>
# **payrollAccountEntryAPIByEmployeeAndAccountType**
> PayrollListAccountEntryList payrollAccountEntryAPIByEmployeeAndAccountType(employeeId, accountTypeId)

Retrieve all AccountEntry for an Employee and a specific AccountType

Retrieve all {@link AccountEntry} for an {@link Employee} and a specific {@link AccountType}

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollAccountEntryApi();
let employeeId = 789; // Number | the requested employee
let accountTypeId = 789; // Number | the specific accountType

apiInstance.payrollAccountEntryAPIByEmployeeAndAccountType(employeeId, accountTypeId, (error, data, response) => {
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
 **employeeId** | **Number**| the requested employee | 
 **accountTypeId** | **Number**| the specific accountType | 

### Return type

[**PayrollListAccountEntryList**](PayrollListAccountEntryList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="payrollAccountEntryAPIByEmployeeAndAccountTypeInPeriod"></a>
# **payrollAccountEntryAPIByEmployeeAndAccountTypeInPeriod**
> PayrollListAccountEntryList payrollAccountEntryAPIByEmployeeAndAccountTypeInPeriod(employeeId, accountTypeId, validFrom, validTo)

Retrieve all AccountEntry for an Employee for a specific AccountType in a period

Retrieve all {@link AccountEntry} for an {@link Employee} for a specific {@link AccountType} in a period

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollAccountEntryApi();
let employeeId = 789; // Number | the specific employee
let accountTypeId = 789; // Number | the account type
let validFrom = new Date("2013-10-20"); // Date | the start of the period
let validTo = new Date("2013-10-20"); // Date | the end of the period

apiInstance.payrollAccountEntryAPIByEmployeeAndAccountTypeInPeriod(employeeId, accountTypeId, validFrom, validTo, (error, data, response) => {
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
 **employeeId** | **Number**| the specific employee | 
 **accountTypeId** | **Number**| the account type | 
 **validFrom** | **Date**| the start of the period | 
 **validTo** | **Date**| the end of the period | 

### Return type

[**PayrollListAccountEntryList**](PayrollListAccountEntryList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="payrollAccountEntryAPIByEmployeeIdAndAccountTypeIdTillDate"></a>
# **payrollAccountEntryAPIByEmployeeIdAndAccountTypeIdTillDate**
> PayrollListAccountEntryList payrollAccountEntryAPIByEmployeeIdAndAccountTypeIdTillDate(employeeId, accountTypeId, _date)

Retrieve the account entries up until the specified date for a specific employee and specified type

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollAccountEntryApi();
let employeeId = 789; // Number | of the requested employee
let accountTypeId = 789; // Number | the specified accountType
let _date = "_date_example"; // String | until accountentries are requested

apiInstance.payrollAccountEntryAPIByEmployeeIdAndAccountTypeIdTillDate(employeeId, accountTypeId, _date, (error, data, response) => {
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
 **accountTypeId** | **Number**| the specified accountType | 
 **_date** | **String**| until accountentries are requested | 

### Return type

[**PayrollListAccountEntryList**](PayrollListAccountEntryList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="payrollAccountEntryAPIByEmployeeIdTillDate"></a>
# **payrollAccountEntryAPIByEmployeeIdTillDate**
> PayrollListAccountEntryList payrollAccountEntryAPIByEmployeeIdTillDate(employeeId, _date)

Retrieve the account entries up until the specified date for a specific employee

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollAccountEntryApi();
let employeeId = 789; // Number | of the requested employee
let _date = "_date_example"; // String | until accountentries are requested

apiInstance.payrollAccountEntryAPIByEmployeeIdTillDate(employeeId, _date, (error, data, response) => {
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
 **_date** | **String**| until accountentries are requested | 

### Return type

[**PayrollListAccountEntryList**](PayrollListAccountEntryList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="payrollAccountEntryAPIByEmployeeInPeriod"></a>
# **payrollAccountEntryAPIByEmployeeInPeriod**
> PayrollListAccountEntryList payrollAccountEntryAPIByEmployeeInPeriod(employeeId, validFrom, validTo)

Retrieve all the AccountEntry for an Employee in a specified period

Retrieve all the {@link AccountEntry} for an {@link Employee} in a specified period

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollAccountEntryApi();
let employeeId = 789; // Number | of the request employee
let validFrom = new Date("2013-10-20"); // Date | the start of the period
let validTo = new Date("2013-10-20"); // Date | the end of the period

apiInstance.payrollAccountEntryAPIByEmployeeInPeriod(employeeId, validFrom, validTo, (error, data, response) => {
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
 **employeeId** | **Number**| of the request employee | 
 **validFrom** | **Date**| the start of the period | 
 **validTo** | **Date**| the end of the period | 

### Return type

[**PayrollListAccountEntryList**](PayrollListAccountEntryList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="payrollAccountEntryAPIById"></a>
# **payrollAccountEntryAPIById**
> PayrollAccountEntry payrollAccountEntryAPIById(id, opts)

Return the Account Entry corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollAccountEntryApi();
let id = 789; // Number | used for selecting AccountEntry
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.payrollAccountEntryAPIById(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting AccountEntry | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**PayrollAccountEntry**](PayrollAccountEntry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

