# NedapOnsApi.PortalEmployeePortalProfileApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**portalEmployeePortalProfileAPIByEmployeeId**](PortalEmployeePortalProfileApi.md#portalEmployeePortalProfileAPIByEmployeeId) | **GET** /v0/medewerkerportaal/employees/{employee_id}/employee_portal_profile | Return the employee portal profile of a employee corresponding to the given employee id.

<a name="portalEmployeePortalProfileAPIByEmployeeId"></a>
# **portalEmployeePortalProfileAPIByEmployeeId**
> PortalEmployeePortalProfile portalEmployeePortalProfileAPIByEmployeeId(employeeId)

Return the employee portal profile of a employee corresponding to the given employee id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PortalEmployeePortalProfileApi();
let employeeId = 789; // Number | id

apiInstance.portalEmployeePortalProfileAPIByEmployeeId(employeeId, (error, data, response) => {
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

[**PortalEmployeePortalProfile**](PortalEmployeePortalProfile.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

