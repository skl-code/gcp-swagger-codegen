# NedapOnsApi.LocationApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**locationAPIAll**](LocationApi.md#locationAPIAll) | **GET** /v0/administration/locations | Returns every Location available from the LocationAPI
[**locationAPIByClientId**](LocationApi.md#locationAPIByClientId) | **GET** /v0/administration/clients/{client_id}/clipped_locations | Return the locations of a Client corresponding to the given id.
[**locationAPIById**](LocationApi.md#locationAPIById) | **GET** /v0/administration/locations/{id} | Return the Location corresponding to the given id
[**locationAPICreate**](LocationApi.md#locationAPICreate) | **POST** /v0/administration/locations | Create Location
[**locationAPIMainLocationByClientId**](LocationApi.md#locationAPIMainLocationByClientId) | **GET** /v0/administration/clients/{client_id}/main_location | 
[**locationAPIMultiple**](LocationApi.md#locationAPIMultiple) | **GET** /v0/administration/locations/multiple | Method used for requesting multiple Location objects using their ids.
[**locationAPIStreamAll**](LocationApi.md#locationAPIStreamAll) | **GET** /v0/xstream/locations/data | Return all Location models in a streaming manner
[**locationAPIStreamUpdates**](LocationApi.md#locationAPIStreamUpdates) | **GET** /v0/xstream/locations/updates | Return all Location models which where updated since the date given in the request.
[**locationAPIUpdate**](LocationApi.md#locationAPIUpdate) | **PUT** /v0/administration/locations/{id} | Update Location.

<a name="locationAPIAll"></a>
# **locationAPIAll**
> ListLocationList locationAPIAll()

Returns every Location available from the LocationAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.LocationApi();
apiInstance.locationAPIAll((error, data, response) => {
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

[**ListLocationList**](ListLocationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="locationAPIByClientId"></a>
# **locationAPIByClientId**
> ListLocationList locationAPIByClientId(clientId, validFrom, validTo)

Return the locations of a Client corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.LocationApi();
let clientId = 789; // Number | id
let validFrom = new Date("2013-10-20"); // Date | 
let validTo = new Date("2013-10-20"); // Date | 

apiInstance.locationAPIByClientId(clientId, validFrom, validTo, (error, data, response) => {
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

[**ListLocationList**](ListLocationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="locationAPIById"></a>
# **locationAPIById**
> Location locationAPIById(id)

Return the Location corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.LocationApi();
let id = 789; // Number | used for selecting Location

apiInstance.locationAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting Location | 

### Return type

[**Location**](Location.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="locationAPICreate"></a>
# **locationAPICreate**
> Location locationAPICreate(body)

Create Location

Creating a root location is not allowed

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.LocationApi();
let body = new NedapOnsApi.Location(); // Location | Location to create

apiInstance.locationAPICreate(body, (error, data, response) => {
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
 **body** | [**Location**](Location.md)| Location to create | 

### Return type

[**Location**](Location.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="locationAPIMainLocationByClientId"></a>
# **locationAPIMainLocationByClientId**
> Location locationAPIMainLocationByClientId(clientId, opts)



Returns the main location of the client

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.LocationApi();
let clientId = 789; // Number | the id of the client
let opts = { 
  '_date': new Date("2013-10-20") // Date | Sample date for selecting the main location. If omitted, the current date is used
};
apiInstance.locationAPIMainLocationByClientId(clientId, opts, (error, data, response) => {
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
 **_date** | **Date**| Sample date for selecting the main location. If omitted, the current date is used | [optional] 

### Return type

[**Location**](Location.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="locationAPIMultiple"></a>
# **locationAPIMultiple**
> ListLocationList locationAPIMultiple(opts)

Method used for requesting multiple Location objects using their ids.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.LocationApi();
let opts = { 
  'id': [3.4] // [Number] | array style id's: id=1&id=2&etc
};
apiInstance.locationAPIMultiple(opts, (error, data, response) => {
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
 **id** | [**[Number]**](Number.md)| array style id&#x27;s: id&#x3D;1&amp;id&#x3D;2&amp;etc | [optional] 

### Return type

[**ListLocationList**](ListLocationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="locationAPIStreamAll"></a>
# **locationAPIStreamAll**
> ListLocationList locationAPIStreamAll()

Return all Location models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.LocationApi();
apiInstance.locationAPIStreamAll((error, data, response) => {
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

[**ListLocationList**](ListLocationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="locationAPIStreamUpdates"></a>
# **locationAPIStreamUpdates**
> ListLocationList locationAPIStreamUpdates(since)

Return all Location models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.LocationApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.locationAPIStreamUpdates(since, (error, data, response) => {
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

[**ListLocationList**](ListLocationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="locationAPIUpdate"></a>
# **locationAPIUpdate**
> Location locationAPIUpdate(body, id)

Update Location.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.LocationApi();
let body = new NedapOnsApi.Location(); // Location | Location data to update.
let id = 789; // Number | used for selecting Location

apiInstance.locationAPIUpdate(body, id, (error, data, response) => {
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
 **body** | [**Location**](Location.md)| Location data to update. | 
 **id** | **Number**| used for selecting Location | 

### Return type

[**Location**](Location.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

