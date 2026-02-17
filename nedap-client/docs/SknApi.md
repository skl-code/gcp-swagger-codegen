# NedapOnsApi.SknApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sknAPIById**](SknApi.md#sknAPIById) | **GET** /v0/administration/skns/{id} | Return the Skn corresponding to the given id

<a name="sknAPIById"></a>
# **sknAPIById**
> Skn sknAPIById(id)

Return the Skn corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.SknApi();
let id = 789; // Number | used for selecting Skn

apiInstance.sknAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting Skn | 

### Return type

[**Skn**](Skn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

