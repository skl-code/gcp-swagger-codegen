# NedapOnsApi.ClientAddressApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientAddressAPIById**](ClientAddressApi.md#clientAddressAPIById) | **GET** /v0/administration/client_addresses/{id} | Return the Client Address corresponding to the given id
[**clientAddressAPICreate**](ClientAddressApi.md#clientAddressAPICreate) | **POST** /v0/administration/client_addresses | Create ClientAddress
[**clientAddressAPIStreamAll**](ClientAddressApi.md#clientAddressAPIStreamAll) | **GET** /v0/xstream/client_addresses/data | Return all ClientAddress models in a streaming manner
[**clientAddressAPIStreamUpdates**](ClientAddressApi.md#clientAddressAPIStreamUpdates) | **GET** /v0/xstream/client_addresses/updates | Return all ClientAddress models which where updated since the date given in the request.
[**clientAddressAPIUpdate**](ClientAddressApi.md#clientAddressAPIUpdate) | **PUT** /v0/administration/client_addresses/{id} | Update ClientAddress

<a name="clientAddressAPIById"></a>
# **clientAddressAPIById**
> ClientAddress clientAddressAPIById(id)

Return the Client Address corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientAddressApi();
let id = 789; // Number | used for selecting ClientAddress

apiInstance.clientAddressAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting ClientAddress | 

### Return type

[**ClientAddress**](ClientAddress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientAddressAPICreate"></a>
# **clientAddressAPICreate**
> ClientAddress clientAddressAPICreate(body)

Create ClientAddress

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientAddressApi();
let body = new NedapOnsApi.ClientAddress(); // ClientAddress | ClientAddress to create

apiInstance.clientAddressAPICreate(body, (error, data, response) => {
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
 **body** | [**ClientAddress**](ClientAddress.md)| ClientAddress to create | 

### Return type

[**ClientAddress**](ClientAddress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clientAddressAPIStreamAll"></a>
# **clientAddressAPIStreamAll**
> ListClientAddressList clientAddressAPIStreamAll()

Return all ClientAddress models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientAddressApi();
apiInstance.clientAddressAPIStreamAll((error, data, response) => {
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

[**ListClientAddressList**](ListClientAddressList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="clientAddressAPIStreamUpdates"></a>
# **clientAddressAPIStreamUpdates**
> ListClientAddressList clientAddressAPIStreamUpdates(since)

Return all ClientAddress models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientAddressApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.clientAddressAPIStreamUpdates(since, (error, data, response) => {
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

[**ListClientAddressList**](ListClientAddressList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="clientAddressAPIUpdate"></a>
# **clientAddressAPIUpdate**
> ClientAddress clientAddressAPIUpdate(body, id)

Update ClientAddress

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientAddressApi();
let body = new NedapOnsApi.ClientAddress(); // ClientAddress | ClientAddress to update
let id = 789; // Number | used for selecting ClientAddress

apiInstance.clientAddressAPIUpdate(body, id, (error, data, response) => {
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
 **body** | [**ClientAddress**](ClientAddress.md)| ClientAddress to update | 
 **id** | **Number**| used for selecting ClientAddress | 

### Return type

[**ClientAddress**](ClientAddress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

