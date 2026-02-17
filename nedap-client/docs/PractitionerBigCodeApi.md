# NedapOnsApi.PractitionerBigCodeApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**practitionerBigCodeAPIByEmployeeId**](PractitionerBigCodeApi.md#practitionerBigCodeAPIByEmployeeId) | **GET** /v0/administration/employees/{employee_id}/big_codes | Return the BIG codes assigned to the employee corresponding to the provided id
[**practitionerBigCodeAPIByEmployeeIdAndBigId**](PractitionerBigCodeApi.md#practitionerBigCodeAPIByEmployeeIdAndBigId) | **GET** /v0/administration/employees/{employee_id}/big_codes/{big_code_id} | Return the BIG code with the provided id assigned to the employee corresponding to the provided id
[**practitionerBigCodeAPICreateForEmployeeId**](PractitionerBigCodeApi.md#practitionerBigCodeAPICreateForEmployeeId) | **POST** /v0/administration/employees/{employee_id}/big_codes | Creates the provided BIG code and assigns it to the employee corresponding to the provided id
[**practitionerBigCodeAPIDeleteForEmployeeId**](PractitionerBigCodeApi.md#practitionerBigCodeAPIDeleteForEmployeeId) | **DELETE** /v0/administration/employees/{employee_id}/big_codes/{big_code_id} | Deletes the BIG code with the provided id assigned to the employee corresponding to the provided id
[**practitionerBigCodeAPIUpdateForEmployeeId**](PractitionerBigCodeApi.md#practitionerBigCodeAPIUpdateForEmployeeId) | **PUT** /v0/administration/employees/{employee_id}/big_codes/{big_code_id} | Updates the provided BIG code assigned to the employee corresponding to the provided id

<a name="practitionerBigCodeAPIByEmployeeId"></a>
# **practitionerBigCodeAPIByEmployeeId**
> ListPractitionerBigCodeList practitionerBigCodeAPIByEmployeeId(employeeId)

Return the BIG codes assigned to the employee corresponding to the provided id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PractitionerBigCodeApi();
let employeeId = 789; // Number | 

apiInstance.practitionerBigCodeAPIByEmployeeId(employeeId, (error, data, response) => {
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

[**ListPractitionerBigCodeList**](ListPractitionerBigCodeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="practitionerBigCodeAPIByEmployeeIdAndBigId"></a>
# **practitionerBigCodeAPIByEmployeeIdAndBigId**
> PractitionerBigCode practitionerBigCodeAPIByEmployeeIdAndBigId(employeeId, bigCodeId)

Return the BIG code with the provided id assigned to the employee corresponding to the provided id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PractitionerBigCodeApi();
let employeeId = 789; // Number | 
let bigCodeId = 789; // Number | 

apiInstance.practitionerBigCodeAPIByEmployeeIdAndBigId(employeeId, bigCodeId, (error, data, response) => {
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
 **bigCodeId** | **Number**|  | 

### Return type

[**PractitionerBigCode**](PractitionerBigCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="practitionerBigCodeAPICreateForEmployeeId"></a>
# **practitionerBigCodeAPICreateForEmployeeId**
> PractitionerBigCode practitionerBigCodeAPICreateForEmployeeId(body, employeeId)

Creates the provided BIG code and assigns it to the employee corresponding to the provided id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PractitionerBigCodeApi();
let body = new NedapOnsApi.PractitionerBigCode(); // PractitionerBigCode | 
let employeeId = 789; // Number | 

apiInstance.practitionerBigCodeAPICreateForEmployeeId(body, employeeId, (error, data, response) => {
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
 **body** | [**PractitionerBigCode**](PractitionerBigCode.md)|  | 
 **employeeId** | **Number**|  | 

### Return type

[**PractitionerBigCode**](PractitionerBigCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="practitionerBigCodeAPIDeleteForEmployeeId"></a>
# **practitionerBigCodeAPIDeleteForEmployeeId**
> practitionerBigCodeAPIDeleteForEmployeeId(employeeId, bigCodeId)

Deletes the BIG code with the provided id assigned to the employee corresponding to the provided id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PractitionerBigCodeApi();
let employeeId = 789; // Number | 
let bigCodeId = 789; // Number | 

apiInstance.practitionerBigCodeAPIDeleteForEmployeeId(employeeId, bigCodeId, (error, data, response) => {
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
 **bigCodeId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="practitionerBigCodeAPIUpdateForEmployeeId"></a>
# **practitionerBigCodeAPIUpdateForEmployeeId**
> PractitionerBigCode practitionerBigCodeAPIUpdateForEmployeeId(body, employeeId, bigCodeId)

Updates the provided BIG code assigned to the employee corresponding to the provided id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PractitionerBigCodeApi();
let body = new NedapOnsApi.PractitionerBigCode(); // PractitionerBigCode | 
let employeeId = 789; // Number | 
let bigCodeId = 789; // Number | 

apiInstance.practitionerBigCodeAPIUpdateForEmployeeId(body, employeeId, bigCodeId, (error, data, response) => {
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
 **body** | [**PractitionerBigCode**](PractitionerBigCode.md)|  | 
 **employeeId** | **Number**|  | 
 **bigCodeId** | **Number**|  | 

### Return type

[**PractitionerBigCode**](PractitionerBigCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

