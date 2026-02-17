# NedapOnsApi.FvcFvcMessageApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fvcFvcMessageAPISend**](FvcFvcMessageApi.md#fvcFvcMessageAPISend) | **POST** /v0/farmed_visie/message | Send a message to FVC

<a name="fvcFvcMessageAPISend"></a>
# **fvcFvcMessageAPISend**
> FvcFvcMessage fvcFvcMessageAPISend(body)

Send a message to FVC

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FvcFvcMessageApi();
let body = new NedapOnsApi.FvcFvcMessage(); // FvcFvcMessage | Message to be sent to FVC

apiInstance.fvcFvcMessageAPISend(body, (error, data, response) => {
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
 **body** | [**FvcFvcMessage**](FvcFvcMessage.md)| Message to be sent to FVC | 

### Return type

[**FvcFvcMessage**](FvcFvcMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

