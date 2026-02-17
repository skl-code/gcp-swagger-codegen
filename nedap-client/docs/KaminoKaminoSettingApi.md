# NedapOnsApi.KaminoKaminoSettingApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**kaminoKaminoSettingAPIByEmployeeId**](KaminoKaminoSettingApi.md#kaminoKaminoSettingAPIByEmployeeId) | **GET** /v0/berichten/employees/{employee_id}/setting | Return the kamino setting of a employee corresponding to the given employee id.
[**kaminoKaminoSettingAPIUpdate**](KaminoKaminoSettingApi.md#kaminoKaminoSettingAPIUpdate) | **PATCH** /v0/berichten/employees/{employee_id}/setting | Updates the kamino setting of the employee corresponding to the given employee id.

<a name="kaminoKaminoSettingAPIByEmployeeId"></a>
# **kaminoKaminoSettingAPIByEmployeeId**
> KaminoKaminoSetting kaminoKaminoSettingAPIByEmployeeId(employeeId)

Return the kamino setting of a employee corresponding to the given employee id.

Return the kamino setting of a employee corresponding to the given employee id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.KaminoKaminoSettingApi();
let employeeId = 789; // Number | id

apiInstance.kaminoKaminoSettingAPIByEmployeeId(employeeId, (error, data, response) => {
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

[**KaminoKaminoSetting**](KaminoKaminoSetting.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="kaminoKaminoSettingAPIUpdate"></a>
# **kaminoKaminoSettingAPIUpdate**
> kaminoKaminoSettingAPIUpdate(body, employeeId)

Updates the kamino setting of the employee corresponding to the given employee id.

Updates the kamino setting of the employee corresponding to the given employee id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.KaminoKaminoSettingApi();
let body = new NedapOnsApi.KaminoKaminoSetting(); // KaminoKaminoSetting | 
let employeeId = 789; // Number | id

apiInstance.kaminoKaminoSettingAPIUpdate(body, employeeId, (error, data, response) => {
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
 **body** | [**KaminoKaminoSetting**](KaminoKaminoSetting.md)|  | 
 **employeeId** | **Number**| id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

