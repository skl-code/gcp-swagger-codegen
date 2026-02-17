# NedapOnsApi.AdminBackgroundImageApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminBackgroundImageAPIGet**](AdminBackgroundImageApi.md#adminBackgroundImageAPIGet) | **GET** /v0/administration/admin/background_image | Retrieves the BackgroundImage

<a name="adminBackgroundImageAPIGet"></a>
# **adminBackgroundImageAPIGet**
> AdminBackgroundImage adminBackgroundImageAPIGet()

Retrieves the BackgroundImage

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AdminBackgroundImageApi();
apiInstance.adminBackgroundImageAPIGet((error, data, response) => {
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

[**AdminBackgroundImage**](AdminBackgroundImage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

