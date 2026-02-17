# NedapOnsApi.PractitionerAgbCodeApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**practitionerAgbCodeAPIByEmployeeId**](PractitionerAgbCodeApi.md#practitionerAgbCodeAPIByEmployeeId) | **GET** /v0/administration/employees/{employee_id}/agb_codes | Return the AGB codes assigned to the employee corresponding to the provided id
[**practitionerAgbCodeAPIByEmployeeIdAndAgbId**](PractitionerAgbCodeApi.md#practitionerAgbCodeAPIByEmployeeIdAndAgbId) | **GET** /v0/administration/employees/{employee_id}/agb_codes/{agb_code_id} | Return the AGB code with the provided id assigned to the employee corresponding to the provided id
[**practitionerAgbCodeAPICreateForEmployeeId**](PractitionerAgbCodeApi.md#practitionerAgbCodeAPICreateForEmployeeId) | **POST** /v0/administration/employees/{employee_id}/agb_codes | Creates the provided AGB code and assigns it to the employee corresponding to the provided id
[**practitionerAgbCodeAPIDeleteForEmployeeId**](PractitionerAgbCodeApi.md#practitionerAgbCodeAPIDeleteForEmployeeId) | **DELETE** /v0/administration/employees/{employee_id}/agb_codes/{agb_code_id} | Deletes the AGB code with the provided id assigned to the employee corresponding to the provided id
[**practitionerAgbCodeAPIUpdateForEmployeeId**](PractitionerAgbCodeApi.md#practitionerAgbCodeAPIUpdateForEmployeeId) | **PUT** /v0/administration/employees/{employee_id}/agb_codes/{agb_code_id} | Updates the provided AGB code assigned to the employee corresponding to the provided id

<a name="practitionerAgbCodeAPIByEmployeeId"></a>
# **practitionerAgbCodeAPIByEmployeeId**
> ListPractitionerAgbCodeList practitionerAgbCodeAPIByEmployeeId(employeeId)

Return the AGB codes assigned to the employee corresponding to the provided id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PractitionerAgbCodeApi();
let employeeId = 789; // Number | 

apiInstance.practitionerAgbCodeAPIByEmployeeId(employeeId, (error, data, response) => {
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

[**ListPractitionerAgbCodeList**](ListPractitionerAgbCodeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="practitionerAgbCodeAPIByEmployeeIdAndAgbId"></a>
# **practitionerAgbCodeAPIByEmployeeIdAndAgbId**
> PractitionerAgbCode practitionerAgbCodeAPIByEmployeeIdAndAgbId(employeeId, agbCodeId)

Return the AGB code with the provided id assigned to the employee corresponding to the provided id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PractitionerAgbCodeApi();
let employeeId = 789; // Number | 
let agbCodeId = 789; // Number | 

apiInstance.practitionerAgbCodeAPIByEmployeeIdAndAgbId(employeeId, agbCodeId, (error, data, response) => {
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
 **agbCodeId** | **Number**|  | 

### Return type

[**PractitionerAgbCode**](PractitionerAgbCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="practitionerAgbCodeAPICreateForEmployeeId"></a>
# **practitionerAgbCodeAPICreateForEmployeeId**
> PractitionerAgbCode practitionerAgbCodeAPICreateForEmployeeId(body, employeeId)

Creates the provided AGB code and assigns it to the employee corresponding to the provided id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PractitionerAgbCodeApi();
let body = new NedapOnsApi.PractitionerAgbCode(); // PractitionerAgbCode | 
let employeeId = 789; // Number | 

apiInstance.practitionerAgbCodeAPICreateForEmployeeId(body, employeeId, (error, data, response) => {
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
 **body** | [**PractitionerAgbCode**](PractitionerAgbCode.md)|  | 
 **employeeId** | **Number**|  | 

### Return type

[**PractitionerAgbCode**](PractitionerAgbCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="practitionerAgbCodeAPIDeleteForEmployeeId"></a>
# **practitionerAgbCodeAPIDeleteForEmployeeId**
> practitionerAgbCodeAPIDeleteForEmployeeId(employeeId, agbCodeId)

Deletes the AGB code with the provided id assigned to the employee corresponding to the provided id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PractitionerAgbCodeApi();
let employeeId = 789; // Number | 
let agbCodeId = 789; // Number | 

apiInstance.practitionerAgbCodeAPIDeleteForEmployeeId(employeeId, agbCodeId, (error, data, response) => {
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
 **agbCodeId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="practitionerAgbCodeAPIUpdateForEmployeeId"></a>
# **practitionerAgbCodeAPIUpdateForEmployeeId**
> PractitionerAgbCode practitionerAgbCodeAPIUpdateForEmployeeId(body, employeeId, agbCodeId)

Updates the provided AGB code assigned to the employee corresponding to the provided id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PractitionerAgbCodeApi();
let body = new NedapOnsApi.PractitionerAgbCode(); // PractitionerAgbCode | 
let employeeId = 789; // Number | 
let agbCodeId = 789; // Number | 

apiInstance.practitionerAgbCodeAPIUpdateForEmployeeId(body, employeeId, agbCodeId, (error, data, response) => {
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
 **body** | [**PractitionerAgbCode**](PractitionerAgbCode.md)|  | 
 **employeeId** | **Number**|  | 
 **agbCodeId** | **Number**|  | 

### Return type

[**PractitionerAgbCode**](PractitionerAgbCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

