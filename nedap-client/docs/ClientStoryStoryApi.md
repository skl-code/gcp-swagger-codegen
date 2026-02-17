# NedapOnsApi.ClientStoryStoryApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientStoryStoryAPIAuthorizedFullByClient**](ClientStoryStoryApi.md#clientStoryStoryAPIAuthorizedFullByClient) | **GET** /v0/client_story/authorized/stories/full_by_client/{client_id} | Return the full client story for the given client id.
[**clientStoryStoryAPIAuthorizedImageByClientIdAndReference**](ClientStoryStoryApi.md#clientStoryStoryAPIAuthorizedImageByClientIdAndReference) | **GET** /v0/client_story/authorized/clients/{client_id}/client_story/images | Authorized api Return a base64 encoded string of the image that is identified by the given reference
[**clientStoryStoryAPICreatePermission**](ClientStoryStoryApi.md#clientStoryStoryAPICreatePermission) | **POST** /v0/client_story/care_relations/request_for_client/{client_id} | Get permission for the current careprovider to view the client story
[**clientStoryStoryAPIFullByClient**](ClientStoryStoryApi.md#clientStoryStoryAPIFullByClient) | **GET** /v0/client_story/stories/full_by_client/{client_id} | Return the full client story for the given client id
[**clientStoryStoryAPIImageByClientIdAndReference**](ClientStoryStoryApi.md#clientStoryStoryAPIImageByClientIdAndReference) | **GET** /v0/client_story/clients/{client_id}/client_story/images | Return a base64 encoded string of the image that is identified by the given reference
[**clientStoryStoryAPISaveAnswer**](ClientStoryStoryApi.md#clientStoryStoryAPISaveAnswer) | **PUT** /v0/client_story/stories/by_client/{client_id} | Save updates to the story of the client incrementally
[**clientStoryStoryAPISingleAnswerFullByClient**](ClientStoryStoryApi.md#clientStoryStoryAPISingleAnswerFullByClient) | **GET** /v0/client_story/stories/single_answer_full_by_client/{client_id} | Return the full client story for the given client id Collapses the full json schema and form data to a single answer

<a name="clientStoryStoryAPIAuthorizedFullByClient"></a>
# **clientStoryStoryAPIAuthorizedFullByClient**
> ClientStoryStory clientStoryStoryAPIAuthorizedFullByClient(clientId)

Return the full client story for the given client id.

Checks the ClientStoryOverview right and generates an audit.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientStoryStoryApi();
let clientId = 789; // Number | The ID of the client

apiInstance.clientStoryStoryAPIAuthorizedFullByClient(clientId, (error, data, response) => {
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
 **clientId** | **Number**| The ID of the client | 

### Return type

[**ClientStoryStory**](ClientStoryStory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientStoryStoryAPIAuthorizedImageByClientIdAndReference"></a>
# **clientStoryStoryAPIAuthorizedImageByClientIdAndReference**
> &#x27;String&#x27; clientStoryStoryAPIAuthorizedImageByClientIdAndReference(clientId, reference)

Authorized api Return a base64 encoded string of the image that is identified by the given reference

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientStoryStoryApi();
let clientId = "clientId_example"; // String | The client the image belongs to
let reference = "reference_example"; // String | The reference of the image

apiInstance.clientStoryStoryAPIAuthorizedImageByClientIdAndReference(clientId, reference, (error, data, response) => {
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
 **clientId** | **String**| The client the image belongs to | 
 **reference** | **String**| The reference of the image | 

### Return type

**&#x27;String&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

<a name="clientStoryStoryAPICreatePermission"></a>
# **clientStoryStoryAPICreatePermission**
> &#x27;String&#x27; clientStoryStoryAPICreatePermission(clientId)

Get permission for the current careprovider to view the client story

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientStoryStoryApi();
let clientId = 789; // Number | The ID of the client

apiInstance.clientStoryStoryAPICreatePermission(clientId, (error, data, response) => {
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
 **clientId** | **Number**| The ID of the client | 

### Return type

**&#x27;String&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

<a name="clientStoryStoryAPIFullByClient"></a>
# **clientStoryStoryAPIFullByClient**
> ClientStoryStory clientStoryStoryAPIFullByClient(clientId)

Return the full client story for the given client id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientStoryStoryApi();
let clientId = 789; // Number | The ID of the client

apiInstance.clientStoryStoryAPIFullByClient(clientId, (error, data, response) => {
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
 **clientId** | **Number**| The ID of the client | 

### Return type

[**ClientStoryStory**](ClientStoryStory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientStoryStoryAPIImageByClientIdAndReference"></a>
# **clientStoryStoryAPIImageByClientIdAndReference**
> &#x27;String&#x27; clientStoryStoryAPIImageByClientIdAndReference(clientId, reference)

Return a base64 encoded string of the image that is identified by the given reference

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientStoryStoryApi();
let clientId = "clientId_example"; // String | The client the image belongs to
let reference = "reference_example"; // String | The reference of the image

apiInstance.clientStoryStoryAPIImageByClientIdAndReference(clientId, reference, (error, data, response) => {
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
 **clientId** | **String**| The client the image belongs to | 
 **reference** | **String**| The reference of the image | 

### Return type

**&#x27;String&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

<a name="clientStoryStoryAPISaveAnswer"></a>
# **clientStoryStoryAPISaveAnswer**
> ClientStoryStory clientStoryStoryAPISaveAnswer(body, clientId)

Save updates to the story of the client incrementally

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientStoryStoryApi();
let body = new NedapOnsApi.ClientStoryStory(); // ClientStoryStory | The story of the client
let clientId = 789; // Number | The ID of the client

apiInstance.clientStoryStoryAPISaveAnswer(body, clientId, (error, data, response) => {
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
 **body** | [**ClientStoryStory**](ClientStoryStory.md)| The story of the client | 
 **clientId** | **Number**| The ID of the client | 

### Return type

[**ClientStoryStory**](ClientStoryStory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clientStoryStoryAPISingleAnswerFullByClient"></a>
# **clientStoryStoryAPISingleAnswerFullByClient**
> ClientStoryStory clientStoryStoryAPISingleAnswerFullByClient(clientId)

Return the full client story for the given client id Collapses the full json schema and form data to a single answer

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientStoryStoryApi();
let clientId = 789; // Number | The ID of the client

apiInstance.clientStoryStoryAPISingleAnswerFullByClient(clientId, (error, data, response) => {
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
 **clientId** | **Number**| The ID of the client | 

### Return type

[**ClientStoryStory**](ClientStoryStory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

