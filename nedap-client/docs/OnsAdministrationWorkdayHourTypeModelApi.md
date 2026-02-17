# NedapOnsApi.OnsAdministrationWorkdayHourTypeModelApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**onsAdministrationWorkdayHourTypeModelAPIGetWorkdayHourTypes**](OnsAdministrationWorkdayHourTypeModelApi.md#onsAdministrationWorkdayHourTypeModelAPIGetWorkdayHourTypes) | **GET** /v0/administration/hour_types/workdays | Returns all workday hour types (activities) with their validity periods. During these periods, the corresponding hour type is counted as a workday. If the hour type is not present in this list, it is never counted as a workday. 

<a name="onsAdministrationWorkdayHourTypeModelAPIGetWorkdayHourTypes"></a>
# **onsAdministrationWorkdayHourTypeModelAPIGetWorkdayHourTypes**
> OnsAdministrationListWorkdayHourTypeModelList onsAdministrationWorkdayHourTypeModelAPIGetWorkdayHourTypes()

Returns all workday hour types (activities) with their validity periods. During these periods, the corresponding hour type is counted as a workday. If the hour type is not present in this list, it is never counted as a workday. 

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OnsAdministrationWorkdayHourTypeModelApi();
apiInstance.onsAdministrationWorkdayHourTypeModelAPIGetWorkdayHourTypes((error, data, response) => {
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

[**OnsAdministrationListWorkdayHourTypeModelList**](OnsAdministrationListWorkdayHourTypeModelList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

