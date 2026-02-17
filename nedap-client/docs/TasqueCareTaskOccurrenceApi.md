# NedapOnsApi.TasqueCareTaskOccurrenceApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tasqueCareTaskOccurrenceAPIByClientAndSubType**](TasqueCareTaskOccurrenceApi.md#tasqueCareTaskOccurrenceAPIByClientAndSubType) | **GET** /v0/taken/clients/{client_id}/care_task_occurrences/by_sub_type | Returns the care task occurrences for a client and the given sub-type and sub-type query.
[**tasqueCareTaskOccurrenceAPIByClientId**](TasqueCareTaskOccurrenceApi.md#tasqueCareTaskOccurrenceAPIByClientId) | **GET** /v0/taken/clients/{client_id}/care_task_occurrences | Returns the care task occurrences of a Client corresponding to the given id.
[**tasqueCareTaskOccurrenceAPIByEmployeeAndSubType**](TasqueCareTaskOccurrenceApi.md#tasqueCareTaskOccurrenceAPIByEmployeeAndSubType) | **GET** /v0/taken/employees/{employee_id}/care_task_occurrences/by_sub_type | Returns the care task occurrences for a employee and the given sub-type and sub-type query.
[**tasqueCareTaskOccurrenceAPIById**](TasqueCareTaskOccurrenceApi.md#tasqueCareTaskOccurrenceAPIById) | **GET** /v0/taken/care_task_occurrences/{id} | 
[**tasqueCareTaskOccurrenceAPIByLocationAndSubType**](TasqueCareTaskOccurrenceApi.md#tasqueCareTaskOccurrenceAPIByLocationAndSubType) | **GET** /v0/taken/locations/{location_id}/care_task_occurrences/by_sub_type | Returns the care task occurrences for a location and the given sub-type and sub-type query.
[**tasqueCareTaskOccurrenceAPIByLocationId**](TasqueCareTaskOccurrenceApi.md#tasqueCareTaskOccurrenceAPIByLocationId) | **GET** /v0/taken/locations/{location_id}/care_task_occurrences | Returns the care task occurrences of a Location corresponding to the given id.
[**tasqueCareTaskOccurrenceAPIBySubType**](TasqueCareTaskOccurrenceApi.md#tasqueCareTaskOccurrenceAPIBySubType) | **GET** /v0/taken/care_task_occurrences/by_sub_type_id/{sub_type_id} | Returns the care task occurrences for the given sub-type and sub-type query.
[**tasqueCareTaskOccurrenceAPIByTeamAndSubType**](TasqueCareTaskOccurrenceApi.md#tasqueCareTaskOccurrenceAPIByTeamAndSubType) | **GET** /v0/taken/teams/{team_id}/care_task_occurrences/by_sub_type | Returns the care task occurrences for a team and the given sub-type and sub-type query.
[**tasqueCareTaskOccurrenceAPIDestroyFollowing**](TasqueCareTaskOccurrenceApi.md#tasqueCareTaskOccurrenceAPIDestroyFollowing) | **DELETE** /v0/taken/care_task_occurrences/{id}/destroy_following | Removes the given task occurrences item and all of the following occurrences of that item
[**tasqueCareTaskOccurrenceAPIDestroyIncidentally**](TasqueCareTaskOccurrenceApi.md#tasqueCareTaskOccurrenceAPIDestroyIncidentally) | **DELETE** /v0/taken/care_task_occurrences/{id}/destroy_incidentally | Removes the given task occurrence item
[**tasqueCareTaskOccurrenceAPIDestroyNextFollowing**](TasqueCareTaskOccurrenceApi.md#tasqueCareTaskOccurrenceAPIDestroyNextFollowing) | **DELETE** /v0/taken/care_task_occurrences/{id}/next_date/{date}/destroy_following | Find the next CareTaskOccurrence based on the id and a baseline search date and removes that found task occurrence item and all of the following occurrences of that item
[**tasqueCareTaskOccurrenceAPIDestroyNextIncidentally**](TasqueCareTaskOccurrenceApi.md#tasqueCareTaskOccurrenceAPIDestroyNextIncidentally) | **DELETE** /v0/taken/care_task_occurrences/{id}/next_date/{date}/destroy_incidentally | Find the next CareTaskOccurrence based on the id and a baseline search date and removes that found task occurrence item
[**tasqueCareTaskOccurrenceAPIFinish**](TasqueCareTaskOccurrenceApi.md#tasqueCareTaskOccurrenceAPIFinish) | **PUT** /v0/taken/care_task_occurrences/{id}/finish | Set state of the given task occurrence to finish
[**tasqueCareTaskOccurrenceAPIGetClientIdsBySubType**](TasqueCareTaskOccurrenceApi.md#tasqueCareTaskOccurrenceAPIGetClientIdsBySubType) | **GET** /v0/taken/care_task_occurrences/client_ids_by_sub_type | Query unique pairs [&lt;sub_type&gt;, &lt;client_id&gt;, &lt;sub_type_id&gt;] by sub type.
[**tasqueCareTaskOccurrenceAPINextById**](TasqueCareTaskOccurrenceApi.md#tasqueCareTaskOccurrenceAPINextById) | **GET** /v0/taken/care_task_occurrences/{id}/next_date/{date} | 
[**tasqueCareTaskOccurrenceAPIUpdateFollowing**](TasqueCareTaskOccurrenceApi.md#tasqueCareTaskOccurrenceAPIUpdateFollowing) | **PUT** /v0/taken/care_task_occurrences/{id}/update_following | Updates the given CareTaskOccurrence item and all of the following occurrences of that item
[**tasqueCareTaskOccurrenceAPIUpdateIncidentally**](TasqueCareTaskOccurrenceApi.md#tasqueCareTaskOccurrenceAPIUpdateIncidentally) | **PUT** /v0/taken/care_task_occurrences/{id}/update_incidentally | Updates only the given CareTaskOccurrence item
[**tasqueCareTaskOccurrenceAPIUpdateNextFollowing**](TasqueCareTaskOccurrenceApi.md#tasqueCareTaskOccurrenceAPIUpdateNextFollowing) | **PUT** /v0/taken/care_task_occurrences/{id}/next_date/{date}/update_following | Find the next CareTaskOccurrence based on the id and a baseline search date and update only that found CareTaskOccurrence and all of the following occurrence of that item.
[**tasqueCareTaskOccurrenceAPIUpdateNextIncidentally**](TasqueCareTaskOccurrenceApi.md#tasqueCareTaskOccurrenceAPIUpdateNextIncidentally) | **PUT** /v0/taken/care_task_occurrences/{id}/next_date/{date}/update_incidentally | Find the next CareTaskOccurrence based on the id and a baseline search date and update only that found CareTaskOccurrence.

<a name="tasqueCareTaskOccurrenceAPIByClientAndSubType"></a>
# **tasqueCareTaskOccurrenceAPIByClientAndSubType**
> TasqueListCareTaskOccurrenceList tasqueCareTaskOccurrenceAPIByClientAndSubType(clientId, subTypeQuery, opts)

Returns the care task occurrences for a client and the given sub-type and sub-type query.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TasqueCareTaskOccurrenceApi();
let clientId = 789; // Number | 
let subTypeQuery = "subTypeQuery_example"; // String | regex for sub_type
let opts = { 
  'subTypeId': "subTypeId_example" // String | 
};
apiInstance.tasqueCareTaskOccurrenceAPIByClientAndSubType(clientId, subTypeQuery, opts, (error, data, response) => {
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
 **clientId** | **Number**|  | 
 **subTypeQuery** | **String**| regex for sub_type | 
 **subTypeId** | **String**|  | [optional] 

### Return type

[**TasqueListCareTaskOccurrenceList**](TasqueListCareTaskOccurrenceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tasqueCareTaskOccurrenceAPIByClientId"></a>
# **tasqueCareTaskOccurrenceAPIByClientId**
> TasqueListCareTaskOccurrenceList tasqueCareTaskOccurrenceAPIByClientId(clientId, from, to, includeFinished)

Returns the care task occurrences of a Client corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TasqueCareTaskOccurrenceApi();
let clientId = 789; // Number | id
let from = new Date("2013-10-20"); // Date | 
let to = new Date("2013-10-20"); // Date | 
let includeFinished = true; // Boolean | 

apiInstance.tasqueCareTaskOccurrenceAPIByClientId(clientId, from, to, includeFinished, (error, data, response) => {
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
 **from** | **Date**|  | 
 **to** | **Date**|  | 
 **includeFinished** | **Boolean**|  | 

### Return type

[**TasqueListCareTaskOccurrenceList**](TasqueListCareTaskOccurrenceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tasqueCareTaskOccurrenceAPIByEmployeeAndSubType"></a>
# **tasqueCareTaskOccurrenceAPIByEmployeeAndSubType**
> TasqueListCareTaskOccurrenceList tasqueCareTaskOccurrenceAPIByEmployeeAndSubType(employeeId, subTypeQuery, opts)

Returns the care task occurrences for a employee and the given sub-type and sub-type query.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TasqueCareTaskOccurrenceApi();
let employeeId = 789; // Number | 
let subTypeQuery = "subTypeQuery_example"; // String | regex for sub_type
let opts = { 
  'subTypeId': "subTypeId_example" // String | 
};
apiInstance.tasqueCareTaskOccurrenceAPIByEmployeeAndSubType(employeeId, subTypeQuery, opts, (error, data, response) => {
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
 **employeeId** | **Number**|  | 
 **subTypeQuery** | **String**| regex for sub_type | 
 **subTypeId** | **String**|  | [optional] 

### Return type

[**TasqueListCareTaskOccurrenceList**](TasqueListCareTaskOccurrenceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tasqueCareTaskOccurrenceAPIById"></a>
# **tasqueCareTaskOccurrenceAPIById**
> TasqueCareTaskOccurrence tasqueCareTaskOccurrenceAPIById(id)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TasqueCareTaskOccurrenceApi();
let id = "id_example"; // String | used for selecting CareTaskOccurrence

apiInstance.tasqueCareTaskOccurrenceAPIById(id, (error, data, response) => {
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
 **id** | **String**| used for selecting CareTaskOccurrence | 

### Return type

[**TasqueCareTaskOccurrence**](TasqueCareTaskOccurrence.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tasqueCareTaskOccurrenceAPIByLocationAndSubType"></a>
# **tasqueCareTaskOccurrenceAPIByLocationAndSubType**
> TasqueListCareTaskOccurrenceList tasqueCareTaskOccurrenceAPIByLocationAndSubType(locationId, subTypeQuery, opts)

Returns the care task occurrences for a location and the given sub-type and sub-type query.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TasqueCareTaskOccurrenceApi();
let locationId = 789; // Number | 
let subTypeQuery = "subTypeQuery_example"; // String | regex for sub_type
let opts = { 
  'subTypeId': "subTypeId_example" // String | 
};
apiInstance.tasqueCareTaskOccurrenceAPIByLocationAndSubType(locationId, subTypeQuery, opts, (error, data, response) => {
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
 **locationId** | **Number**|  | 
 **subTypeQuery** | **String**| regex for sub_type | 
 **subTypeId** | **String**|  | [optional] 

### Return type

[**TasqueListCareTaskOccurrenceList**](TasqueListCareTaskOccurrenceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tasqueCareTaskOccurrenceAPIByLocationId"></a>
# **tasqueCareTaskOccurrenceAPIByLocationId**
> TasqueListCareTaskOccurrenceList tasqueCareTaskOccurrenceAPIByLocationId(locationId, from, to, includeFinished)

Returns the care task occurrences of a Location corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TasqueCareTaskOccurrenceApi();
let locationId = 789; // Number | id
let from = new Date("2013-10-20"); // Date | 
let to = new Date("2013-10-20"); // Date | 
let includeFinished = true; // Boolean | 

apiInstance.tasqueCareTaskOccurrenceAPIByLocationId(locationId, from, to, includeFinished, (error, data, response) => {
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
 **locationId** | **Number**| id | 
 **from** | **Date**|  | 
 **to** | **Date**|  | 
 **includeFinished** | **Boolean**|  | 

### Return type

[**TasqueListCareTaskOccurrenceList**](TasqueListCareTaskOccurrenceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tasqueCareTaskOccurrenceAPIBySubType"></a>
# **tasqueCareTaskOccurrenceAPIBySubType**
> TasqueListCareTaskOccurrenceList tasqueCareTaskOccurrenceAPIBySubType(subTypeQuery, subTypeId)

Returns the care task occurrences for the given sub-type and sub-type query.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TasqueCareTaskOccurrenceApi();
let subTypeQuery = "subTypeQuery_example"; // String | regex for sub_type
let subTypeId = "subTypeId_example"; // String | sub_type_id of task

apiInstance.tasqueCareTaskOccurrenceAPIBySubType(subTypeQuery, subTypeId, (error, data, response) => {
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
 **subTypeQuery** | **String**| regex for sub_type | 
 **subTypeId** | **String**| sub_type_id of task | 

### Return type

[**TasqueListCareTaskOccurrenceList**](TasqueListCareTaskOccurrenceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tasqueCareTaskOccurrenceAPIByTeamAndSubType"></a>
# **tasqueCareTaskOccurrenceAPIByTeamAndSubType**
> TasqueListCareTaskOccurrenceList tasqueCareTaskOccurrenceAPIByTeamAndSubType(teamId, subTypeQuery, opts)

Returns the care task occurrences for a team and the given sub-type and sub-type query.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TasqueCareTaskOccurrenceApi();
let teamId = 789; // Number | 
let subTypeQuery = "subTypeQuery_example"; // String | regex for sub_type
let opts = { 
  'subTypeId': "subTypeId_example" // String | 
};
apiInstance.tasqueCareTaskOccurrenceAPIByTeamAndSubType(teamId, subTypeQuery, opts, (error, data, response) => {
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
 **teamId** | **Number**|  | 
 **subTypeQuery** | **String**| regex for sub_type | 
 **subTypeId** | **String**|  | [optional] 

### Return type

[**TasqueListCareTaskOccurrenceList**](TasqueListCareTaskOccurrenceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tasqueCareTaskOccurrenceAPIDestroyFollowing"></a>
# **tasqueCareTaskOccurrenceAPIDestroyFollowing**
> tasqueCareTaskOccurrenceAPIDestroyFollowing(body, id)

Removes the given task occurrences item and all of the following occurrences of that item

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TasqueCareTaskOccurrenceApi();
let body = new NedapOnsApi.TasqueCareTaskOccurrence(); // TasqueCareTaskOccurrence | AgendaOccurrence to remove
let id = "id_example"; // String | Identifier of CareTaskOccurrence to delete.

apiInstance.tasqueCareTaskOccurrenceAPIDestroyFollowing(body, id, (error, data, response) => {
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
 **body** | [**TasqueCareTaskOccurrence**](TasqueCareTaskOccurrence.md)| AgendaOccurrence to remove | 
 **id** | **String**| Identifier of CareTaskOccurrence to delete. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="tasqueCareTaskOccurrenceAPIDestroyIncidentally"></a>
# **tasqueCareTaskOccurrenceAPIDestroyIncidentally**
> tasqueCareTaskOccurrenceAPIDestroyIncidentally(body, id)

Removes the given task occurrence item

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TasqueCareTaskOccurrenceApi();
let body = new NedapOnsApi.TasqueCareTaskOccurrence(); // TasqueCareTaskOccurrence | AgendaOccurrence to remove
let id = "id_example"; // String | Identifier of CareTaskOccurrence to delete.

apiInstance.tasqueCareTaskOccurrenceAPIDestroyIncidentally(body, id, (error, data, response) => {
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
 **body** | [**TasqueCareTaskOccurrence**](TasqueCareTaskOccurrence.md)| AgendaOccurrence to remove | 
 **id** | **String**| Identifier of CareTaskOccurrence to delete. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="tasqueCareTaskOccurrenceAPIDestroyNextFollowing"></a>
# **tasqueCareTaskOccurrenceAPIDestroyNextFollowing**
> TasqueCareTaskOccurrence tasqueCareTaskOccurrenceAPIDestroyNextFollowing(body, id, _date)

Find the next CareTaskOccurrence based on the id and a baseline search date and removes that found task occurrence item and all of the following occurrences of that item

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TasqueCareTaskOccurrenceApi();
let body = new NedapOnsApi.TasqueCareTaskOccurrence(); // TasqueCareTaskOccurrence | AgendaOccurrence to remove
let id = "id_example"; // String | Identifier of CareTaskOccurrence to delete.
let _date = new Date("2013-10-20"); // Date | The date from which the search for the next occurrence should be done

apiInstance.tasqueCareTaskOccurrenceAPIDestroyNextFollowing(body, id, _date, (error, data, response) => {
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
 **body** | [**TasqueCareTaskOccurrence**](TasqueCareTaskOccurrence.md)| AgendaOccurrence to remove | 
 **id** | **String**| Identifier of CareTaskOccurrence to delete. | 
 **_date** | **Date**| The date from which the search for the next occurrence should be done | 

### Return type

[**TasqueCareTaskOccurrence**](TasqueCareTaskOccurrence.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tasqueCareTaskOccurrenceAPIDestroyNextIncidentally"></a>
# **tasqueCareTaskOccurrenceAPIDestroyNextIncidentally**
> TasqueCareTaskOccurrence tasqueCareTaskOccurrenceAPIDestroyNextIncidentally(body, id, _date)

Find the next CareTaskOccurrence based on the id and a baseline search date and removes that found task occurrence item

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TasqueCareTaskOccurrenceApi();
let body = new NedapOnsApi.TasqueCareTaskOccurrence(); // TasqueCareTaskOccurrence | AgendaOccurrence to remove
let id = "id_example"; // String | Identifier of CareTaskOccurrence to delete.
let _date = new Date("2013-10-20"); // Date | The date from which the search for the next occurrence should be done

apiInstance.tasqueCareTaskOccurrenceAPIDestroyNextIncidentally(body, id, _date, (error, data, response) => {
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
 **body** | [**TasqueCareTaskOccurrence**](TasqueCareTaskOccurrence.md)| AgendaOccurrence to remove | 
 **id** | **String**| Identifier of CareTaskOccurrence to delete. | 
 **_date** | **Date**| The date from which the search for the next occurrence should be done | 

### Return type

[**TasqueCareTaskOccurrence**](TasqueCareTaskOccurrence.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tasqueCareTaskOccurrenceAPIFinish"></a>
# **tasqueCareTaskOccurrenceAPIFinish**
> TasqueCareTaskOccurrence tasqueCareTaskOccurrenceAPIFinish(body, id)

Set state of the given task occurrence to finish

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TasqueCareTaskOccurrenceApi();
let body = new NedapOnsApi.TasqueCareTaskOccurrence(); // TasqueCareTaskOccurrence | 
let id = "id_example"; // String | Identifier of CareTaskOccurrence to update.

apiInstance.tasqueCareTaskOccurrenceAPIFinish(body, id, (error, data, response) => {
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
 **body** | [**TasqueCareTaskOccurrence**](TasqueCareTaskOccurrence.md)|  | 
 **id** | **String**| Identifier of CareTaskOccurrence to update. | 

### Return type

[**TasqueCareTaskOccurrence**](TasqueCareTaskOccurrence.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tasqueCareTaskOccurrenceAPIGetClientIdsBySubType"></a>
# **tasqueCareTaskOccurrenceAPIGetClientIdsBySubType**
> TasqueListClientIdBySubTypeList tasqueCareTaskOccurrenceAPIGetClientIdsBySubType(subTypeQuery)

Query unique pairs [&lt;sub_type&gt;, &lt;client_id&gt;, &lt;sub_type_id&gt;] by sub type.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TasqueCareTaskOccurrenceApi();
let subTypeQuery = "subTypeQuery_example"; // String | String to match tasks that have a 'sub_type' starting with this string.

apiInstance.tasqueCareTaskOccurrenceAPIGetClientIdsBySubType(subTypeQuery, (error, data, response) => {
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
 **subTypeQuery** | **String**| String to match tasks that have a &#x27;sub_type&#x27; starting with this string. | 

### Return type

[**TasqueListClientIdBySubTypeList**](TasqueListClientIdBySubTypeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tasqueCareTaskOccurrenceAPINextById"></a>
# **tasqueCareTaskOccurrenceAPINextById**
> TasqueCareTaskOccurrence tasqueCareTaskOccurrenceAPINextById(id, _date)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TasqueCareTaskOccurrenceApi();
let id = "id_example"; // String | used for selecting CareTaskOccurrence
let _date = new Date("2013-10-20"); // Date | used for find the next occurrence

apiInstance.tasqueCareTaskOccurrenceAPINextById(id, _date, (error, data, response) => {
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
 **id** | **String**| used for selecting CareTaskOccurrence | 
 **_date** | **Date**| used for find the next occurrence | 

### Return type

[**TasqueCareTaskOccurrence**](TasqueCareTaskOccurrence.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tasqueCareTaskOccurrenceAPIUpdateFollowing"></a>
# **tasqueCareTaskOccurrenceAPIUpdateFollowing**
> TasqueCareTaskOccurrence tasqueCareTaskOccurrenceAPIUpdateFollowing(body, id)

Updates the given CareTaskOccurrence item and all of the following occurrences of that item

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TasqueCareTaskOccurrenceApi();
let body = new NedapOnsApi.TasqueCareTaskOccurrence(); // TasqueCareTaskOccurrence | 
let id = "id_example"; // String | Identifier of CareTaskOccurrence to update.

apiInstance.tasqueCareTaskOccurrenceAPIUpdateFollowing(body, id, (error, data, response) => {
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
 **body** | [**TasqueCareTaskOccurrence**](TasqueCareTaskOccurrence.md)|  | 
 **id** | **String**| Identifier of CareTaskOccurrence to update. | 

### Return type

[**TasqueCareTaskOccurrence**](TasqueCareTaskOccurrence.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tasqueCareTaskOccurrenceAPIUpdateIncidentally"></a>
# **tasqueCareTaskOccurrenceAPIUpdateIncidentally**
> TasqueCareTaskOccurrence tasqueCareTaskOccurrenceAPIUpdateIncidentally(body, id)

Updates only the given CareTaskOccurrence item

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TasqueCareTaskOccurrenceApi();
let body = new NedapOnsApi.TasqueCareTaskOccurrence(); // TasqueCareTaskOccurrence | 
let id = "id_example"; // String | Identifier of CareTaskOccurrence to update.

apiInstance.tasqueCareTaskOccurrenceAPIUpdateIncidentally(body, id, (error, data, response) => {
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
 **body** | [**TasqueCareTaskOccurrence**](TasqueCareTaskOccurrence.md)|  | 
 **id** | **String**| Identifier of CareTaskOccurrence to update. | 

### Return type

[**TasqueCareTaskOccurrence**](TasqueCareTaskOccurrence.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tasqueCareTaskOccurrenceAPIUpdateNextFollowing"></a>
# **tasqueCareTaskOccurrenceAPIUpdateNextFollowing**
> TasqueCareTaskOccurrence tasqueCareTaskOccurrenceAPIUpdateNextFollowing(body, id, _date)

Find the next CareTaskOccurrence based on the id and a baseline search date and update only that found CareTaskOccurrence and all of the following occurrence of that item.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TasqueCareTaskOccurrenceApi();
let body = new NedapOnsApi.TasqueCareTaskOccurrence(); // TasqueCareTaskOccurrence | 
let id = "id_example"; // String | Identifier of CareTaskOccurrence to update.
let _date = new Date("2013-10-20"); // Date | The date from which the search for the next occurrence should be done

apiInstance.tasqueCareTaskOccurrenceAPIUpdateNextFollowing(body, id, _date, (error, data, response) => {
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
 **body** | [**TasqueCareTaskOccurrence**](TasqueCareTaskOccurrence.md)|  | 
 **id** | **String**| Identifier of CareTaskOccurrence to update. | 
 **_date** | **Date**| The date from which the search for the next occurrence should be done | 

### Return type

[**TasqueCareTaskOccurrence**](TasqueCareTaskOccurrence.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tasqueCareTaskOccurrenceAPIUpdateNextIncidentally"></a>
# **tasqueCareTaskOccurrenceAPIUpdateNextIncidentally**
> TasqueCareTaskOccurrence tasqueCareTaskOccurrenceAPIUpdateNextIncidentally(body, id, _date)

Find the next CareTaskOccurrence based on the id and a baseline search date and update only that found CareTaskOccurrence.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TasqueCareTaskOccurrenceApi();
let body = new NedapOnsApi.TasqueCareTaskOccurrence(); // TasqueCareTaskOccurrence | 
let id = "id_example"; // String | Identifier of CareTaskOccurrence to update.
let _date = new Date("2013-10-20"); // Date | The date from which the search for the next occurrence should be done

apiInstance.tasqueCareTaskOccurrenceAPIUpdateNextIncidentally(body, id, _date, (error, data, response) => {
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
 **body** | [**TasqueCareTaskOccurrence**](TasqueCareTaskOccurrence.md)|  | 
 **id** | **String**| Identifier of CareTaskOccurrence to update. | 
 **_date** | **Date**| The date from which the search for the next occurrence should be done | 

### Return type

[**TasqueCareTaskOccurrence**](TasqueCareTaskOccurrence.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

