# NedapOnsApi.MovesUnitApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**movesUnitAPIStreamAll**](MovesUnitApi.md#movesUnitAPIStreamAll) | **GET** /v0/xstream/units/data | Return all Unit models in a streaming manner
[**movesUnitAPIStreamDeletes**](MovesUnitApi.md#movesUnitAPIStreamDeletes) | **GET** /v0/xstream/units/deletes | Return all Unit models which where deleted since the date given in the request.
[**movesUnitAPIStreamUpdates**](MovesUnitApi.md#movesUnitAPIStreamUpdates) | **GET** /v0/xstream/units/updates | Return all Unit models which where updated since the date given in the request.

<a name="movesUnitAPIStreamAll"></a>
# **movesUnitAPIStreamAll**
> MovesListUnitList movesUnitAPIStreamAll()

Return all Unit models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesUnitApi();
apiInstance.movesUnitAPIStreamAll((error, data, response) => {
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

[**MovesListUnitList**](MovesListUnitList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="movesUnitAPIStreamDeletes"></a>
# **movesUnitAPIStreamDeletes**
> MovesListUnitList movesUnitAPIStreamDeletes(since)

Return all Unit models which where deleted since the date given in the request.

If no date is given it will return all deleted Unit models

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesUnitApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.movesUnitAPIStreamDeletes(since, (error, data, response) => {
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

[**MovesListUnitList**](MovesListUnitList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="movesUnitAPIStreamUpdates"></a>
# **movesUnitAPIStreamUpdates**
> MovesListUnitList movesUnitAPIStreamUpdates(since)

Return all Unit models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesUnitApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.movesUnitAPIStreamUpdates(since, (error, data, response) => {
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

[**MovesListUnitList**](MovesListUnitList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

