# NedapOnsApi.FreeFieldAssignmentApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**freeFieldAssignmentAPIStreamAll**](FreeFieldAssignmentApi.md#freeFieldAssignmentAPIStreamAll) | **GET** /v0/xstream/free_field_assignments/data | Retrieve all entries for free_field_assignments
[**freeFieldAssignmentAPIStreamUpdates**](FreeFieldAssignmentApi.md#freeFieldAssignmentAPIStreamUpdates) | **GET** /v0/xstream/free_field_assignments/updates | Retrieve all updates for free_field_assignments since date

<a name="freeFieldAssignmentAPIStreamAll"></a>
# **freeFieldAssignmentAPIStreamAll**
> ListFreeFieldAssignmentList freeFieldAssignmentAPIStreamAll()

Retrieve all entries for free_field_assignments

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FreeFieldAssignmentApi();
apiInstance.freeFieldAssignmentAPIStreamAll((error, data, response) => {
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

[**ListFreeFieldAssignmentList**](ListFreeFieldAssignmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="freeFieldAssignmentAPIStreamUpdates"></a>
# **freeFieldAssignmentAPIStreamUpdates**
> ListFreeFieldAssignmentList freeFieldAssignmentAPIStreamUpdates(since)

Retrieve all updates for free_field_assignments since date

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FreeFieldAssignmentApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.freeFieldAssignmentAPIStreamUpdates(since, (error, data, response) => {
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

[**ListFreeFieldAssignmentList**](ListFreeFieldAssignmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

