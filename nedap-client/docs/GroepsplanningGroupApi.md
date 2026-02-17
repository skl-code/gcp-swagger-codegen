# NedapOnsApi.GroepsplanningGroupApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**groepsplanningGroupAPIStreamAll**](GroepsplanningGroupApi.md#groepsplanningGroupAPIStreamAll) | **GET** /v0/xstream/groepsplanning_groups/data | Return all Group models from groepsplanning in a streaming manner

<a name="groepsplanningGroupAPIStreamAll"></a>
# **groepsplanningGroupAPIStreamAll**
> GroepsplanningListGroupList groepsplanningGroupAPIStreamAll()

Return all Group models from groepsplanning in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.GroepsplanningGroupApi();
apiInstance.groepsplanningGroupAPIStreamAll((error, data, response) => {
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

[**GroepsplanningListGroupList**](GroepsplanningListGroupList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

