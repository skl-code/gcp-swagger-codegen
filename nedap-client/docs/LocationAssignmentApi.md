# NedapOnsApi.LocationAssignmentApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**locationAssignmentAPIByClientId**](LocationAssignmentApi.md#locationAssignmentAPIByClientId) | **GET** /v0/administration/clients/{client_id}/locations | Return the location assignments of a Client corresponding to the given id.
[**locationAssignmentAPIById**](LocationAssignmentApi.md#locationAssignmentAPIById) | **GET** /v0/administration/location_assignments/{id} | Return the Location Assignment corresponding to the given id
[**locationAssignmentAPICreate**](LocationAssignmentApi.md#locationAssignmentAPICreate) | **POST** /v0/administration/location_assignments | Create LocationAssignment
[**locationAssignmentAPIDelete**](LocationAssignmentApi.md#locationAssignmentAPIDelete) | **DELETE** /v0/administration/location_assignments/{id} | Deletes the LocationAssignment with given id
[**locationAssignmentAPIMainLocationAssignmentByClientId**](LocationAssignmentApi.md#locationAssignmentAPIMainLocationAssignmentByClientId) | **GET** /v0/administration/clients/{client_id}/main_location_assignment | 
[**locationAssignmentAPIStreamAll**](LocationAssignmentApi.md#locationAssignmentAPIStreamAll) | **GET** /v0/xstream/location_assignments/data | Return all LocationAssignment models in a streaming manner
[**locationAssignmentAPIStreamUpdates**](LocationAssignmentApi.md#locationAssignmentAPIStreamUpdates) | **GET** /v0/xstream/location_assignments/updates | Return all LocationAssignment models which where updated since the date given in the request.
[**locationAssignmentAPIUpdate**](LocationAssignmentApi.md#locationAssignmentAPIUpdate) | **PUT** /v0/administration/location_assignments/{id} | Updates the given LocationAssignment

<a name="locationAssignmentAPIByClientId"></a>
# **locationAssignmentAPIByClientId**
> ListLocationAssignmentList locationAssignmentAPIByClientId(clientId, opts)

Return the location assignments of a Client corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.LocationAssignmentApi();
let clientId = 789; // Number | id
let opts = { 
  'validFrom': new Date("2013-10-20"), // Date | 
  'validTo': new Date("2013-10-20") // Date | 
};
apiInstance.locationAssignmentAPIByClientId(clientId, opts, (error, data, response) => {
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
 **validFrom** | **Date**|  | [optional] 
 **validTo** | **Date**|  | [optional] 

### Return type

[**ListLocationAssignmentList**](ListLocationAssignmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="locationAssignmentAPIById"></a>
# **locationAssignmentAPIById**
> LocationAssignment locationAssignmentAPIById(id)

Return the Location Assignment corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.LocationAssignmentApi();
let id = 789; // Number | used for selecting LocationAssignment

apiInstance.locationAssignmentAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting LocationAssignment | 

### Return type

[**LocationAssignment**](LocationAssignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="locationAssignmentAPICreate"></a>
# **locationAssignmentAPICreate**
> LocationAssignment locationAssignmentAPICreate(body)

Create LocationAssignment

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.LocationAssignmentApi();
let body = new NedapOnsApi.LocationAssignment(); // LocationAssignment | LocationAssignment to create

apiInstance.locationAssignmentAPICreate(body, (error, data, response) => {
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
 **body** | [**LocationAssignment**](LocationAssignment.md)| LocationAssignment to create | 

### Return type

[**LocationAssignment**](LocationAssignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="locationAssignmentAPIDelete"></a>
# **locationAssignmentAPIDelete**
> LocationAssignment locationAssignmentAPIDelete(id)

Deletes the LocationAssignment with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.LocationAssignmentApi();
let id = 789; // Number | used for selecting LocationAssignment

apiInstance.locationAssignmentAPIDelete(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting LocationAssignment | 

### Return type

[**LocationAssignment**](LocationAssignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="locationAssignmentAPIMainLocationAssignmentByClientId"></a>
# **locationAssignmentAPIMainLocationAssignmentByClientId**
> LocationAssignment locationAssignmentAPIMainLocationAssignmentByClientId(clientId, opts)



Returns the main location assignment of the client

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.LocationAssignmentApi();
let clientId = 789; // Number | the id of the client
let opts = { 
  '_date': new Date("2013-10-20") // Date | Sample date for selecting the main location assignment. If omitted, the current date is used
};
apiInstance.locationAssignmentAPIMainLocationAssignmentByClientId(clientId, opts, (error, data, response) => {
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
 **clientId** | **Number**| the id of the client | 
 **_date** | **Date**| Sample date for selecting the main location assignment. If omitted, the current date is used | [optional] 

### Return type

[**LocationAssignment**](LocationAssignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="locationAssignmentAPIStreamAll"></a>
# **locationAssignmentAPIStreamAll**
> ListLocationAssignmentList locationAssignmentAPIStreamAll()

Return all LocationAssignment models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.LocationAssignmentApi();
apiInstance.locationAssignmentAPIStreamAll((error, data, response) => {
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

[**ListLocationAssignmentList**](ListLocationAssignmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="locationAssignmentAPIStreamUpdates"></a>
# **locationAssignmentAPIStreamUpdates**
> ListLocationAssignmentList locationAssignmentAPIStreamUpdates(since)

Return all LocationAssignment models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.LocationAssignmentApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.locationAssignmentAPIStreamUpdates(since, (error, data, response) => {
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

[**ListLocationAssignmentList**](ListLocationAssignmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="locationAssignmentAPIUpdate"></a>
# **locationAssignmentAPIUpdate**
> LocationAssignment locationAssignmentAPIUpdate(body, id)

Updates the given LocationAssignment

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.LocationAssignmentApi();
let body = new NedapOnsApi.LocationAssignment(); // LocationAssignment | LocationAssignment to update
let id = 789; // Number | used for selecting LocationAssignment

apiInstance.locationAssignmentAPIUpdate(body, id, (error, data, response) => {
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
 **body** | [**LocationAssignment**](LocationAssignment.md)| LocationAssignment to update | 
 **id** | **Number**| used for selecting LocationAssignment | 

### Return type

[**LocationAssignment**](LocationAssignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

