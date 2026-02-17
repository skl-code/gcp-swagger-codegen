# NedapOnsApi.WhismurCareProviderSettingApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**whismurCareProviderSettingAPIAll**](WhismurCareProviderSettingApi.md#whismurCareProviderSettingAPIAll) | **GET** /v0/whismur/settings | Retrieve speech to text settings for Care Organization

<a name="whismurCareProviderSettingAPIAll"></a>
# **whismurCareProviderSettingAPIAll**
> WhismurCareProviderSetting whismurCareProviderSettingAPIAll()

Retrieve speech to text settings for Care Organization

Retrieve speech to text settings for Care Organization

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.WhismurCareProviderSettingApi();
apiInstance.whismurCareProviderSettingAPIAll((error, data, response) => {
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

[**WhismurCareProviderSetting**](WhismurCareProviderSetting.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

