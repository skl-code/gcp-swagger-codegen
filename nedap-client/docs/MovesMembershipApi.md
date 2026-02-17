# NedapOnsApi.MovesMembershipApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**movesMembershipAPIStreamAll**](MovesMembershipApi.md#movesMembershipAPIStreamAll) | **GET** /v0/xstream/memberships/data | Return all Membership models in a streaming manner
[**movesMembershipAPIStreamDeletes**](MovesMembershipApi.md#movesMembershipAPIStreamDeletes) | **GET** /v0/xstream/memberships/deletes | Return all Membership models which where deleted since the date given in the request.
[**movesMembershipAPIStreamUpdates**](MovesMembershipApi.md#movesMembershipAPIStreamUpdates) | **GET** /v0/xstream/memberships/updates | Return all Membership models which where updated since the date given in the request.

<a name="movesMembershipAPIStreamAll"></a>
# **movesMembershipAPIStreamAll**
> MovesListMembershipList movesMembershipAPIStreamAll()

Return all Membership models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesMembershipApi();
apiInstance.movesMembershipAPIStreamAll((error, data, response) => {
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

[**MovesListMembershipList**](MovesListMembershipList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="movesMembershipAPIStreamDeletes"></a>
# **movesMembershipAPIStreamDeletes**
> MovesListMembershipList movesMembershipAPIStreamDeletes(since)

Return all Membership models which where deleted since the date given in the request.

If no date is given it will return all deleted Membership models

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesMembershipApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.movesMembershipAPIStreamDeletes(since, (error, data, response) => {
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

[**MovesListMembershipList**](MovesListMembershipList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="movesMembershipAPIStreamUpdates"></a>
# **movesMembershipAPIStreamUpdates**
> MovesListMembershipList movesMembershipAPIStreamUpdates(since)

Return all Membership models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesMembershipApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.movesMembershipAPIStreamUpdates(since, (error, data, response) => {
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

[**MovesListMembershipList**](MovesListMembershipList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

