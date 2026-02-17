# NedapOnsApi.EmployeePrivacySettingsApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**employeePrivacySettingsAPIUpdateByEmployeeId**](EmployeePrivacySettingsApi.md#employeePrivacySettingsAPIUpdateByEmployeeId) | **PUT** /v0/administration/employees/{employee_id}/privacy_settings | Update the employee privacy settings corresponding to the given id.

<a name="employeePrivacySettingsAPIUpdateByEmployeeId"></a>
# **employeePrivacySettingsAPIUpdateByEmployeeId**
> EmployeePrivacySettings employeePrivacySettingsAPIUpdateByEmployeeId(body, employeeId)

Update the employee privacy settings corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.EmployeePrivacySettingsApi();
let body = new NedapOnsApi.EmployeePrivacySettings(); // EmployeePrivacySettings | 
let employeeId = 789; // Number | 

apiInstance.employeePrivacySettingsAPIUpdateByEmployeeId(body, employeeId, (error, data, response) => {
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
 **body** | [**EmployeePrivacySettings**](EmployeePrivacySettings.md)|  | 
 **employeeId** | **Number**|  | 

### Return type

[**EmployeePrivacySettings**](EmployeePrivacySettings.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

