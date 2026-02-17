# NedapOnsApi.ClientCollabSharedResourceApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientCollabSharedResourceAPIByClientIdAndResource**](ClientCollabSharedResourceApi.md#clientCollabSharedResourceAPIByClientIdAndResource) | **GET** /v0/caren/shared_resources | WARNING: DEPRECATED. Replaced by ons_client.SharedResourceAPI.byClientIdAndResource 
[**clientCollabSharedResourceAPIUnshare**](ClientCollabSharedResourceApi.md#clientCollabSharedResourceAPIUnshare) | **PUT** /v0/caren/shared_resources/{id}/unshare | WARNING: DEPRECATED. Replaced by ons_client.SharedResourceAPI.unshare

<a name="clientCollabSharedResourceAPIByClientIdAndResource"></a>
# **clientCollabSharedResourceAPIByClientIdAndResource**
> ClientCollabListSharedResourceList clientCollabSharedResourceAPIByClientIdAndResource(opts)

WARNING: DEPRECATED. Replaced by ons_client.SharedResourceAPI.byClientIdAndResource 

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientCollabSharedResourceApi();
let opts = { 
  'clientId': 789, // Number | 
  'resourceName': "resourceName_example", // String | 
  'resourceId': 789, // Number | 
  'id': [3.4] // [Number] | array style id's: id=1&id=2&etc
};
apiInstance.clientCollabSharedResourceAPIByClientIdAndResource(opts, (error, data, response) => {
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
 **id** | [**[Number]**](Number.md)| array style id&#x27;s: id&#x3D;1&amp;id&#x3D;2&amp;etc | [optional] 

### Return type

[**ClientCollabListSharedResourceList**](ClientCollabListSharedResourceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientCollabSharedResourceAPIUnshare"></a>
# **clientCollabSharedResourceAPIUnshare**
> ClientCollabSharedResource clientCollabSharedResourceAPIUnshare(body, id)

WARNING: DEPRECATED. Replaced by ons_client.SharedResourceAPI.unshare

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientCollabSharedResourceApi();
let body = new NedapOnsApi.ClientCollabSharedResource(); // ClientCollabSharedResource | 
let id = 789; // Number | 

apiInstance.clientCollabSharedResourceAPIUnshare(body, id, (error, data, response) => {
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
 **body** | [**ClientCollabSharedResource**](ClientCollabSharedResource.md)|  | 
 **id** | **Number**|  | 

### Return type

[**ClientCollabSharedResource**](ClientCollabSharedResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

