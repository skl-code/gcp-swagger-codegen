# NedapOnsApi.AdminTimesheetConfigApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminTimesheetConfigAPIGet**](AdminTimesheetConfigApi.md#adminTimesheetConfigAPIGet) | **GET** /v0/administration/admin/timesheetconfig | Retrieves the TimesheetConfig
[**adminTimesheetConfigAPIUpdate**](AdminTimesheetConfigApi.md#adminTimesheetConfigAPIUpdate) | **PUT** /v0/administration/admin/timesheetconfig | Updates the given TimesheetConfig

<a name="adminTimesheetConfigAPIGet"></a>
# **adminTimesheetConfigAPIGet**
> AdminTimesheetConfig adminTimesheetConfigAPIGet()

Retrieves the TimesheetConfig

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AdminTimesheetConfigApi();
apiInstance.adminTimesheetConfigAPIGet((error, data, response) => {
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

[**AdminTimesheetConfig**](AdminTimesheetConfig.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="adminTimesheetConfigAPIUpdate"></a>
# **adminTimesheetConfigAPIUpdate**
> AdminTimesheetConfig adminTimesheetConfigAPIUpdate(body)

Updates the given TimesheetConfig

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AdminTimesheetConfigApi();
let body = new NedapOnsApi.AdminTimesheetConfig(); // AdminTimesheetConfig | TimesheetConfig to update

apiInstance.adminTimesheetConfigAPIUpdate(body, (error, data, response) => {
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
 **body** | [**AdminTimesheetConfig**](AdminTimesheetConfig.md)| TimesheetConfig to update | 

### Return type

[**AdminTimesheetConfig**](AdminTimesheetConfig.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

