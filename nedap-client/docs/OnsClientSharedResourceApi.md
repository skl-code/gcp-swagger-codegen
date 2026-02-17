# NedapOnsApi.OnsClientSharedResourceApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**onsClientSharedResourceAPIByClientIdAndResource**](OnsClientSharedResourceApi.md#onsClientSharedResourceAPIByClientIdAndResource) | **GET** /v0/client/shared_resources | Retrieve all shared resources

<a name="onsClientSharedResourceAPIByClientIdAndResource"></a>
# **onsClientSharedResourceAPIByClientIdAndResource**
> OnsClientListSharedResourceList onsClientSharedResourceAPIByClientIdAndResource(opts)

Retrieve all shared resources

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OnsClientSharedResourceApi();
let opts = { 
  'clientId': 789, // Number | 
  'resourceName': "resourceName_example", // String | 
  'resourceId': 789 // Number | 
};
apiInstance.onsClientSharedResourceAPIByClientIdAndResource(opts, (error, data, response) => {
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
 **clientId** | **Number**|  | [optional] 
 **resourceName** | **String**|  | [optional] 
 **resourceId** | **Number**|  | [optional] 

### Return type

[**OnsClientListSharedResourceList**](OnsClientListSharedResourceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

