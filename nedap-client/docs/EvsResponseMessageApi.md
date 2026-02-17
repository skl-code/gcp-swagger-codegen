# NedapOnsApi.EvsResponseMessageApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**evsResponseMessageAPISend**](EvsResponseMessageApi.md#evsResponseMessageAPISend) | **PUT** /v0/administration/evs/response_message | Send a response of an earlier sent message from FVC back to OA

<a name="evsResponseMessageAPISend"></a>
# **evsResponseMessageAPISend**
> EvsResponseMessage evsResponseMessageAPISend(body)

Send a response of an earlier sent message from FVC back to OA

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.EvsResponseMessageApi();
let body = new NedapOnsApi.EvsResponseMessage(); // EvsResponseMessage | Responsemessage to be sent to OA

apiInstance.evsResponseMessageAPISend(body, (error, data, response) => {
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
 **body** | [**EvsResponseMessage**](EvsResponseMessage.md)| Responsemessage to be sent to OA | 

### Return type

[**EvsResponseMessage**](EvsResponseMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

