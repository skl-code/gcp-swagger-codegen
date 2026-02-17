# NedapOnsApi.ExpenseExpenseApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**expenseExpenseAPIById**](ExpenseExpenseApi.md#expenseExpenseAPIById) | **GET** /v0/administration/expenses/{id} | Return the Expense corresponding to the given id
[**expenseExpenseAPICreate**](ExpenseExpenseApi.md#expenseExpenseAPICreate) | **POST** /v0/administration/expenses | Create Expense
[**expenseExpenseAPIDelete**](ExpenseExpenseApi.md#expenseExpenseAPIDelete) | **DELETE** /v0/administration/expenses/{id} | Deletes the Expense with given id
[**expenseExpenseAPIPreviewExpense**](ExpenseExpenseApi.md#expenseExpenseAPIPreviewExpense) | **POST** /v0/administration/expenses/preview | Used to get created Expense Route Without saving the expense 
[**expenseExpenseAPISearchByEmployeeId**](ExpenseExpenseApi.md#expenseExpenseAPISearchByEmployeeId) | **GET** /v0/administration/expenses/employees/{employee_id} | Retrieve all expenses for the employee corresponding to the given employee id.
[**expenseExpenseAPIUpdate**](ExpenseExpenseApi.md#expenseExpenseAPIUpdate) | **PUT** /v0/administration/expenses/{id} | Updates the given Expense
[**expenseExpenseAPIUpdatePositionForExpenseDistance**](ExpenseExpenseApi.md#expenseExpenseAPIUpdatePositionForExpenseDistance) | **PUT** /v0/administration/expenses/expensedistance/{expense_distance_id} | Updates an expense distance position with a new position value

<a name="expenseExpenseAPIById"></a>
# **expenseExpenseAPIById**
> ExpenseExpense expenseExpenseAPIById(id, opts)

Return the Expense corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpenseExpenseApi();
let id = 789; // Number | used for selecting Expense
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.expenseExpenseAPIById(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting Expense | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**ExpenseExpense**](ExpenseExpense.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="expenseExpenseAPICreate"></a>
# **expenseExpenseAPICreate**
> ExpenseExpense expenseExpenseAPICreate(body, opts)

Create Expense

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpenseExpenseApi();
let body = new NedapOnsApi.ExpenseExpense(); // ExpenseExpense | Expense to create
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.expenseExpenseAPICreate(body, opts, (error, data, response) => {
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
 **body** | [**ExpenseExpense**](ExpenseExpense.md)| Expense to create | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**ExpenseExpense**](ExpenseExpense.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="expenseExpenseAPIDelete"></a>
# **expenseExpenseAPIDelete**
> ExpenseExpense expenseExpenseAPIDelete(id, opts)

Deletes the Expense with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpenseExpenseApi();
let id = 789; // Number | used for selecting Expense
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.expenseExpenseAPIDelete(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting Expense | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**ExpenseExpense**](ExpenseExpense.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="expenseExpenseAPIPreviewExpense"></a>
# **expenseExpenseAPIPreviewExpense**
> ExpenseExpense expenseExpenseAPIPreviewExpense(body, opts)

Used to get created Expense Route Without saving the expense 

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpenseExpenseApi();
let body = new NedapOnsApi.ExpenseExpense(); // ExpenseExpense | 
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.expenseExpenseAPIPreviewExpense(body, opts, (error, data, response) => {
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
 **body** | [**ExpenseExpense**](ExpenseExpense.md)|  | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**ExpenseExpense**](ExpenseExpense.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="expenseExpenseAPISearchByEmployeeId"></a>
# **expenseExpenseAPISearchByEmployeeId**
> ExpenseListExpenseList expenseExpenseAPISearchByEmployeeId(employeeId, opts)

Retrieve all expenses for the employee corresponding to the given employee id.

At least one of the valid_to and valid_from query parameters need to be set. When neither are provided, they will both default to \&quot;today\&quot;. Since valid_to is non-inclusive, this leads to an empty response

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpenseExpenseApi();
let employeeId = 789; // Number | The id of the employee to search expenses for
let opts = { 
  'validFrom': new Date("2013-10-20"), // Date | starting time
  'validTo': new Date("2013-10-20") // Date | end time
};
apiInstance.expenseExpenseAPISearchByEmployeeId(employeeId, opts, (error, data, response) => {
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
 **employeeId** | **Number**| The id of the employee to search expenses for | 
 **validFrom** | **Date**| starting time | [optional] 
 **validTo** | **Date**| end time | [optional] 

### Return type

[**ExpenseListExpenseList**](ExpenseListExpenseList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="expenseExpenseAPIUpdate"></a>
# **expenseExpenseAPIUpdate**
> ExpenseExpense expenseExpenseAPIUpdate(body, id, opts)

Updates the given Expense

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpenseExpenseApi();
let body = new NedapOnsApi.ExpenseExpense(); // ExpenseExpense | Expense to update
let id = 789; // Number | used for selecting Expense
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.expenseExpenseAPIUpdate(body, id, opts, (error, data, response) => {
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
 **body** | [**ExpenseExpense**](ExpenseExpense.md)| Expense to update | 
 **id** | **Number**| used for selecting Expense | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**ExpenseExpense**](ExpenseExpense.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="expenseExpenseAPIUpdatePositionForExpenseDistance"></a>
# **expenseExpenseAPIUpdatePositionForExpenseDistance**
> ExpenseExpense expenseExpenseAPIUpdatePositionForExpenseDistance(body, expenseDistanceId)

Updates an expense distance position with a new position value

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpenseExpenseApi();
let body = new NedapOnsApi.RegistrationPosition(); // RegistrationPosition | 
let expenseDistanceId = 789; // Number | 

apiInstance.expenseExpenseAPIUpdatePositionForExpenseDistance(body, expenseDistanceId, (error, data, response) => {
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
 **body** | [**RegistrationPosition**](RegistrationPosition.md)|  | 
 **expenseDistanceId** | **Number**|  | 

### Return type

[**ExpenseExpense**](ExpenseExpense.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

