# NedapOnsApi.ClientApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientAPIAddOrUpdateClientInFavorite**](ClientApi.md#clientAPIAddOrUpdateClientInFavorite) | **POST** /v0/administration/users/{user_id}/last_visited_clients/{client_id} | Add or update client in favorite table
[**clientAPIAllByArchetypeId**](ClientApi.md#clientAPIAllByArchetypeId) | **GET** /v0/openehr_dossier/back_channel/unauthorized/clients/by_archetype_id/{archetype_id} | Returns the clients (but only the client ids) who have data for the given archetype in the given period.
[**clientAPIByBSN**](ClientApi.md#clientAPIByBSN) | **GET** /v0/administration/clients/by_bsn | Find a client by its BSN number
[**clientAPIByBSNUnsafe**](ClientApi.md#clientAPIByBSNUnsafe) | **GET** /v0/administration/clients/by_bsn/{bsn} | Find a client by its BSN number
[**clientAPIById**](ClientApi.md#clientAPIById) | **GET** /v0/administration/clients/{id} | Find a client by their primary key
[**clientAPIByIdentificationNo**](ClientApi.md#clientAPIByIdentificationNo) | **GET** /v0/administration/clients/byIdentificationNumber/{identification_no} | Find a client based on it&#x27;s identification number, a logical identifier
[**clientAPIBySkn**](ClientApi.md#clientAPIBySkn) | **GET** /v0/administration/clients/by_skn | Find a client by its SKN (strafrechtketennummer).
[**clientAPIByUUID**](ClientApi.md#clientAPIByUUID) | **GET** /v0/administration/clients/by_uuid/{uuid} | Find a client by its UUID
[**clientAPICreate**](ClientApi.md#clientAPICreate) | **POST** /v0/administration/clients | Create Client
[**clientAPILastVisitedByUserId**](ClientApi.md#clientAPILastVisitedByUserId) | **GET** /v0/administration/users/{user_id}/last_visited_clients | Return the last visited Clients of a User corresponding to the given id.
[**clientAPILastVisitedClients**](ClientApi.md#clientAPILastVisitedClients) | **GET** /v0/administration/clients/{employee_id}/last_visited_clients | Returns the last visited clients of an employee based on presence logs.
[**clientAPIMultiple**](ClientApi.md#clientAPIMultiple) | **GET** /v0/administration/clients/multiple | Method used for requesting multiple Client objects using their ids.
[**clientAPIOmnisearch**](ClientApi.md#clientAPIOmnisearch) | **GET** /v0/omnisearch/client/search | Client Search via Omnisearch
[**clientAPISearch**](ClientApi.md#clientAPISearch) | **GET** /v0/administration/clients/find | Results returned by this call are not grouped, i.e. This endpoint is deprecated, use: /omnisearch/client/search
[**clientAPISearchByLocationId**](ClientApi.md#clientAPISearchByLocationId) | **GET** /v0/administration/clients/search_by_location | Find clients by location
[**clientAPISearchClientIdsInCareInPeriod**](ClientApi.md#clientAPISearchClientIdsInCareInPeriod) | **GET** /v0/administration/clients/ids_in_care_in_period | Find clientObjectIds of all clients in care in a given period
[**clientAPISearchGrouped**](ClientApi.md#clientAPISearchGrouped) | **GET** /v0/administration/clients/find_grouped | Searches performed through this method are &#x27;grouped&#x27; according to the groups defined in com.nedap.healthcare.domain.ClientSearchResultGroup, which value is set on the com.nedap.healthcare.domain.ClientSearchResult#group field. This endpoint is deprecated, use: /omnisearch/client/search
[**clientAPISearchInCareInPeriod**](ClientApi.md#clientAPISearchInCareInPeriod) | **GET** /v0/administration/clients/in_care_in_period | Find all clients in care in a given period
[**clientAPIStreamAll**](ClientApi.md#clientAPIStreamAll) | **GET** /v0/xstream/clients/data | Return all Client models in a streaming manner
[**clientAPIStreamDeletes**](ClientApi.md#clientAPIStreamDeletes) | **GET** /v0/xstream/clients/deletes | Return all Client models which where deleted since the date given in the request.
[**clientAPIStreamUpdates**](ClientApi.md#clientAPIStreamUpdates) | **GET** /v0/xstream/clients/updates | Return all Client models which where updated since the date given in the request.
[**clientAPIUpdate**](ClientApi.md#clientAPIUpdate) | **PUT** /v0/administration/clients/{id} | Update Client

<a name="clientAPIAddOrUpdateClientInFavorite"></a>
# **clientAPIAddOrUpdateClientInFavorite**
> clientAPIAddOrUpdateClientInFavorite(userId, clientId)

Add or update client in favorite table

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientApi();
let userId = 789; // Number | User ID
let clientId = 789; // Number | Client ID

apiInstance.clientAPIAddOrUpdateClientInFavorite(userId, clientId, (error, data, response) => {
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
 **userId** | **Number**| User ID | 
 **clientId** | **Number**| Client ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="clientAPIAllByArchetypeId"></a>
# **clientAPIAllByArchetypeId**
> ListClientList clientAPIAllByArchetypeId(archetypeId, opts)

Returns the clients (but only the client ids) who have data for the given archetype in the given period.

When querying an archetype id, this also returns clients with data for subversions of that archetype id.  For example openEHR-EHR-COMPOSITION.berg_balance_scale_report.v1 returns clients with data for openEHR-EHR-COMPOSITION.berg_balance_scale_report.v1.0.2 and openEHR-EHR-COMPOSITION.berg_balance_scale_report.v1.5.0, but not for openEHR-EHR-COMPOSITION.berg_balance_scale_report.v2.0.0.  This will take into account data with lifecycle state COMPLETE and INCOMPLETE, but not DELETED.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientApi();
let archetypeId = "archetypeId_example"; // String | - archetype id can contain the archetype concept plus any precision of the version, like v1 or v1.1.1
let opts = { 
  'validFrom': new Date("2013-10-20"), // Date | - begin date of the period
  'validTo': new Date("2013-10-20") // Date | - end date of the period
};
apiInstance.clientAPIAllByArchetypeId(archetypeId, opts, (error, data, response) => {
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
 **archetypeId** | **String**| - archetype id can contain the archetype concept plus any precision of the version, like v1 or v1.1.1 | 
 **validFrom** | **Date**| - begin date of the period | [optional] 
 **validTo** | **Date**| - end date of the period | [optional] 

### Return type

[**ListClientList**](ListClientList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientAPIByBSN"></a>
# **clientAPIByBSN**
> Client clientAPIByBSN(opts)

Find a client by its BSN number

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientApi();
let opts = { 
  'bsn': "bsn_example", // String | The bsn of the client to find
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.clientAPIByBSN(opts, (error, data, response) => {
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
 **bsn** | **String**| The bsn of the client to find | [optional] 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientAPIByBSNUnsafe"></a>
# **clientAPIByBSNUnsafe**
> Client clientAPIByBSNUnsafe(bsn, opts)

Find a client by its BSN number

Use byBsn 

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientApi();
let bsn = "bsn_example"; // String | 
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.clientAPIByBSNUnsafe(bsn, opts, (error, data, response) => {
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
 **bsn** | **String**|  | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientAPIById"></a>
# **clientAPIById**
> Client clientAPIById(id, opts)

Find a client by their primary key

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientApi();
let id = 789; // Number | used for selecting Client
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.clientAPIById(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting Client | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientAPIByIdentificationNo"></a>
# **clientAPIByIdentificationNo**
> Client clientAPIByIdentificationNo(identificationNo)

Find a client based on it&#x27;s identification number, a logical identifier

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientApi();
let identificationNo = "identificationNo_example"; // String | 

apiInstance.clientAPIByIdentificationNo(identificationNo, (error, data, response) => {
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
 **identificationNo** | **String**|  | 

### Return type

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientAPIBySkn"></a>
# **clientAPIBySkn**
> Client clientAPIBySkn(opts)

Find a client by its SKN (strafrechtketennummer).

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientApi();
let opts = { 
  'skn': "skn_example", // String | the skn of the client to find.
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.clientAPIBySkn(opts, (error, data, response) => {
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
 **skn** | **String**| the skn of the client to find. | [optional] 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientAPIByUUID"></a>
# **clientAPIByUUID**
> Client clientAPIByUUID(uuid, opts)

Find a client by its UUID

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientApi();
let uuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.clientAPIByUUID(uuid, opts, (error, data, response) => {
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
 **uuid** | [**String**](.md)|  | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientAPICreate"></a>
# **clientAPICreate**
> Client clientAPICreate(body, opts)

Create Client

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientApi();
let body = new NedapOnsApi.Client(); // Client | Client to create
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.clientAPICreate(body, opts, (error, data, response) => {
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
 **body** | [**Client**](Client.md)| Client to create | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clientAPILastVisitedByUserId"></a>
# **clientAPILastVisitedByUserId**
> ListClientList clientAPILastVisitedByUserId(userId)

Return the last visited Clients of a User corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientApi();
let userId = 789; // Number | id

apiInstance.clientAPILastVisitedByUserId(userId, (error, data, response) => {
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
 **userId** | **Number**| id | 

### Return type

[**ListClientList**](ListClientList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientAPILastVisitedClients"></a>
# **clientAPILastVisitedClients**
> ListClientList clientAPILastVisitedClients(employeeId, fromDate, toDate, opts)

Returns the last visited clients of an employee based on presence logs.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientApi();
let employeeId = 789; // Number | - employee id
let fromDate = new Date("2013-10-20"); // Date | - begin date of period
let toDate = new Date("2013-10-20"); // Date | - end date of period
let opts = { 
  'offset': 0, // Number | - position in the result list to start from
  'limit': 10 // Number | - limit of the result list
};
apiInstance.clientAPILastVisitedClients(employeeId, fromDate, toDate, opts, (error, data, response) => {
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
 **employeeId** | **Number**| - employee id | 
 **fromDate** | **Date**| - begin date of period | 
 **toDate** | **Date**| - end date of period | 
 **offset** | **Number**| - position in the result list to start from | [optional] [default to 0]
 **limit** | **Number**| - limit of the result list | [optional] [default to 10]

### Return type

[**ListClientList**](ListClientList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientAPIMultiple"></a>
# **clientAPIMultiple**
> ListClientList clientAPIMultiple(opts)

Method used for requesting multiple Client objects using their ids.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientApi();
let opts = { 
  'id': [3.4], // [Number] | array style id's: id=1&id=2&etc
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.clientAPIMultiple(opts, (error, data, response) => {
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
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**ListClientList**](ListClientList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientAPIOmnisearch"></a>
# **clientAPIOmnisearch**
> ListClientSearchResultList clientAPIOmnisearch(query, opts)

Client Search via Omnisearch

Client Search

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientApi();
let query = "query_example"; // String | The string to search for
let opts = { 
  'employeeId': "employeeId_example", // String | 
  'limit': 10, // Number | 
  'offset': 0, // Number | 
  'includeWaiting': false, // Boolean | 
  'includeOutOfCare': false, // Boolean | 
  'onDate': new Date("2013-10-20"), // Date | The search will be performed for the given date (instead of now)
  'locationId': 789, // Number | Limit the scope of search to within this location
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.clientAPIOmnisearch(query, opts, (error, data, response) => {
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
 **query** | **String**| The string to search for | 
 **employeeId** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] [default to 10]
 **offset** | **Number**|  | [optional] [default to 0]
 **includeWaiting** | **Boolean**|  | [optional] [default to false]
 **includeOutOfCare** | **Boolean**|  | [optional] [default to false]
 **onDate** | **Date**| The search will be performed for the given date (instead of now) | [optional] 
 **locationId** | **Number**| Limit the scope of search to within this location | [optional] 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**ListClientSearchResultList**](ListClientSearchResultList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientAPISearch"></a>
# **clientAPISearch**
> ListClientSearchResultList clientAPISearch(query, opts)

Results returned by this call are not grouped, i.e. This endpoint is deprecated, use: /omnisearch/client/search

the {@link com.nedap.healthcare.domain.ClientSearchResult#group} value is {@link com.nedap.healthcare.domain.ClientSearchResultGroup#UNGROUPED} for all results.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientApi();
let query = "query_example"; // String | The string to search for
let opts = { 
  'employee': "employee_example", // String | 
  'limit': 10, // Number | 
  'offset': 0, // Number | 
  'includewaiting': true, // Boolean | 
  'includeoutofcare': true, // Boolean | 
  'onDate': new Date("2013-10-20"), // Date | The search will be performed for the given date (instead of now)
  'locationId': 789, // Number | Limit the scope of search to within this location (only works when also using employee_id with an Employee that is linked to a User account)
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.clientAPISearch(query, opts, (error, data, response) => {
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
 **query** | **String**| The string to search for | 
 **employee** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] [default to 10]
 **offset** | **Number**|  | [optional] [default to 0]
 **includewaiting** | **Boolean**|  | [optional] 
 **includeoutofcare** | **Boolean**|  | [optional] 
 **onDate** | **Date**| The search will be performed for the given date (instead of now) | [optional] 
 **locationId** | **Number**| Limit the scope of search to within this location (only works when also using employee_id with an Employee that is linked to a User account) | [optional] 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**ListClientSearchResultList**](ListClientSearchResultList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientAPISearchByLocationId"></a>
# **clientAPISearchByLocationId**
> ListClientList clientAPISearchByLocationId(locationId, opts)

Find clients by location

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientApi();
let locationId = 789; // Number | Location
let opts = { 
  'offset': 0, // Number | number of results to skip
  'limit': 10, // Number | number of results for one call
  'validFrom': new Date("2013-10-20"), // Date | starting time
  'validTo': new Date("2013-10-20"), // Date | end time
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.clientAPISearchByLocationId(locationId, opts, (error, data, response) => {
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
 **locationId** | **Number**| Location | 
 **offset** | **Number**| number of results to skip | [optional] [default to 0]
 **limit** | **Number**| number of results for one call | [optional] [default to 10]
 **validFrom** | **Date**| starting time | [optional] 
 **validTo** | **Date**| end time | [optional] 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**ListClientList**](ListClientList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientAPISearchClientIdsInCareInPeriod"></a>
# **clientAPISearchClientIdsInCareInPeriod**
> ListClientObjectIdList clientAPISearchClientIdsInCareInPeriod(opts)

Find clientObjectIds of all clients in care in a given period

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientApi();
let opts = { 
  'validFrom': new Date("2013-10-20"), // Date | 
  'validTo': new Date("2013-10-20"), // Date | 
  'limit': 10, // Number | 
  'offset': 0, // Number | 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.clientAPISearchClientIdsInCareInPeriod(opts, (error, data, response) => {
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
 **validFrom** | **Date**|  | [optional] 
 **validTo** | **Date**|  | [optional] 
 **limit** | **Number**|  | [optional] [default to 10]
 **offset** | **Number**|  | [optional] [default to 0]
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**ListClientObjectIdList**](ListClientObjectIdList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientAPISearchGrouped"></a>
# **clientAPISearchGrouped**
> ListClientSearchResultList clientAPISearchGrouped(query, opts)

Searches performed through this method are &#x27;grouped&#x27; according to the groups defined in com.nedap.healthcare.domain.ClientSearchResultGroup, which value is set on the com.nedap.healthcare.domain.ClientSearchResult#group field. This endpoint is deprecated, use: /omnisearch/client/search

Searches performed through this method are &#x27;grouped&#x27; according to the groups defined in {@link com.nedap.healthcare.domain.ClientSearchResultGroup}, which value is set on the {@link com.nedap.healthcare.domain.ClientSearchResult#group} field.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientApi();
let query = "query_example"; // String | 
let opts = { 
  'employee': "employee_example", // String | 
  'limit': 10, // Number | 
  'offset': 0, // Number | 
  'includewaiting': true, // Boolean | 
  'includeoutofcare': true, // Boolean | 
  'onDate': new Date("2013-10-20"), // Date | The search will be performed for the given date (instead of now)
  'locationId': 789, // Number | Limit the scope of search to within this location (only works when also using employee_id with an Employee that is linked to a User account)
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.clientAPISearchGrouped(query, opts, (error, data, response) => {
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
 **query** | **String**|  | 
 **employee** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] [default to 10]
 **offset** | **Number**|  | [optional] [default to 0]
 **includewaiting** | **Boolean**|  | [optional] 
 **includeoutofcare** | **Boolean**|  | [optional] 
 **onDate** | **Date**| The search will be performed for the given date (instead of now) | [optional] 
 **locationId** | **Number**| Limit the scope of search to within this location (only works when also using employee_id with an Employee that is linked to a User account) | [optional] 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**ListClientSearchResultList**](ListClientSearchResultList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientAPISearchInCareInPeriod"></a>
# **clientAPISearchInCareInPeriod**
> ListClientList clientAPISearchInCareInPeriod(opts)

Find all clients in care in a given period

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientApi();
let opts = { 
  'validFrom': new Date("2013-10-20"), // Date | 
  'validTo': new Date("2013-10-20"), // Date | 
  'limit': 10, // Number | 
  'offset': 0, // Number | 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.clientAPISearchInCareInPeriod(opts, (error, data, response) => {
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
 **validFrom** | **Date**|  | [optional] 
 **validTo** | **Date**|  | [optional] 
 **limit** | **Number**|  | [optional] [default to 10]
 **offset** | **Number**|  | [optional] [default to 0]
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**ListClientList**](ListClientList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="clientAPIStreamAll"></a>
# **clientAPIStreamAll**
> ListClientList clientAPIStreamAll()

Return all Client models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientApi();
apiInstance.clientAPIStreamAll((error, data, response) => {
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

[**ListClientList**](ListClientList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="clientAPIStreamDeletes"></a>
# **clientAPIStreamDeletes**
> ListClientList clientAPIStreamDeletes(since)

Return all Client models which where deleted since the date given in the request.

If no date is given it will return all deleted Client models

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.clientAPIStreamDeletes(since, (error, data, response) => {
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

[**ListClientList**](ListClientList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="clientAPIStreamUpdates"></a>
# **clientAPIStreamUpdates**
> ListClientList clientAPIStreamUpdates(since)

Return all Client models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.clientAPIStreamUpdates(since, (error, data, response) => {
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

[**ListClientList**](ListClientList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="clientAPIUpdate"></a>
# **clientAPIUpdate**
> Client clientAPIUpdate(body, id, opts)

Update Client

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ClientApi();
let body = new NedapOnsApi.Client(); // Client | Client to update
let id = 789; // Number | used for selecting Client
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.clientAPIUpdate(body, id, opts, (error, data, response) => {
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
 **body** | [**Client**](Client.md)| Client to update | 
 **id** | **Number**| used for selecting Client | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

