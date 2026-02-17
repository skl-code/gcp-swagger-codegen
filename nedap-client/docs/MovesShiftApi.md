# NedapOnsApi.MovesShiftApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**movesShiftAPIById**](MovesShiftApi.md#movesShiftAPIById) | **GET** /v0/plannen_roosteren/shifts/{id} | Get a shift by its ID
[**movesShiftAPIStreamAll**](MovesShiftApi.md#movesShiftAPIStreamAll) | **GET** /v0/xstream/shifts/data | Return all Shift models in a streaming manner
[**movesShiftAPIStreamDeletes**](MovesShiftApi.md#movesShiftAPIStreamDeletes) | **GET** /v0/xstream/shifts/deletes | Return all Shift models which where deleted since the date given in the request.
[**movesShiftAPIStreamUpdates**](MovesShiftApi.md#movesShiftAPIStreamUpdates) | **GET** /v0/xstream/shifts/updates | Return all Shift models which where updated since the date given in the request.

<a name="movesShiftAPIById"></a>
# **movesShiftAPIById**
> MovesShift movesShiftAPIById(id)

Get a shift by its ID

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesShiftApi();
let id = "id_example"; // String | used for selecting Shift

apiInstance.movesShiftAPIById(id, (error, data, response) => {
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
 **id** | **String**| used for selecting Shift | 

### Return type

[**MovesShift**](MovesShift.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="movesShiftAPIStreamAll"></a>
# **movesShiftAPIStreamAll**
> MovesListShiftList movesShiftAPIStreamAll()

Return all Shift models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesShiftApi();
apiInstance.movesShiftAPIStreamAll((error, data, response) => {
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

[**MovesListShiftList**](MovesListShiftList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="movesShiftAPIStreamDeletes"></a>
# **movesShiftAPIStreamDeletes**
> MovesListShiftList movesShiftAPIStreamDeletes(since)

Return all Shift models which where deleted since the date given in the request.

If no date is given it will return all deleted Shift models

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesShiftApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.movesShiftAPIStreamDeletes(since, (error, data, response) => {
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

[**MovesListShiftList**](MovesListShiftList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="movesShiftAPIStreamUpdates"></a>
# **movesShiftAPIStreamUpdates**
> MovesListShiftList movesShiftAPIStreamUpdates(since)

Return all Shift models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesShiftApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.movesShiftAPIStreamUpdates(since, (error, data, response) => {
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

[**MovesListShiftList**](MovesListShiftList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

