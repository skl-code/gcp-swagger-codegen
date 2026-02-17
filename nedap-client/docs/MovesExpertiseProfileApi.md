# NedapOnsApi.MovesExpertiseProfileApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**movesExpertiseProfileAPIStreamAll**](MovesExpertiseProfileApi.md#movesExpertiseProfileAPIStreamAll) | **GET** /v0/xstream/expertise_profiles/data | Return all ExpertiseProfile models in a streaming manner
[**movesExpertiseProfileAPIStreamDeletes**](MovesExpertiseProfileApi.md#movesExpertiseProfileAPIStreamDeletes) | **GET** /v0/xstream/expertise_profiles/deletes | Return all ExpertiseProfile models which where deleted since the date given in the request.
[**movesExpertiseProfileAPIStreamUpdates**](MovesExpertiseProfileApi.md#movesExpertiseProfileAPIStreamUpdates) | **GET** /v0/xstream/expertise_profiles/updates | Return all ExpertiseProfile models which where updated since the date given in the request.

<a name="movesExpertiseProfileAPIStreamAll"></a>
# **movesExpertiseProfileAPIStreamAll**
> MovesListExpertiseProfileList movesExpertiseProfileAPIStreamAll()

Return all ExpertiseProfile models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesExpertiseProfileApi();
apiInstance.movesExpertiseProfileAPIStreamAll((error, data, response) => {
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

[**MovesListExpertiseProfileList**](MovesListExpertiseProfileList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="movesExpertiseProfileAPIStreamDeletes"></a>
# **movesExpertiseProfileAPIStreamDeletes**
> MovesListExpertiseProfileList movesExpertiseProfileAPIStreamDeletes(since)

Return all ExpertiseProfile models which where deleted since the date given in the request.

If no date is given it will return all deleted ExpertiseProfile models

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesExpertiseProfileApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.movesExpertiseProfileAPIStreamDeletes(since, (error, data, response) => {
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

[**MovesListExpertiseProfileList**](MovesListExpertiseProfileList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="movesExpertiseProfileAPIStreamUpdates"></a>
# **movesExpertiseProfileAPIStreamUpdates**
> MovesListExpertiseProfileList movesExpertiseProfileAPIStreamUpdates(since)

Return all ExpertiseProfile models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesExpertiseProfileApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.movesExpertiseProfileAPIStreamUpdates(since, (error, data, response) => {
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

[**MovesListExpertiseProfileList**](MovesListExpertiseProfileList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

