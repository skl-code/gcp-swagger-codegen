# NedapOnsApi.StatusApplicationStatusApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**statusApplicationStatusAPIGet**](StatusApplicationStatusApi.md#statusApplicationStatusAPIGet) | **GET** /v0/administration/status/application | Retrieves the ApplicationStatus

<a name="statusApplicationStatusAPIGet"></a>
# **statusApplicationStatusAPIGet**
> StatusApplicationStatus statusApplicationStatusAPIGet()

Retrieves the ApplicationStatus

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.StatusApplicationStatusApi();
apiInstance.statusApplicationStatusAPIGet((error, data, response) => {
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

[**StatusApplicationStatus**](StatusApplicationStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

