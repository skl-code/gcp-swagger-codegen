# NedapOnsApi.CareArrangementApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**careArrangementAPIByClientId**](CareArrangementApi.md#careArrangementAPIByClientId) | **GET** /v0/administration/clients/{client_id}/care_arrangements | Return the care arrangements of a Client corresponding to the given id.
[**careArrangementAPIStreamAll**](CareArrangementApi.md#careArrangementAPIStreamAll) | **GET** /v0/xstream/care_arrangements/data | Return all CareArrangement models in a streaming manner
[**careArrangementAPIStreamUpdates**](CareArrangementApi.md#careArrangementAPIStreamUpdates) | **GET** /v0/xstream/care_arrangements/updates | Return all CareArrangement models which where updated since the date given in the request.

<a name="careArrangementAPIByClientId"></a>
# **careArrangementAPIByClientId**
> ListCareArrangementList careArrangementAPIByClientId(clientId, validFrom, validTo)

Return the care arrangements of a Client corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CareArrangementApi();
let clientId = 789; // Number | id
let validFrom = new Date("2013-10-20"); // Date | 
let validTo = new Date("2013-10-20"); // Date | 

apiInstance.careArrangementAPIByClientId(clientId, validFrom, validTo, (error, data, response) => {
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
 **validFrom** | **Date**|  | 
 **validTo** | **Date**|  | 

### Return type

[**ListCareArrangementList**](ListCareArrangementList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="careArrangementAPIStreamAll"></a>
# **careArrangementAPIStreamAll**
> ListCareArrangementList careArrangementAPIStreamAll()

Return all CareArrangement models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CareArrangementApi();
apiInstance.careArrangementAPIStreamAll((error, data, response) => {
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

[**ListCareArrangementList**](ListCareArrangementList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="careArrangementAPIStreamUpdates"></a>
# **careArrangementAPIStreamUpdates**
> ListCareArrangementList careArrangementAPIStreamUpdates(since)

Return all CareArrangement models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CareArrangementApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.careArrangementAPIStreamUpdates(since, (error, data, response) => {
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

[**ListCareArrangementList**](ListCareArrangementList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

