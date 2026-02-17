# NedapOnsApi.MovesAvailabilityApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**movesAvailabilityAPIStreamAll**](MovesAvailabilityApi.md#movesAvailabilityAPIStreamAll) | **GET** /v0/xstream/availabilities/data | Return all Availability models in a streaming manner
[**movesAvailabilityAPIStreamDeletes**](MovesAvailabilityApi.md#movesAvailabilityAPIStreamDeletes) | **GET** /v0/xstream/availabilities/deletes | Return all Availability models which where deleted since the date given in the request.
[**movesAvailabilityAPIStreamUpdates**](MovesAvailabilityApi.md#movesAvailabilityAPIStreamUpdates) | **GET** /v0/xstream/availabilities/updates | Return all Availability models which where updated since the date given in the request.

<a name="movesAvailabilityAPIStreamAll"></a>
# **movesAvailabilityAPIStreamAll**
> MovesListAvailabilityList movesAvailabilityAPIStreamAll()

Return all Availability models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesAvailabilityApi();
apiInstance.movesAvailabilityAPIStreamAll((error, data, response) => {
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

[**MovesListAvailabilityList**](MovesListAvailabilityList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="movesAvailabilityAPIStreamDeletes"></a>
# **movesAvailabilityAPIStreamDeletes**
> MovesListAvailabilityList movesAvailabilityAPIStreamDeletes(since)

Return all Availability models which where deleted since the date given in the request.

If no date is given it will return all deleted Availability models

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesAvailabilityApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.movesAvailabilityAPIStreamDeletes(since, (error, data, response) => {
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

[**MovesListAvailabilityList**](MovesListAvailabilityList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="movesAvailabilityAPIStreamUpdates"></a>
# **movesAvailabilityAPIStreamUpdates**
> MovesListAvailabilityList movesAvailabilityAPIStreamUpdates(since)

Return all Availability models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesAvailabilityApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.movesAvailabilityAPIStreamUpdates(since, (error, data, response) => {
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

[**MovesListAvailabilityList**](MovesListAvailabilityList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

