# NedapOnsApi.CareAllocationApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**careAllocationAPIByClientId**](CareAllocationApi.md#careAllocationAPIByClientId) | **GET** /v0/administration/clients/{client_id}/care_allocations | Return the care providers of a Client corresponding to the given id.
[**careAllocationAPIById**](CareAllocationApi.md#careAllocationAPIById) | **GET** /v0/administration/careallocations/{id} | Return the Care Allocation corresponding to the given id
[**careAllocationAPICreate**](CareAllocationApi.md#careAllocationAPICreate) | **POST** /v0/administration/careallocations | Create a CareAllocation
[**careAllocationAPIStreamAll**](CareAllocationApi.md#careAllocationAPIStreamAll) | **GET** /v0/xstream/care_allocations/data | Return all CareAllocation models in a streaming manner
[**careAllocationAPIStreamDeletes**](CareAllocationApi.md#careAllocationAPIStreamDeletes) | **GET** /v0/xstream/care_allocations/deletes | Return all CareAllocation models which where deleted since the date given in the request.
[**careAllocationAPIStreamUpdates**](CareAllocationApi.md#careAllocationAPIStreamUpdates) | **GET** /v0/xstream/care_allocations/updates | Return all CareAllocation models which where updated since the date given in the request.
[**careAllocationAPIUpdateCareAllocationById**](CareAllocationApi.md#careAllocationAPIUpdateCareAllocationById) | **PUT** /v0/administration/careallocations/{id} | Update the Care Allocation corresponding to the given id

<a name="careAllocationAPIByClientId"></a>
# **careAllocationAPIByClientId**
> ListCareAllocationList careAllocationAPIByClientId(clientId)

Return the care providers of a Client corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CareAllocationApi();
let clientId = 789; // Number | id

apiInstance.careAllocationAPIByClientId(clientId, (error, data, response) => {
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
 **clientId** | **Number**| id | 

### Return type

[**ListCareAllocationList**](ListCareAllocationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="careAllocationAPIById"></a>
# **careAllocationAPIById**
> CareAllocation careAllocationAPIById(id)

Return the Care Allocation corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CareAllocationApi();
let id = 789; // Number | used for selecting CareAllocation

apiInstance.careAllocationAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting CareAllocation | 

### Return type

[**CareAllocation**](CareAllocation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="careAllocationAPICreate"></a>
# **careAllocationAPICreate**
> CareAllocation careAllocationAPICreate(body)

Create a CareAllocation

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CareAllocationApi();
let body = new NedapOnsApi.CareAllocation(); // CareAllocation | CareAllocation to create

apiInstance.careAllocationAPICreate(body, (error, data, response) => {
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
 **body** | [**CareAllocation**](CareAllocation.md)| CareAllocation to create | 

### Return type

[**CareAllocation**](CareAllocation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="careAllocationAPIStreamAll"></a>
# **careAllocationAPIStreamAll**
> ListCareAllocationList careAllocationAPIStreamAll()

Return all CareAllocation models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CareAllocationApi();
apiInstance.careAllocationAPIStreamAll((error, data, response) => {
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

[**ListCareAllocationList**](ListCareAllocationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="careAllocationAPIStreamDeletes"></a>
# **careAllocationAPIStreamDeletes**
> ListCareAllocationList careAllocationAPIStreamDeletes(since)

Return all CareAllocation models which where deleted since the date given in the request.

If no date is given it will return all deleted CareAllocation models

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CareAllocationApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.careAllocationAPIStreamDeletes(since, (error, data, response) => {
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

[**ListCareAllocationList**](ListCareAllocationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="careAllocationAPIStreamUpdates"></a>
# **careAllocationAPIStreamUpdates**
> ListCareAllocationList careAllocationAPIStreamUpdates(since)

Return all CareAllocation models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CareAllocationApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.careAllocationAPIStreamUpdates(since, (error, data, response) => {
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

[**ListCareAllocationList**](ListCareAllocationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="careAllocationAPIUpdateCareAllocationById"></a>
# **careAllocationAPIUpdateCareAllocationById**
> CareAllocation careAllocationAPIUpdateCareAllocationById(body, id)

Update the Care Allocation corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CareAllocationApi();
let body = new NedapOnsApi.CareAllocation(); // CareAllocation | 
let id = 789; // Number | used for selecting CareAllocation

apiInstance.careAllocationAPIUpdateCareAllocationById(body, id, (error, data, response) => {
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
 **body** | [**CareAllocation**](CareAllocation.md)|  | 
 **id** | **Number**| used for selecting CareAllocation | 

### Return type

[**CareAllocation**](CareAllocation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

