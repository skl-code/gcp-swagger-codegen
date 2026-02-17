# NedapOnsApi.ZpmZpmGbggzProfielApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**zpmZpmGbggzProfielAPIGetAll**](ZpmZpmGbggzProfielApi.md#zpmZpmGbggzProfielAPIGetAll) | **GET** /v0/administration/zpm/gbggz_profielen | Returns a list of all ZPM GB-ggz profielen.

<a name="zpmZpmGbggzProfielAPIGetAll"></a>
# **zpmZpmGbggzProfielAPIGetAll**
> ZpmListZpmGbggzProfielList zpmZpmGbggzProfielAPIGetAll()

Returns a list of all ZPM GB-ggz profielen.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ZpmZpmGbggzProfielApi();
apiInstance.zpmZpmGbggzProfielAPIGetAll((error, data, response) => {
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

[**ZpmListZpmGbggzProfielList**](ZpmListZpmGbggzProfielList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

