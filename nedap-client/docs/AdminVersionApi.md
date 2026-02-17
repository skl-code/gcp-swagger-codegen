# NedapOnsApi.AdminVersionApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminVersionAPIGet**](AdminVersionApi.md#adminVersionAPIGet) | **GET** /v0/administration/admin/version | Retrieves the Version

<a name="adminVersionAPIGet"></a>
# **adminVersionAPIGet**
> AdminVersion adminVersionAPIGet()

Retrieves the Version

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AdminVersionApi();
apiInstance.adminVersionAPIGet((error, data, response) => {
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

[**AdminVersion**](AdminVersion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

