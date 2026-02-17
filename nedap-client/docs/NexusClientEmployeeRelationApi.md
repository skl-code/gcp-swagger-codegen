# NedapOnsApi.NexusClientEmployeeRelationApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nexusClientEmployeeRelationAPIByClientId**](NexusClientEmployeeRelationApi.md#nexusClientEmployeeRelationAPIByClientId) | **GET** /v0/ons_nexus/clients/{client_id}/client_employee_relations | Return the client employee relations of a Client corresponding to the given id.
[**nexusClientEmployeeRelationAPIByEmployeeId**](NexusClientEmployeeRelationApi.md#nexusClientEmployeeRelationAPIByEmployeeId) | **GET** /v0/ons_nexus/employees/{employee_id}/client_employee_relations | Return the client employee relations of a Employee corresponding to the given id.
[**nexusClientEmployeeRelationAPIById**](NexusClientEmployeeRelationApi.md#nexusClientEmployeeRelationAPIById) | **GET** /v0/ons_nexus/client_employee_relations/{id} | 
[**nexusClientEmployeeRelationAPICreate**](NexusClientEmployeeRelationApi.md#nexusClientEmployeeRelationAPICreate) | **POST** /v0/ons_nexus/client_employee_relations | Create ClientEmployeeRelation
[**nexusClientEmployeeRelationAPIDelete**](NexusClientEmployeeRelationApi.md#nexusClientEmployeeRelationAPIDelete) | **DELETE** /v0/ons_nexus/client_employee_relations/{id} | Deletes the ClientEmployeeRelation with given id
[**nexusClientEmployeeRelationAPIStreamAll**](NexusClientEmployeeRelationApi.md#nexusClientEmployeeRelationAPIStreamAll) | **GET** /v0/xstream/client_employee_relations/data | Return all ClientEmployeeRelation models in a streaming manner
[**nexusClientEmployeeRelationAPIStreamUpdates**](NexusClientEmployeeRelationApi.md#nexusClientEmployeeRelationAPIStreamUpdates) | **GET** /v0/xstream/client_employee_relations/updates | Return all ClientEmployeeRelation models which where updated since the date given in the request.
[**nexusClientEmployeeRelationAPIUpdate**](NexusClientEmployeeRelationApi.md#nexusClientEmployeeRelationAPIUpdate) | **PUT** /v0/ons_nexus/client_employee_relations/{id} | Updates the given ClientEmployeeRelation

<a name="nexusClientEmployeeRelationAPIByClientId"></a>
# **nexusClientEmployeeRelationAPIByClientId**
> NexusListClientEmployeeRelationList nexusClientEmployeeRelationAPIByClientId(clientId, opts)

Return the client employee relations of a Client corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.NexusClientEmployeeRelationApi();
let clientId = 789; // Number | id
let opts = { 
  'validFrom': new Date("2013-10-20"), // Date | 
  'validTo': new Date("2013-10-20"), // Date | 
  'limit': 56, // Number | 
  'offset': 56 // Number | 
};
apiInstance.nexusClientEmployeeRelationAPIByClientId(clientId, opts, (error, data, response) => {
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
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 

### Return type

[**NexusListClientEmployeeRelationList**](NexusListClientEmployeeRelationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nexusClientEmployeeRelationAPIByEmployeeId"></a>
# **nexusClientEmployeeRelationAPIByEmployeeId**
> NexusListClientEmployeeRelationList nexusClientEmployeeRelationAPIByEmployeeId(employeeId, opts)

Return the client employee relations of a Employee corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.NexusClientEmployeeRelationApi();
let employeeId = 789; // Number | id
let opts = { 
  'validFrom': new Date("2013-10-20"), // Date | 
  'validTo': new Date("2013-10-20"), // Date | 
  'limit': 56, // Number | 
  'offset': 56 // Number | 
};
apiInstance.nexusClientEmployeeRelationAPIByEmployeeId(employeeId, opts, (error, data, response) => {
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
 **employeeId** | **Number**| id | 
 **validFrom** | **Date**|  | [optional] 
 **validTo** | **Date**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 

### Return type

[**NexusListClientEmployeeRelationList**](NexusListClientEmployeeRelationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nexusClientEmployeeRelationAPIById"></a>
# **nexusClientEmployeeRelationAPIById**
> NexusClientEmployeeRelation nexusClientEmployeeRelationAPIById(id)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.NexusClientEmployeeRelationApi();
let id = 789; // Number | used for selecting ClientEmployeeRelation

apiInstance.nexusClientEmployeeRelationAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting ClientEmployeeRelation | 

### Return type

[**NexusClientEmployeeRelation**](NexusClientEmployeeRelation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nexusClientEmployeeRelationAPICreate"></a>
# **nexusClientEmployeeRelationAPICreate**
> NexusClientEmployeeRelation nexusClientEmployeeRelationAPICreate(body)

Create ClientEmployeeRelation

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.NexusClientEmployeeRelationApi();
let body = new NedapOnsApi.NexusClientEmployeeRelation(); // NexusClientEmployeeRelation | ClientEmployeeRelation to create

apiInstance.nexusClientEmployeeRelationAPICreate(body, (error, data, response) => {
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
 **body** | [**NexusClientEmployeeRelation**](NexusClientEmployeeRelation.md)| ClientEmployeeRelation to create | 

### Return type

[**NexusClientEmployeeRelation**](NexusClientEmployeeRelation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="nexusClientEmployeeRelationAPIDelete"></a>
# **nexusClientEmployeeRelationAPIDelete**
> nexusClientEmployeeRelationAPIDelete(id)

Deletes the ClientEmployeeRelation with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.NexusClientEmployeeRelationApi();
let id = 789; // Number | Identifier of ClientEmployeeRelation to delete.

apiInstance.nexusClientEmployeeRelationAPIDelete(id, (error, data, response) => {
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
 **id** | **Number**| Identifier of ClientEmployeeRelation to delete. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="nexusClientEmployeeRelationAPIStreamAll"></a>
# **nexusClientEmployeeRelationAPIStreamAll**
> NexusListClientEmployeeRelationList nexusClientEmployeeRelationAPIStreamAll()

Return all ClientEmployeeRelation models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.NexusClientEmployeeRelationApi();
apiInstance.nexusClientEmployeeRelationAPIStreamAll((error, data, response) => {
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

[**NexusListClientEmployeeRelationList**](NexusListClientEmployeeRelationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="nexusClientEmployeeRelationAPIStreamUpdates"></a>
# **nexusClientEmployeeRelationAPIStreamUpdates**
> NexusListClientEmployeeRelationList nexusClientEmployeeRelationAPIStreamUpdates(since)

Return all ClientEmployeeRelation models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.NexusClientEmployeeRelationApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.nexusClientEmployeeRelationAPIStreamUpdates(since, (error, data, response) => {
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

[**NexusListClientEmployeeRelationList**](NexusListClientEmployeeRelationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="nexusClientEmployeeRelationAPIUpdate"></a>
# **nexusClientEmployeeRelationAPIUpdate**
> NexusClientEmployeeRelation nexusClientEmployeeRelationAPIUpdate(body, id)

Updates the given ClientEmployeeRelation

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.NexusClientEmployeeRelationApi();
let body = new NedapOnsApi.NexusClientEmployeeRelation(); // NexusClientEmployeeRelation | ClientEmployeeRelation to update
let id = 789; // Number | Identifier of ClientEmployeeRelation to update.

apiInstance.nexusClientEmployeeRelationAPIUpdate(body, id, (error, data, response) => {
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
 **body** | [**NexusClientEmployeeRelation**](NexusClientEmployeeRelation.md)| ClientEmployeeRelation to update | 
 **id** | **Number**| Identifier of ClientEmployeeRelation to update. | 

### Return type

[**NexusClientEmployeeRelation**](NexusClientEmployeeRelation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

