# NedapOnsApi.ClientContactRelationAddressApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientContactRelationAddressAPIById**](ClientContactRelationAddressApi.md#clientContactRelationAddressAPIById) | **GET** /v0/administration/client_contact_relation_addresses/{id} | Return the client contact Relation Address corresponding to the given id
[**clientContactRelationAddressAPICreate**](ClientContactRelationAddressApi.md#clientContactRelationAddressAPICreate) | **POST** /v0/administration/client_contact_relation_addresses | Create ClientContactRelationAddress
[**clientContactRelationAddressAPIStreamAll**](ClientContactRelationAddressApi.md#clientContactRelationAddressAPIStreamAll) | **GET** /v0/xstream/client_contact_relation_addresses/data | Return all ClientContactRelationAddress models in a streaming manner
[**clientContactRelationAddressAPIStreamUpdates**](ClientContactRelationAddressApi.md#clientContactRelationAddressAPIStreamUpdates) | **GET** /v0/xstream/client_contact_relation_addresses/updates | Return all ClientContactRelationAddress models which where updated since the date given in the request.

<a name="clientContactRelationAddressAPIById"></a>
# **clientContactRelationAddressAPIById**
> ClientContactRelationAddress clientContactRelationAddressAPIById(id)

Return the client contact Relation Address corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientContactRelationAddressApi();
let id = 789; // Number | used for selecting ClientContactRelationAddress

apiInstance.clientContactRelationAddressAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting ClientContactRelationAddress | 

### Return type

[**ClientContactRelationAddress**](ClientContactRelationAddress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientContactRelationAddressAPICreate"></a>
# **clientContactRelationAddressAPICreate**
> ClientContactRelationAddress clientContactRelationAddressAPICreate(body)

Create ClientContactRelationAddress

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientContactRelationAddressApi();
let body = new NedapOnsApi.ClientContactRelationAddress(); // ClientContactRelationAddress | ClientContactRelationAddress to create

apiInstance.clientContactRelationAddressAPICreate(body, (error, data, response) => {
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
 **body** | [**ClientContactRelationAddress**](ClientContactRelationAddress.md)| ClientContactRelationAddress to create | 

### Return type

[**ClientContactRelationAddress**](ClientContactRelationAddress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clientContactRelationAddressAPIStreamAll"></a>
# **clientContactRelationAddressAPIStreamAll**
> ListClientContactRelationAddressList clientContactRelationAddressAPIStreamAll()

Return all ClientContactRelationAddress models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientContactRelationAddressApi();
apiInstance.clientContactRelationAddressAPIStreamAll((error, data, response) => {
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

[**ListClientContactRelationAddressList**](ListClientContactRelationAddressList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="clientContactRelationAddressAPIStreamUpdates"></a>
# **clientContactRelationAddressAPIStreamUpdates**
> ListClientContactRelationAddressList clientContactRelationAddressAPIStreamUpdates(since)

Return all ClientContactRelationAddress models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientContactRelationAddressApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.clientContactRelationAddressAPIStreamUpdates(since, (error, data, response) => {
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

[**ListClientContactRelationAddressList**](ListClientContactRelationAddressList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

