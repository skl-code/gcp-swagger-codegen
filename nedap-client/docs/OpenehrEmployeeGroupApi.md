# NedapOnsApi.OpenehrEmployeeGroupApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**openehrEmployeeGroupAPIAll**](OpenehrEmployeeGroupApi.md#openehrEmployeeGroupAPIAll) | **GET** /v0/openehr_dossier/back_channel/unauthorized/employee_groups | Returns every EmployeeGroup available from the EmployeeGroupAPI
[**openehrEmployeeGroupAPIByEmployee**](OpenehrEmployeeGroupApi.md#openehrEmployeeGroupAPIByEmployee) | **GET** /v0/openehr_dossier/back_channel/unauthorized/employee_groups/by_employee/{employee_id} | Returns employee groups that an employee is or was a member of

<a name="openehrEmployeeGroupAPIAll"></a>
# **openehrEmployeeGroupAPIAll**
> OpenehrListEmployeeGroupList openehrEmployeeGroupAPIAll()

Returns every EmployeeGroup available from the EmployeeGroupAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OpenehrEmployeeGroupApi();
apiInstance.openehrEmployeeGroupAPIAll((error, data, response) => {
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

[**OpenehrListEmployeeGroupList**](OpenehrListEmployeeGroupList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="openehrEmployeeGroupAPIByEmployee"></a>
# **openehrEmployeeGroupAPIByEmployee**
> OpenehrListEmployeeGroupList openehrEmployeeGroupAPIByEmployee(employeeId, opts)

Returns employee groups that an employee is or was a member of

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OpenehrEmployeeGroupApi();
let employeeId = 789; // Number | The id of the employee
let opts = { 
  'onlyActive': true, // Boolean | When true, only return employee groups that an employee currently is a member of
  'withAncestors': true // Boolean | When true, also return ancestors of the direct assignments
};
apiInstance.openehrEmployeeGroupAPIByEmployee(employeeId, opts, (error, data, response) => {
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
 **employeeId** | **Number**| The id of the employee | 
 **onlyActive** | **Boolean**| When true, only return employee groups that an employee currently is a member of | [optional] 
 **withAncestors** | **Boolean**| When true, also return ancestors of the direct assignments | [optional] 

### Return type

[**OpenehrListEmployeeGroupList**](OpenehrListEmployeeGroupList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

