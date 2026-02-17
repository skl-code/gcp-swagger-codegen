# NedapOnsApi.NexusClientEmployeeRelationTypeApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nexusClientEmployeeRelationTypeAPIAll**](NexusClientEmployeeRelationTypeApi.md#nexusClientEmployeeRelationTypeAPIAll) | **GET** /v0/ons_nexus/client_employee_relation_types | Returns every ClientEmployeeRelationType available from the ClientEmployeeRelationTypeAPI
[**nexusClientEmployeeRelationTypeAPIById**](NexusClientEmployeeRelationTypeApi.md#nexusClientEmployeeRelationTypeAPIById) | **GET** /v0/ons_nexus/client_employee_relation_types/{id} | 

<a name="nexusClientEmployeeRelationTypeAPIAll"></a>
# **nexusClientEmployeeRelationTypeAPIAll**
> NexusListClientEmployeeRelationTypeList nexusClientEmployeeRelationTypeAPIAll(opts)

Returns every ClientEmployeeRelationType available from the ClientEmployeeRelationTypeAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.NexusClientEmployeeRelationTypeApi();
let opts = { 
  'offset': 56, // Number | number of results to skip
  'limit': 56 // Number | number of results for one call
};
apiInstance.nexusClientEmployeeRelationTypeAPIAll(opts, (error, data, response) => {
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

[**NexusListClientEmployeeRelationTypeList**](NexusListClientEmployeeRelationTypeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nexusClientEmployeeRelationTypeAPIById"></a>
# **nexusClientEmployeeRelationTypeAPIById**
> NexusClientEmployeeRelationType nexusClientEmployeeRelationTypeAPIById(id)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.NexusClientEmployeeRelationTypeApi();
let id = 789; // Number | used for selecting ClientEmployeeRelationType

apiInstance.nexusClientEmployeeRelationTypeAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting ClientEmployeeRelationType | 

### Return type

[**NexusClientEmployeeRelationType**](NexusClientEmployeeRelationType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

