# NedapOnsApi.OnsAdministrationWorkdayNormPeriodModelApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**onsAdministrationWorkdayNormPeriodModelAPIGetCurrentPeriodsByEmployee**](OnsAdministrationWorkdayNormPeriodModelApi.md#onsAdministrationWorkdayNormPeriodModelAPIGetCurrentPeriodsByEmployee) | **GET** /v0/administration/employees/workday_norms/current | Returns the workday norm periods for the given employees. Includes the default norm agreement.

<a name="onsAdministrationWorkdayNormPeriodModelAPIGetCurrentPeriodsByEmployee"></a>
# **onsAdministrationWorkdayNormPeriodModelAPIGetCurrentPeriodsByEmployee**
> OnsAdministrationListWorkdayNormPeriodModelList onsAdministrationWorkdayNormPeriodModelAPIGetCurrentPeriodsByEmployee(opts)

Returns the workday norm periods for the given employees. Includes the default norm agreement.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OnsAdministrationWorkdayNormPeriodModelApi();
let opts = { 
  'id': [3.4] // [Number] | 
};
apiInstance.onsAdministrationWorkdayNormPeriodModelAPIGetCurrentPeriodsByEmployee(opts, (error, data, response) => {
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

[**OnsAdministrationListWorkdayNormPeriodModelList**](OnsAdministrationListWorkdayNormPeriodModelList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

