# NedapOnsApi.NexusPersonalRelationTypeApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nexusPersonalRelationTypeAPIAll**](NexusPersonalRelationTypeApi.md#nexusPersonalRelationTypeAPIAll) | **GET** /v0/ons_nexus/personal_relation_types | Returns every PersonalRelationType available from the PersonalRelationTypeAPI
[**nexusPersonalRelationTypeAPIById**](NexusPersonalRelationTypeApi.md#nexusPersonalRelationTypeAPIById) | **GET** /v0/ons_nexus/personal_relation_types/{id} | 

<a name="nexusPersonalRelationTypeAPIAll"></a>
# **nexusPersonalRelationTypeAPIAll**
> NexusListPersonalRelationTypeList nexusPersonalRelationTypeAPIAll(opts)

Returns every PersonalRelationType available from the PersonalRelationTypeAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.NexusPersonalRelationTypeApi();
let opts = { 
  'offset': 56, // Number | number of results to skip
  'limit': 56 // Number | number of results for one call
};
apiInstance.nexusPersonalRelationTypeAPIAll(opts, (error, data, response) => {
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

[**NexusListPersonalRelationTypeList**](NexusListPersonalRelationTypeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nexusPersonalRelationTypeAPIById"></a>
# **nexusPersonalRelationTypeAPIById**
> NexusPersonalRelationType nexusPersonalRelationTypeAPIById(id)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.NexusPersonalRelationTypeApi();
let id = 789; // Number | used for selecting PersonalRelationType

apiInstance.nexusPersonalRelationTypeAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting PersonalRelationType | 

### Return type

[**NexusPersonalRelationType**](NexusPersonalRelationType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

