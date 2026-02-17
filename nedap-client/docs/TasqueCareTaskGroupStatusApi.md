# NedapOnsApi.TasqueCareTaskGroupStatusApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tasqueCareTaskGroupStatusAPIAll**](TasqueCareTaskGroupStatusApi.md#tasqueCareTaskGroupStatusAPIAll) | **GET** /v0/taken/care_task_group_statuses | Returns every CareTaskGroupStatus available from the CareTaskGroupStatusAPI

<a name="tasqueCareTaskGroupStatusAPIAll"></a>
# **tasqueCareTaskGroupStatusAPIAll**
> TasqueListCareTaskGroupStatusList tasqueCareTaskGroupStatusAPIAll()

Returns every CareTaskGroupStatus available from the CareTaskGroupStatusAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TasqueCareTaskGroupStatusApi();
apiInstance.tasqueCareTaskGroupStatusAPIAll((error, data, response) => {
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

[**TasqueListCareTaskGroupStatusList**](TasqueListCareTaskGroupStatusList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

