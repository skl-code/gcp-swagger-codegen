# NedapOnsApi.ClientStoryChangeSetApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientStoryChangeSetAPIMostRecentByClient**](ClientStoryChangeSetApi.md#clientStoryChangeSetAPIMostRecentByClient) | **GET** /v0/client_story/change_sets/most_recent_by_client/{client_id} | Returns the most recent change set for the client

<a name="clientStoryChangeSetAPIMostRecentByClient"></a>
# **clientStoryChangeSetAPIMostRecentByClient**
> ClientStoryChangeSet clientStoryChangeSetAPIMostRecentByClient(clientId)

Returns the most recent change set for the client

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientStoryChangeSetApi();
let clientId = 789; // Number | The ID of the client

apiInstance.clientStoryChangeSetAPIMostRecentByClient(clientId, (error, data, response) => {
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

[**ClientStoryChangeSet**](ClientStoryChangeSet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

