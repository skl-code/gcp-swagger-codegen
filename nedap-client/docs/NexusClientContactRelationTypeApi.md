# NedapOnsApi.NexusClientContactRelationTypeApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nexusClientContactRelationTypeAPIAll**](NexusClientContactRelationTypeApi.md#nexusClientContactRelationTypeAPIAll) | **GET** /v0/ons_nexus/client_contact_relation_types | Returns every ClientContactRelationType available from the ClientContactRelationTypeAPI
[**nexusClientContactRelationTypeAPIById**](NexusClientContactRelationTypeApi.md#nexusClientContactRelationTypeAPIById) | **GET** /v0/ons_nexus/client_contact_relation_types/{id} | 

<a name="nexusClientContactRelationTypeAPIAll"></a>
# **nexusClientContactRelationTypeAPIAll**
> NexusListClientContactRelationTypeList nexusClientContactRelationTypeAPIAll(opts)

Returns every ClientContactRelationType available from the ClientContactRelationTypeAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.NexusClientContactRelationTypeApi();
let opts = { 
  'offset': 56, // Number | number of results to skip
  'limit': 56 // Number | number of results for one call
};
apiInstance.nexusClientContactRelationTypeAPIAll(opts, (error, data, response) => {
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
 **offset** | **Number**| number of results to skip | [optional] 
 **limit** | **Number**| number of results for one call | [optional] 

### Return type

[**NexusListClientContactRelationTypeList**](NexusListClientContactRelationTypeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nexusClientContactRelationTypeAPIById"></a>
# **nexusClientContactRelationTypeAPIById**
> NexusClientContactRelationType nexusClientContactRelationTypeAPIById(id)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.NexusClientContactRelationTypeApi();
let id = 789; // Number | used for selecting ClientContactRelationType

apiInstance.nexusClientContactRelationTypeAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting ClientContactRelationType | 

### Return type

[**NexusClientContactRelationType**](NexusClientContactRelationType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

