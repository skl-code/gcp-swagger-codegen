# NedapOnsApi.ZpmZpmZorglabelApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**zpmZpmZorglabelAPIGetAll**](ZpmZpmZorglabelApi.md#zpmZpmZorglabelAPIGetAll) | **GET** /v0/administration/zpm/zorglabels | Returns a list of all ZPM zorglabels.

<a name="zpmZpmZorglabelAPIGetAll"></a>
# **zpmZpmZorglabelAPIGetAll**
> ZpmListZpmZorglabelList zpmZpmZorglabelAPIGetAll()

Returns a list of all ZPM zorglabels.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ZpmZpmZorglabelApi();
apiInstance.zpmZpmZorglabelAPIGetAll((error, data, response) => {
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

[**ZpmListZpmZorglabelList**](ZpmListZpmZorglabelList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

