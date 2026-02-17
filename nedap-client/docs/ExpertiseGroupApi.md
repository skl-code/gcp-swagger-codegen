# NedapOnsApi.ExpertiseGroupApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**expertiseGroupAPIAll**](ExpertiseGroupApi.md#expertiseGroupAPIAll) | **GET** /v0/administration/expertise_groups | Returns every ExpertiseGroup available from the ExpertiseGroupAPI
[**expertiseGroupAPIById**](ExpertiseGroupApi.md#expertiseGroupAPIById) | **GET** /v0/administration/expertise_groups/{id} | Returns the ExpertiseGroup corresponding to the given id
[**expertiseGroupAPIMultiple**](ExpertiseGroupApi.md#expertiseGroupAPIMultiple) | **GET** /v0/administration/expertise_groups/multiple | Method used for requesting multiple ExpertiseGroup objects using their ids.
[**expertiseGroupAPIStreamAll**](ExpertiseGroupApi.md#expertiseGroupAPIStreamAll) | **GET** /v0/xstream/expertise_groups/data | Return all ExpertiseGroup models in a streaming manner
[**expertiseGroupAPIStreamUpdates**](ExpertiseGroupApi.md#expertiseGroupAPIStreamUpdates) | **GET** /v0/xstream/expertise_groups/updates | Return all ExpertiseGroup models which where updated since the date given in the request.

<a name="expertiseGroupAPIAll"></a>
# **expertiseGroupAPIAll**
> ListExpertiseGroupList expertiseGroupAPIAll()

Returns every ExpertiseGroup available from the ExpertiseGroupAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpertiseGroupApi();
apiInstance.expertiseGroupAPIAll((error, data, response) => {
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

[**ListExpertiseGroupList**](ListExpertiseGroupList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="expertiseGroupAPIById"></a>
# **expertiseGroupAPIById**
> ExpertiseGroup expertiseGroupAPIById(id)

Returns the ExpertiseGroup corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpertiseGroupApi();
let id = 789; // Number | used for selecting ExpertiseGroup

apiInstance.expertiseGroupAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting ExpertiseGroup | 

### Return type

[**ExpertiseGroup**](ExpertiseGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="expertiseGroupAPIMultiple"></a>
# **expertiseGroupAPIMultiple**
> ListExpertiseGroupList expertiseGroupAPIMultiple(opts)

Method used for requesting multiple ExpertiseGroup objects using their ids.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpertiseGroupApi();
let opts = { 
  'id': [3.4] // [Number] | array style id's: id=1&id=2&etc
};
apiInstance.expertiseGroupAPIMultiple(opts, (error, data, response) => {
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
 **id** | [**[Number]**](Number.md)| array style id&#x27;s: id&#x3D;1&amp;id&#x3D;2&amp;etc | [optional] 

### Return type

[**ListExpertiseGroupList**](ListExpertiseGroupList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="expertiseGroupAPIStreamAll"></a>
# **expertiseGroupAPIStreamAll**
> ListExpertiseGroupList expertiseGroupAPIStreamAll()

Return all ExpertiseGroup models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpertiseGroupApi();
apiInstance.expertiseGroupAPIStreamAll((error, data, response) => {
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

[**ListExpertiseGroupList**](ListExpertiseGroupList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="expertiseGroupAPIStreamUpdates"></a>
# **expertiseGroupAPIStreamUpdates**
> ListExpertiseGroupList expertiseGroupAPIStreamUpdates(since)

Return all ExpertiseGroup models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpertiseGroupApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.expertiseGroupAPIStreamUpdates(since, (error, data, response) => {
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
 **since** | **Date**|  | 

### Return type

[**ListExpertiseGroupList**](ListExpertiseGroupList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

