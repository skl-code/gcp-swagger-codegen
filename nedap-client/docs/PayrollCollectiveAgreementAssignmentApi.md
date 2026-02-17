# NedapOnsApi.PayrollCollectiveAgreementAssignmentApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payrollCollectiveAgreementAssignmentAPIByEmployeeId**](PayrollCollectiveAgreementAssignmentApi.md#payrollCollectiveAgreementAssignmentAPIByEmployeeId) | **GET** /v0/administration/collective_agreement_assignments/by_employee_id/{employee_id} | Return the collective agreement assignments of an Employee corresponding to the given id.
[**payrollCollectiveAgreementAssignmentAPIById**](PayrollCollectiveAgreementAssignmentApi.md#payrollCollectiveAgreementAssignmentAPIById) | **GET** /v0/administration/collective_agreement_assignments/{id} | Returns the collective agreement assignment corresponding to the given id
[**payrollCollectiveAgreementAssignmentAPICreate**](PayrollCollectiveAgreementAssignmentApi.md#payrollCollectiveAgreementAssignmentAPICreate) | **POST** /v0/administration/collective_agreement_assignments | Create the provided collective agreement assignment and assign it to the employee corresponding to the provided id
[**payrollCollectiveAgreementAssignmentAPIRemoveByEmployeeId**](PayrollCollectiveAgreementAssignmentApi.md#payrollCollectiveAgreementAssignmentAPIRemoveByEmployeeId) | **DELETE** /v0/administration/collective_agreement_assignments/by_employee_id/{employee_id} | Remove all collective agreement assignments for the employee corresponding to the given id
[**payrollCollectiveAgreementAssignmentAPIRemoveById**](PayrollCollectiveAgreementAssignmentApi.md#payrollCollectiveAgreementAssignmentAPIRemoveById) | **DELETE** /v0/administration/collective_agreement_assignments/{id} | Remove the collective agreement assignment corresponding to the given id
[**payrollCollectiveAgreementAssignmentAPIUpdateById**](PayrollCollectiveAgreementAssignmentApi.md#payrollCollectiveAgreementAssignmentAPIUpdateById) | **PUT** /v0/administration/collective_agreement_assignments/{id} | Update the provided collective agreement assignment

<a name="payrollCollectiveAgreementAssignmentAPIByEmployeeId"></a>
# **payrollCollectiveAgreementAssignmentAPIByEmployeeId**
> PayrollListCollectiveAgreementAssignmentList payrollCollectiveAgreementAssignmentAPIByEmployeeId(employeeId)

Return the collective agreement assignments of an Employee corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollCollectiveAgreementAssignmentApi();
let employeeId = 789; // Number | id

apiInstance.payrollCollectiveAgreementAssignmentAPIByEmployeeId(employeeId, (error, data, response) => {
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
 **employeeId** | **Number**| id | 

### Return type

[**PayrollListCollectiveAgreementAssignmentList**](PayrollListCollectiveAgreementAssignmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="payrollCollectiveAgreementAssignmentAPIById"></a>
# **payrollCollectiveAgreementAssignmentAPIById**
> PayrollCollectiveAgreementAssignment payrollCollectiveAgreementAssignmentAPIById(id)

Returns the collective agreement assignment corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollCollectiveAgreementAssignmentApi();
let id = 789; // Number | used for selecting Collective Agreement Assignment

apiInstance.payrollCollectiveAgreementAssignmentAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting Collective Agreement Assignment | 

### Return type

[**PayrollCollectiveAgreementAssignment**](PayrollCollectiveAgreementAssignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="payrollCollectiveAgreementAssignmentAPICreate"></a>
# **payrollCollectiveAgreementAssignmentAPICreate**
> PayrollCollectiveAgreementAssignment payrollCollectiveAgreementAssignmentAPICreate(body)

Create the provided collective agreement assignment and assign it to the employee corresponding to the provided id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollCollectiveAgreementAssignmentApi();
let body = new NedapOnsApi.PayrollCollectiveAgreementAssignment(); // PayrollCollectiveAgreementAssignment | 

apiInstance.payrollCollectiveAgreementAssignmentAPICreate(body, (error, data, response) => {
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
 **body** | [**PayrollCollectiveAgreementAssignment**](PayrollCollectiveAgreementAssignment.md)|  | 

### Return type

[**PayrollCollectiveAgreementAssignment**](PayrollCollectiveAgreementAssignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="payrollCollectiveAgreementAssignmentAPIRemoveByEmployeeId"></a>
# **payrollCollectiveAgreementAssignmentAPIRemoveByEmployeeId**
> payrollCollectiveAgreementAssignmentAPIRemoveByEmployeeId(employeeId)

Remove all collective agreement assignments for the employee corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollCollectiveAgreementAssignmentApi();
let employeeId = 789; // Number | 

apiInstance.payrollCollectiveAgreementAssignmentAPIRemoveByEmployeeId(employeeId, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="payrollCollectiveAgreementAssignmentAPIRemoveById"></a>
# **payrollCollectiveAgreementAssignmentAPIRemoveById**
> payrollCollectiveAgreementAssignmentAPIRemoveById(id)

Remove the collective agreement assignment corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollCollectiveAgreementAssignmentApi();
let id = 789; // Number | 

apiInstance.payrollCollectiveAgreementAssignmentAPIRemoveById(id, (error, data, response) => {
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
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="payrollCollectiveAgreementAssignmentAPIUpdateById"></a>
# **payrollCollectiveAgreementAssignmentAPIUpdateById**
> PayrollCollectiveAgreementAssignment payrollCollectiveAgreementAssignmentAPIUpdateById(body, id)

Update the provided collective agreement assignment

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollCollectiveAgreementAssignmentApi();
let body = new NedapOnsApi.PayrollCollectiveAgreementAssignment(); // PayrollCollectiveAgreementAssignment | 
let id = 789; // Number | 

apiInstance.payrollCollectiveAgreementAssignmentAPIUpdateById(body, id, (error, data, response) => {
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
 **body** | [**PayrollCollectiveAgreementAssignment**](PayrollCollectiveAgreementAssignment.md)|  | 
 **id** | **Number**|  | 

### Return type

[**PayrollCollectiveAgreementAssignment**](PayrollCollectiveAgreementAssignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

