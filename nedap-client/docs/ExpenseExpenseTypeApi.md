# NedapOnsApi.ExpenseExpenseTypeApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**expenseExpenseTypeAPIAll**](ExpenseExpenseTypeApi.md#expenseExpenseTypeAPIAll) | **GET** /v0/administration/expense_types | Returns every ExpenseType available from the ExpenseTypeAPI
[**expenseExpenseTypeAPIById**](ExpenseExpenseTypeApi.md#expenseExpenseTypeAPIById) | **GET** /v0/administration/expense_types/{id} | Return the Expense Type corresponding to the given id

<a name="expenseExpenseTypeAPIAll"></a>
# **expenseExpenseTypeAPIAll**
> ExpenseListExpenseTypeList expenseExpenseTypeAPIAll()

Returns every ExpenseType available from the ExpenseTypeAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpenseExpenseTypeApi();
apiInstance.expenseExpenseTypeAPIAll((error, data, response) => {
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

[**ExpenseListExpenseTypeList**](ExpenseListExpenseTypeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="expenseExpenseTypeAPIById"></a>
# **expenseExpenseTypeAPIById**
> ExpenseExpenseType expenseExpenseTypeAPIById(id)

Return the Expense Type corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpenseExpenseTypeApi();
let id = 789; // Number | used for selecting ExpenseType

apiInstance.expenseExpenseTypeAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting ExpenseType | 

### Return type

[**ExpenseExpenseType**](ExpenseExpenseType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

