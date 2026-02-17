# NedapOnsApi.PractitionerProfessionApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**practitionerProfessionAPIByEmployeeId**](PractitionerProfessionApi.md#practitionerProfessionAPIByEmployeeId) | **GET** /v0/administration/employees/{employee_id}/professions | Return the professions assigned to the employee corresponding to the provided id
[**practitionerProfessionAPIByEmployeeIdAndProfessionId**](PractitionerProfessionApi.md#practitionerProfessionAPIByEmployeeIdAndProfessionId) | **GET** /v0/administration/employees/{employee_id}/professions/{profession_id} | Return the profession with the provided id assigned to the employee corresponding to the provided id
[**practitionerProfessionAPICreateForEmployeeId**](PractitionerProfessionApi.md#practitionerProfessionAPICreateForEmployeeId) | **POST** /v0/administration/employees/{employee_id}/professions | Creates the provided profession and assigns it to the employee corresponding to the provided id
[**practitionerProfessionAPIDeleteForEmployeeId**](PractitionerProfessionApi.md#practitionerProfessionAPIDeleteForEmployeeId) | **DELETE** /v0/administration/employees/{employee_id}/professions/{profession_id} | Deletes the profession with the provided id assigned to the employee corresponding to the provided id
[**practitionerProfessionAPIUpdateForEmployeeId**](PractitionerProfessionApi.md#practitionerProfessionAPIUpdateForEmployeeId) | **PUT** /v0/administration/employees/{employee_id}/professions/{profession_id} | Updates the provided profession assigned to the employee corresponding to the provided id

<a name="practitionerProfessionAPIByEmployeeId"></a>
# **practitionerProfessionAPIByEmployeeId**
> ListPractitionerProfessionList practitionerProfessionAPIByEmployeeId(employeeId)

Return the professions assigned to the employee corresponding to the provided id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PractitionerProfessionApi();
let employeeId = 789; // Number | 

apiInstance.practitionerProfessionAPIByEmployeeId(employeeId, (error, data, response) => {
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

### Return type

[**ListPractitionerProfessionList**](ListPractitionerProfessionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="practitionerProfessionAPIByEmployeeIdAndProfessionId"></a>
# **practitionerProfessionAPIByEmployeeIdAndProfessionId**
> PractitionerProfession practitionerProfessionAPIByEmployeeIdAndProfessionId(employeeId, professionId)

Return the profession with the provided id assigned to the employee corresponding to the provided id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PractitionerProfessionApi();
let employeeId = 789; // Number | 
let professionId = 789; // Number | 

apiInstance.practitionerProfessionAPIByEmployeeIdAndProfessionId(employeeId, professionId, (error, data, response) => {
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
 **professionId** | **Number**|  | 

### Return type

[**PractitionerProfession**](PractitionerProfession.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="practitionerProfessionAPICreateForEmployeeId"></a>
# **practitionerProfessionAPICreateForEmployeeId**
> PractitionerProfession practitionerProfessionAPICreateForEmployeeId(body, employeeId)

Creates the provided profession and assigns it to the employee corresponding to the provided id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PractitionerProfessionApi();
let body = new NedapOnsApi.PractitionerProfession(); // PractitionerProfession | 
let employeeId = 789; // Number | 

apiInstance.practitionerProfessionAPICreateForEmployeeId(body, employeeId, (error, data, response) => {
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
 **body** | [**PractitionerProfession**](PractitionerProfession.md)|  | 
 **employeeId** | **Number**|  | 

### Return type

[**PractitionerProfession**](PractitionerProfession.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="practitionerProfessionAPIDeleteForEmployeeId"></a>
# **practitionerProfessionAPIDeleteForEmployeeId**
> practitionerProfessionAPIDeleteForEmployeeId(employeeId, professionId)

Deletes the profession with the provided id assigned to the employee corresponding to the provided id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PractitionerProfessionApi();
let employeeId = 789; // Number | 
let professionId = 789; // Number | 

apiInstance.practitionerProfessionAPIDeleteForEmployeeId(employeeId, professionId, (error, data, response) => {
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
 **professionId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="practitionerProfessionAPIUpdateForEmployeeId"></a>
# **practitionerProfessionAPIUpdateForEmployeeId**
> PractitionerProfession practitionerProfessionAPIUpdateForEmployeeId(body, employeeId, professionId)

Updates the provided profession assigned to the employee corresponding to the provided id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PractitionerProfessionApi();
let body = new NedapOnsApi.PractitionerProfession(); // PractitionerProfession | 
let employeeId = 789; // Number | 
let professionId = 789; // Number | 

apiInstance.practitionerProfessionAPIUpdateForEmployeeId(body, employeeId, professionId, (error, data, response) => {
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
 **body** | [**PractitionerProfession**](PractitionerProfession.md)|  | 
 **employeeId** | **Number**|  | 
 **professionId** | **Number**|  | 

### Return type

[**PractitionerProfession**](PractitionerProfession.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

