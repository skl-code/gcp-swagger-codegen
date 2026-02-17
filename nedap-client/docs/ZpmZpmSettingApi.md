# NedapOnsApi.ZpmZpmSettingApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**zpmZpmSettingAPIGetAll**](ZpmZpmSettingApi.md#zpmZpmSettingAPIGetAll) | **GET** /v0/administration/zpm/settings | Returns a list of all ZPM settings.

<a name="zpmZpmSettingAPIGetAll"></a>
# **zpmZpmSettingAPIGetAll**
> ZpmListZpmSettingList zpmZpmSettingAPIGetAll()

Returns a list of all ZPM settings.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ZpmZpmSettingApi();
apiInstance.zpmZpmSettingAPIGetAll((error, data, response) => {
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

[**ZpmListZpmSettingList**](ZpmListZpmSettingList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

