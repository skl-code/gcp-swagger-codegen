# NedapOnsApi.MovesEmployeeMovesProfileApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**movesEmployeeMovesProfileAPIByEmployeeId**](MovesEmployeeMovesProfileApi.md#movesEmployeeMovesProfileAPIByEmployeeId) | **GET** /v0/plannen_roosteren/employees/{employee_id}/employee_moves_profile | Return the moves profile of an employee specified by id.

<a name="movesEmployeeMovesProfileAPIByEmployeeId"></a>
# **movesEmployeeMovesProfileAPIByEmployeeId**
> MovesEmployeeMovesProfile movesEmployeeMovesProfileAPIByEmployeeId(employeeId)

Return the moves profile of an employee specified by id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesEmployeeMovesProfileApi();
let employeeId = 789; // Number | The {id} of the requested Employee

apiInstance.movesEmployeeMovesProfileAPIByEmployeeId(employeeId, (error, data, response) => {
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
 **employeeId** | **Number**| The {id} of the requested Employee | 

### Return type

[**MovesEmployeeMovesProfile**](MovesEmployeeMovesProfile.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

