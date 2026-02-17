# NedapOnsApi.ClientContactRelationApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientContactRelationAPIAll**](ClientContactRelationApi.md#clientContactRelationAPIAll) | **GET** /v0/administration/client_contact_relations | Returns every ClientContactRelation available from the ClientContactRelationAPI
[**clientContactRelationAPIByClientId**](ClientContactRelationApi.md#clientContactRelationAPIByClientId) | **GET** /v0/administration/client_contact_relations/by_client/{client_id} | Return the client contact relations of a client corresponding to the given id.
[**clientContactRelationAPIByClientIds**](ClientContactRelationApi.md#clientContactRelationAPIByClientIds) | **GET** /v0/administration/client_contact_relations/by_client_ids | Return the client contact relations of multiple clients corresponding to the given ids.
[**clientContactRelationAPIById**](ClientContactRelationApi.md#clientContactRelationAPIById) | **GET** /v0/administration/client_contact_relations/{id} | 
[**clientContactRelationAPICreate**](ClientContactRelationApi.md#clientContactRelationAPICreate) | **POST** /v0/administration/client_contact_relations | Create ClientContactRelation
[**clientContactRelationAPIDelete**](ClientContactRelationApi.md#clientContactRelationAPIDelete) | **DELETE** /v0/administration/client_contact_relations/{id} | Deletes the ClientContactRelation with given id
[**clientContactRelationAPIStreamAll**](ClientContactRelationApi.md#clientContactRelationAPIStreamAll) | **GET** /v0/xstream/relations/data | Return all ClientContactRelation models in a streaming manner
[**clientContactRelationAPIStreamUpdates**](ClientContactRelationApi.md#clientContactRelationAPIStreamUpdates) | **GET** /v0/xstream/relations/updates | Return all ClientContactRelation models which where updated since the date given in the request.
[**clientContactRelationAPIUpdate**](ClientContactRelationApi.md#clientContactRelationAPIUpdate) | **PUT** /v0/administration/client_contact_relations/{id} | Updates the given ClientContactRelation

<a name="clientContactRelationAPIAll"></a>
# **clientContactRelationAPIAll**
> ListClientContactRelationList clientContactRelationAPIAll(opts)

Returns every ClientContactRelation available from the ClientContactRelationAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientContactRelationApi();
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.clientContactRelationAPIAll(opts, (error, data, response) => {
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
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**ListClientContactRelationList**](ListClientContactRelationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientContactRelationAPIByClientId"></a>
# **clientContactRelationAPIByClientId**
> ListClientContactRelationList clientContactRelationAPIByClientId(clientId, opts)

Return the client contact relations of a client corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientContactRelationApi();
let clientId = 789; // Number | id
let opts = { 
  'relationType': "relationType_example" // String | name of the relationtype as defined in Nexus.
};
apiInstance.clientContactRelationAPIByClientId(clientId, opts, (error, data, response) => {
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
 **relationType** | **String**| name of the relationtype as defined in Nexus. | [optional] 

### Return type

[**ListClientContactRelationList**](ListClientContactRelationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientContactRelationAPIByClientIds"></a>
# **clientContactRelationAPIByClientIds**
> ListClientContactRelationList clientContactRelationAPIByClientIds(opts)

Return the client contact relations of multiple clients corresponding to the given ids.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientContactRelationApi();
let opts = { 
  'ids': [3.4], // [Number] | The ids of the clients (ids=1&ids=2&ids=3...)
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.clientContactRelationAPIByClientIds(opts, (error, data, response) => {
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
 **ids** | [**[Number]**](Number.md)| The ids of the clients (ids&#x3D;1&amp;ids&#x3D;2&amp;ids&#x3D;3...) | [optional] 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**ListClientContactRelationList**](ListClientContactRelationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientContactRelationAPIById"></a>
# **clientContactRelationAPIById**
> ClientContactRelation clientContactRelationAPIById(id, opts)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientContactRelationApi();
let id = 789; // Number | used for selecting ClientContactRelation
let opts = { 
  'include': ["include_example"], // [String] | 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.clientContactRelationAPIById(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting ClientContactRelation | 
 **include** | [**[String]**](String.md)|  | [optional] 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**ClientContactRelation**](ClientContactRelation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientContactRelationAPICreate"></a>
# **clientContactRelationAPICreate**
> ClientContactRelation clientContactRelationAPICreate(body, opts)

Create ClientContactRelation

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientContactRelationApi();
let body = new NedapOnsApi.ClientContactRelation(); // ClientContactRelation | ClientContactRelation to create
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.clientContactRelationAPICreate(body, opts, (error, data, response) => {
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
 **body** | [**ClientContactRelation**](ClientContactRelation.md)| ClientContactRelation to create | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**ClientContactRelation**](ClientContactRelation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clientContactRelationAPIDelete"></a>
# **clientContactRelationAPIDelete**
> clientContactRelationAPIDelete(id, opts)

Deletes the ClientContactRelation with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientContactRelationApi();
let id = 789; // Number | used for selecting ClientContactRelation
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.clientContactRelationAPIDelete(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| used for selecting ClientContactRelation | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientContactRelationAPIStreamAll"></a>
# **clientContactRelationAPIStreamAll**
> ListClientContactRelationList clientContactRelationAPIStreamAll()

Return all ClientContactRelation models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientContactRelationApi();
apiInstance.clientContactRelationAPIStreamAll((error, data, response) => {
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

[**ListClientContactRelationList**](ListClientContactRelationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="clientContactRelationAPIStreamUpdates"></a>
# **clientContactRelationAPIStreamUpdates**
> ListClientContactRelationList clientContactRelationAPIStreamUpdates(since)

Return all ClientContactRelation models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientContactRelationApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.clientContactRelationAPIStreamUpdates(since, (error, data, response) => {
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

[**ListClientContactRelationList**](ListClientContactRelationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="clientContactRelationAPIUpdate"></a>
# **clientContactRelationAPIUpdate**
> ClientContactRelation clientContactRelationAPIUpdate(body, id, opts)

Updates the given ClientContactRelation

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientContactRelationApi();
let body = new NedapOnsApi.ClientContactRelation(); // ClientContactRelation | ClientContactRelation to update
let id = 789; // Number | used for selecting ClientContactRelation
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.clientContactRelationAPIUpdate(body, id, opts, (error, data, response) => {
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
 **body** | [**ClientContactRelation**](ClientContactRelation.md)| ClientContactRelation to update | 
 **id** | **Number**| used for selecting ClientContactRelation | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**ClientContactRelation**](ClientContactRelation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

