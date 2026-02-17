# NedapOnsApi.ExpenseExpenseAddressModelApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**expenseExpenseAddressModelAPICreateOrUpdateExpenseAddress**](ExpenseExpenseAddressModelApi.md#expenseExpenseAddressModelAPICreateOrUpdateExpenseAddress) | **PUT** /v0/administration/authorized/employees/{employee_id}/expense_address | Update an expense address
[**expenseExpenseAddressModelAPIGetExpenseAddresses**](ExpenseExpenseAddressModelApi.md#expenseExpenseAddressModelAPIGetExpenseAddresses) | **GET** /v0/administration/authorized/employees/{employee_id}/expense_address | Returns the expense addresses of given employee
[**expenseExpenseAddressModelAPIRemoveExpenseAddress**](ExpenseExpenseAddressModelApi.md#expenseExpenseAddressModelAPIRemoveExpenseAddress) | **DELETE** /v0/administration/authorized/employees/{employee_id}/expense_address/{expenseAddress_id} | Removes expense address

<a name="expenseExpenseAddressModelAPICreateOrUpdateExpenseAddress"></a>
# **expenseExpenseAddressModelAPICreateOrUpdateExpenseAddress**
> ExpenseExpenseAddressModel expenseExpenseAddressModelAPICreateOrUpdateExpenseAddress(body, employeeId, opts)

Update an expense address

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpenseExpenseAddressModelApi();
let body = new NedapOnsApi.ExpenseExpenseAddressModel(); // ExpenseExpenseAddressModel | ExpenseAddress to update
let employeeId = 789; // Number | 
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.expenseExpenseAddressModelAPICreateOrUpdateExpenseAddress(body, employeeId, opts, (error, data, response) => {
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
 **body** | [**ExpenseExpenseAddressModel**](ExpenseExpenseAddressModel.md)| ExpenseAddress to update | 
 **employeeId** | **Number**|  | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**ExpenseExpenseAddressModel**](ExpenseExpenseAddressModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="expenseExpenseAddressModelAPIGetExpenseAddresses"></a>
# **expenseExpenseAddressModelAPIGetExpenseAddresses**
> ExpenseListExpenseAddressModelList expenseExpenseAddressModelAPIGetExpenseAddresses(employeeId, opts)

Returns the expense addresses of given employee

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpenseExpenseAddressModelApi();
let employeeId = 789; // Number | 
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.expenseExpenseAddressModelAPIGetExpenseAddresses(employeeId, opts, (error, data, response) => {
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
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**ExpenseListExpenseAddressModelList**](ExpenseListExpenseAddressModelList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="expenseExpenseAddressModelAPIRemoveExpenseAddress"></a>
# **expenseExpenseAddressModelAPIRemoveExpenseAddress**
> expenseExpenseAddressModelAPIRemoveExpenseAddress(employeeId, expenseAddressId, opts)

Removes expense address

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpenseExpenseAddressModelApi();
let employeeId = 789; // Number | 
let expenseAddressId = 789; // Number | 
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.expenseExpenseAddressModelAPIRemoveExpenseAddress(employeeId, expenseAddressId, opts, (error, data, response) => {
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
 **employeeId** | **Number**|  | 
 **expenseAddressId** | **Number**|  | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

