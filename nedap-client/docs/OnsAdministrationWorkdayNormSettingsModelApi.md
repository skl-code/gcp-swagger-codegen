# NedapOnsApi.OnsAdministrationWorkdayNormSettingsModelApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**onsAdministrationWorkdayNormSettingsModelAPICreateWorkdayNorm**](OnsAdministrationWorkdayNormSettingsModelApi.md#onsAdministrationWorkdayNormSettingsModelAPICreateWorkdayNorm) | **POST** /v0/administration/employees/{employee_object_id}/workday_norms | Creates a new workday norm settings for the given employee.
[**onsAdministrationWorkdayNormSettingsModelAPIDeleteWorkdayNorm**](OnsAdministrationWorkdayNormSettingsModelApi.md#onsAdministrationWorkdayNormSettingsModelAPIDeleteWorkdayNorm) | **DELETE** /v0/administration/employees/{employee_object_id}/workday_norms/{settings_object_id} | Deletes the specified workday norm settings for the given employee.
[**onsAdministrationWorkdayNormSettingsModelAPIGetCurrentAndFutureForEmployees**](OnsAdministrationWorkdayNormSettingsModelApi.md#onsAdministrationWorkdayNormSettingsModelAPIGetCurrentAndFutureForEmployees) | **GET** /v0/administration/employees/workday_norms | Returns the current and future workday norms settings for the given employees. This MAY include default settings when no specific settings exist.
[**onsAdministrationWorkdayNormSettingsModelAPIGetForEmployee**](OnsAdministrationWorkdayNormSettingsModelApi.md#onsAdministrationWorkdayNormSettingsModelAPIGetForEmployee) | **GET** /v0/administration/employees/{employee_object_id}/workday_norms | Returns all workday norms settings for the given employee. Does NOT include any default settings.
[**onsAdministrationWorkdayNormSettingsModelAPIGetWorkdayNorm**](OnsAdministrationWorkdayNormSettingsModelApi.md#onsAdministrationWorkdayNormSettingsModelAPIGetWorkdayNorm) | **GET** /v0/administration/employees/{employee_object_id}/workday_norms/{settings_object_id} | Returns the specified workday norm settings for the given employee.
[**onsAdministrationWorkdayNormSettingsModelAPIUpdateWorkdayNorm**](OnsAdministrationWorkdayNormSettingsModelApi.md#onsAdministrationWorkdayNormSettingsModelAPIUpdateWorkdayNorm) | **PUT** /v0/administration/employees/{employee_object_id}/workday_norms/{settings_object_id} | Updates the specified workday norm settings for the given employee.

<a name="onsAdministrationWorkdayNormSettingsModelAPICreateWorkdayNorm"></a>
# **onsAdministrationWorkdayNormSettingsModelAPICreateWorkdayNorm**
> OnsAdministrationWorkdayNormSettingsModel onsAdministrationWorkdayNormSettingsModelAPICreateWorkdayNorm(body, employeeObjectId)

Creates a new workday norm settings for the given employee.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OnsAdministrationWorkdayNormSettingsModelApi();
let body = new NedapOnsApi.OnsAdministrationWorkdayNormSettingsModel(); // OnsAdministrationWorkdayNormSettingsModel | 
let employeeObjectId = 789; // Number | 

apiInstance.onsAdministrationWorkdayNormSettingsModelAPICreateWorkdayNorm(body, employeeObjectId, (error, data, response) => {
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
 **body** | [**OnsAdministrationWorkdayNormSettingsModel**](OnsAdministrationWorkdayNormSettingsModel.md)|  | 
 **employeeObjectId** | **Number**|  | 

### Return type

[**OnsAdministrationWorkdayNormSettingsModel**](OnsAdministrationWorkdayNormSettingsModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="onsAdministrationWorkdayNormSettingsModelAPIDeleteWorkdayNorm"></a>
# **onsAdministrationWorkdayNormSettingsModelAPIDeleteWorkdayNorm**
> onsAdministrationWorkdayNormSettingsModelAPIDeleteWorkdayNorm(employeeObjectId, settingsObjectId)

Deletes the specified workday norm settings for the given employee.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OnsAdministrationWorkdayNormSettingsModelApi();
let employeeObjectId = 789; // Number | 
let settingsObjectId = 789; // Number | 

apiInstance.onsAdministrationWorkdayNormSettingsModelAPIDeleteWorkdayNorm(employeeObjectId, settingsObjectId, (error, data, response) => {
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
 **employeeObjectId** | **Number**|  | 
 **settingsObjectId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="onsAdministrationWorkdayNormSettingsModelAPIGetCurrentAndFutureForEmployees"></a>
# **onsAdministrationWorkdayNormSettingsModelAPIGetCurrentAndFutureForEmployees**
> OnsAdministrationListWorkdayNormSettingsModelList onsAdministrationWorkdayNormSettingsModelAPIGetCurrentAndFutureForEmployees(opts)

Returns the current and future workday norms settings for the given employees. This MAY include default settings when no specific settings exist.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OnsAdministrationWorkdayNormSettingsModelApi();
let opts = { 
  'id': [3.4] // [Number] | 
};
apiInstance.onsAdministrationWorkdayNormSettingsModelAPIGetCurrentAndFutureForEmployees(opts, (error, data, response) => {
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
 **id** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**OnsAdministrationListWorkdayNormSettingsModelList**](OnsAdministrationListWorkdayNormSettingsModelList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="onsAdministrationWorkdayNormSettingsModelAPIGetForEmployee"></a>
# **onsAdministrationWorkdayNormSettingsModelAPIGetForEmployee**
> OnsAdministrationListWorkdayNormSettingsModelList onsAdministrationWorkdayNormSettingsModelAPIGetForEmployee(employeeObjectId)

Returns all workday norms settings for the given employee. Does NOT include any default settings.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OnsAdministrationWorkdayNormSettingsModelApi();
let employeeObjectId = 789; // Number | 

apiInstance.onsAdministrationWorkdayNormSettingsModelAPIGetForEmployee(employeeObjectId, (error, data, response) => {
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
 **employeeObjectId** | **Number**|  | 

### Return type

[**OnsAdministrationListWorkdayNormSettingsModelList**](OnsAdministrationListWorkdayNormSettingsModelList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="onsAdministrationWorkdayNormSettingsModelAPIGetWorkdayNorm"></a>
# **onsAdministrationWorkdayNormSettingsModelAPIGetWorkdayNorm**
> OnsAdministrationWorkdayNormSettingsModel onsAdministrationWorkdayNormSettingsModelAPIGetWorkdayNorm(employeeObjectId, settingsObjectId)

Returns the specified workday norm settings for the given employee.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OnsAdministrationWorkdayNormSettingsModelApi();
let employeeObjectId = 789; // Number | 
let settingsObjectId = 789; // Number | 

apiInstance.onsAdministrationWorkdayNormSettingsModelAPIGetWorkdayNorm(employeeObjectId, settingsObjectId, (error, data, response) => {
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
 **employeeObjectId** | **Number**|  | 
 **settingsObjectId** | **Number**|  | 

### Return type

[**OnsAdministrationWorkdayNormSettingsModel**](OnsAdministrationWorkdayNormSettingsModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="onsAdministrationWorkdayNormSettingsModelAPIUpdateWorkdayNorm"></a>
# **onsAdministrationWorkdayNormSettingsModelAPIUpdateWorkdayNorm**
> OnsAdministrationWorkdayNormSettingsModel onsAdministrationWorkdayNormSettingsModelAPIUpdateWorkdayNorm(body, employeeObjectId, settingsObjectId)

Updates the specified workday norm settings for the given employee.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OnsAdministrationWorkdayNormSettingsModelApi();
let body = new NedapOnsApi.OnsAdministrationWorkdayNormSettingsModel(); // OnsAdministrationWorkdayNormSettingsModel | 
let employeeObjectId = 789; // Number | 
let settingsObjectId = 789; // Number | 

apiInstance.onsAdministrationWorkdayNormSettingsModelAPIUpdateWorkdayNorm(body, employeeObjectId, settingsObjectId, (error, data, response) => {
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
 **body** | [**OnsAdministrationWorkdayNormSettingsModel**](OnsAdministrationWorkdayNormSettingsModel.md)|  | 
 **employeeObjectId** | **Number**|  | 
 **settingsObjectId** | **Number**|  | 

### Return type

[**OnsAdministrationWorkdayNormSettingsModel**](OnsAdministrationWorkdayNormSettingsModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

