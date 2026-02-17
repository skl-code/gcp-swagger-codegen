# NedapOnsApi.AgendaAgendaOccurrenceApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**agendaAgendaOccurrenceAPIByClientId**](AgendaAgendaOccurrenceApi.md#agendaAgendaOccurrenceAPIByClientId) | **GET** /v0/agenda/clients/{client_id}/agenda_occurrences | Return the agenda occurrences of a Client corresponding to the given id.
[**agendaAgendaOccurrenceAPIByEmployeeId**](AgendaAgendaOccurrenceApi.md#agendaAgendaOccurrenceAPIByEmployeeId) | **GET** /v0/agenda/employees/{employee_id}/agenda_occurrences | Return the agenda occurrences of a Employee corresponding to the given id.
[**agendaAgendaOccurrenceAPIByGroupUuid**](AgendaAgendaOccurrenceApi.md#agendaAgendaOccurrenceAPIByGroupUuid) | **GET** /v0/agenda/groups/{group_uuid}/agenda_occurrences | Return the agenda occurrences of a group corresponding to the given uuid.
[**agendaAgendaOccurrenceAPIById**](AgendaAgendaOccurrenceApi.md#agendaAgendaOccurrenceAPIById) | **GET** /v0/agenda/agenda_occurrences/{id} | Get event occurrence
[**agendaAgendaOccurrenceAPIByLocationId**](AgendaAgendaOccurrenceApi.md#agendaAgendaOccurrenceAPIByLocationId) | **GET** /v0/agenda/locations/{location_id}/agenda_occurrences | Return the agenda occurrences of a Location corresponding to the given id.
[**agendaAgendaOccurrenceAPIDestroyFollowing**](AgendaAgendaOccurrenceApi.md#agendaAgendaOccurrenceAPIDestroyFollowing) | **DELETE** /v0/agenda/agenda_occurrences/{id}/destroy_following | Removes the given agenda occurrence item and all of the following occurrences of that item
[**agendaAgendaOccurrenceAPIDestroyIncidentally**](AgendaAgendaOccurrenceApi.md#agendaAgendaOccurrenceAPIDestroyIncidentally) | **DELETE** /v0/agenda/agenda_occurrences/{id}/destroy_incidentally | Removes only the given agenda occurrence item
[**agendaAgendaOccurrenceAPIUpdateFollowing**](AgendaAgendaOccurrenceApi.md#agendaAgendaOccurrenceAPIUpdateFollowing) | **PUT** /v0/agenda/agenda_occurrences/{id}/update_following | Updates the given AgendaOccurrence item and all of the following occurrences of that item.
[**agendaAgendaOccurrenceAPIUpdateIncidentally**](AgendaAgendaOccurrenceApi.md#agendaAgendaOccurrenceAPIUpdateIncidentally) | **PUT** /v0/agenda/agenda_occurrences/{id}/update_incidentally | Updates only the given AgendaOccurrence.

<a name="agendaAgendaOccurrenceAPIByClientId"></a>
# **agendaAgendaOccurrenceAPIByClientId**
> AgendaListAgendaOccurrenceList agendaAgendaOccurrenceAPIByClientId(clientId, from, to, opts)

Return the agenda occurrences of a Client corresponding to the given id.

List event occurrences for client

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AgendaAgendaOccurrenceApi();
let clientId = 789; // Number | id
let from = new Date("2013-10-20"); // Date | Start date (inclusive) of selection period
let to = new Date("2013-10-20"); // Date | End date (exclusive) of selection period
let opts = { 
  'requireClientPresent': true // Boolean | 
};
apiInstance.agendaAgendaOccurrenceAPIByClientId(clientId, from, to, opts, (error, data, response) => {
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
 **from** | **Date**| Start date (inclusive) of selection period | 
 **to** | **Date**| End date (exclusive) of selection period | 
 **requireClientPresent** | **Boolean**|  | [optional] [default to true]

### Return type

[**AgendaListAgendaOccurrenceList**](AgendaListAgendaOccurrenceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="agendaAgendaOccurrenceAPIByEmployeeId"></a>
# **agendaAgendaOccurrenceAPIByEmployeeId**
> AgendaListAgendaOccurrenceList agendaAgendaOccurrenceAPIByEmployeeId(employeeId, from, to)

Return the agenda occurrences of a Employee corresponding to the given id.

List event occurrences for employee

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AgendaAgendaOccurrenceApi();
let employeeId = 789; // Number | id
let from = new Date("2013-10-20"); // Date | Start date (inclusive) of selection period
let to = new Date("2013-10-20"); // Date | End date (exclusive) of selection period

apiInstance.agendaAgendaOccurrenceAPIByEmployeeId(employeeId, from, to, (error, data, response) => {
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
 **from** | **Date**| Start date (inclusive) of selection period | 
 **to** | **Date**| End date (exclusive) of selection period | 

### Return type

[**AgendaListAgendaOccurrenceList**](AgendaListAgendaOccurrenceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="agendaAgendaOccurrenceAPIByGroupUuid"></a>
# **agendaAgendaOccurrenceAPIByGroupUuid**
> AgendaListAgendaOccurrenceList agendaAgendaOccurrenceAPIByGroupUuid(groupUuid, from, to)

Return the agenda occurrences of a group corresponding to the given uuid.

Return the agenda occurrences of a group corresponding to the given uuid. Deprected: use Groepsplanning instead

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AgendaAgendaOccurrenceApi();
let groupUuid = "groupUuid_example"; // String | uuid
let from = new Date("2013-10-20"); // Date | Start date (inclusive) of selection period
let to = new Date("2013-10-20"); // Date | End date (exclusive) of selection period

apiInstance.agendaAgendaOccurrenceAPIByGroupUuid(groupUuid, from, to, (error, data, response) => {
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
 **groupUuid** | **String**| uuid | 
 **from** | **Date**| Start date (inclusive) of selection period | 
 **to** | **Date**| End date (exclusive) of selection period | 

### Return type

[**AgendaListAgendaOccurrenceList**](AgendaListAgendaOccurrenceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="agendaAgendaOccurrenceAPIById"></a>
# **agendaAgendaOccurrenceAPIById**
> AgendaAgendaOccurrence agendaAgendaOccurrenceAPIById(id)

Get event occurrence

Get event occurrence

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AgendaAgendaOccurrenceApi();
let id = "id_example"; // String | used for selecting AgendaOccurrence

apiInstance.agendaAgendaOccurrenceAPIById(id, (error, data, response) => {
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
 **id** | **String**| used for selecting AgendaOccurrence | 

### Return type

[**AgendaAgendaOccurrence**](AgendaAgendaOccurrence.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="agendaAgendaOccurrenceAPIByLocationId"></a>
# **agendaAgendaOccurrenceAPIByLocationId**
> AgendaListAgendaOccurrenceList agendaAgendaOccurrenceAPIByLocationId(locationId, from, to)

Return the agenda occurrences of a Location corresponding to the given id.

List event occurrences for location

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AgendaAgendaOccurrenceApi();
let locationId = 789; // Number | id
let from = new Date("2013-10-20"); // Date | Start date (inclusive) of selection period
let to = new Date("2013-10-20"); // Date | End date (exclusive) of selection period

apiInstance.agendaAgendaOccurrenceAPIByLocationId(locationId, from, to, (error, data, response) => {
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
 **from** | **Date**| Start date (inclusive) of selection period | 
 **to** | **Date**| End date (exclusive) of selection period | 

### Return type

[**AgendaListAgendaOccurrenceList**](AgendaListAgendaOccurrenceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="agendaAgendaOccurrenceAPIDestroyFollowing"></a>
# **agendaAgendaOccurrenceAPIDestroyFollowing**
> agendaAgendaOccurrenceAPIDestroyFollowing(body, id)

Removes the given agenda occurrence item and all of the following occurrences of that item

Removes the given appointment occurrence and all of the following occurrences of that appointment

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AgendaAgendaOccurrenceApi();
let body = new NedapOnsApi.AgendaAgendaOccurrence(); // AgendaAgendaOccurrence | AgendaOccurrence to remove
let id = "id_example"; // String | Identifier of AgendaOccurrence to delete.

apiInstance.agendaAgendaOccurrenceAPIDestroyFollowing(body, id, (error, data, response) => {
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
 **body** | [**AgendaAgendaOccurrence**](AgendaAgendaOccurrence.md)| AgendaOccurrence to remove | 
 **id** | **String**| Identifier of AgendaOccurrence to delete. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="agendaAgendaOccurrenceAPIDestroyIncidentally"></a>
# **agendaAgendaOccurrenceAPIDestroyIncidentally**
> agendaAgendaOccurrenceAPIDestroyIncidentally(body, id)

Removes only the given agenda occurrence item

Removes the given appointment occurrence

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AgendaAgendaOccurrenceApi();
let body = new NedapOnsApi.AgendaAgendaOccurrence(); // AgendaAgendaOccurrence | AgendaOccurrence to remove
let id = "id_example"; // String | Identifier of AgendaOccurrence to delete.

apiInstance.agendaAgendaOccurrenceAPIDestroyIncidentally(body, id, (error, data, response) => {
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
 **body** | [**AgendaAgendaOccurrence**](AgendaAgendaOccurrence.md)| AgendaOccurrence to remove | 
 **id** | **String**| Identifier of AgendaOccurrence to delete. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="agendaAgendaOccurrenceAPIUpdateFollowing"></a>
# **agendaAgendaOccurrenceAPIUpdateFollowing**
> AgendaAgendaOccurrence agendaAgendaOccurrenceAPIUpdateFollowing(body, id)

Updates the given AgendaOccurrence item and all of the following occurrences of that item.

NB:  current: When creating of updating an AgendaOccurrence the start_time and end_time fields are used by Ons Agenda. The starts_at and ends_at fields will be ignored.  future: When creating of updating an AgendaOccurrence the starts_at and ends_at fields are used by Ons Agenda. The start_time and end_time fields will be ignored and eventually be removed.  When you change any property of the Occurrence when updating \&quot;following\&quot;, this will break the Series in two. The pre-existing Series is ended (&#x60;validTo&#x60;) at the last occurrence before this one. Then from this occurrence a new Series is created with the updated properties.  There is one exception to this rule: - When updating the first occurrence in a Series, the Series is updated in place.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AgendaAgendaOccurrenceApi();
let body = new NedapOnsApi.AgendaAgendaOccurrence(); // AgendaAgendaOccurrence | 
let id = "id_example"; // String | Identifier of AgendaOccurrence to update.

apiInstance.agendaAgendaOccurrenceAPIUpdateFollowing(body, id, (error, data, response) => {
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
 **body** | [**AgendaAgendaOccurrence**](AgendaAgendaOccurrence.md)|  | 
 **id** | **String**| Identifier of AgendaOccurrence to update. | 

### Return type

[**AgendaAgendaOccurrence**](AgendaAgendaOccurrence.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="agendaAgendaOccurrenceAPIUpdateIncidentally"></a>
# **agendaAgendaOccurrenceAPIUpdateIncidentally**
> AgendaAgendaOccurrence agendaAgendaOccurrenceAPIUpdateIncidentally(body, id)

Updates only the given AgendaOccurrence.

NB:  current: When creating of updating an AgendaOccurrence the start_time and end_time fields are used by Ons Agenda. The starts_at and ends_at fields will be ignored.  future: When creating of updating an AgendaOccurrence the starts_at and ends_at fields are used by Ons Agenda. The start_time and end_time fields will be ignored and eventually be removed.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AgendaAgendaOccurrenceApi();
let body = new NedapOnsApi.AgendaAgendaOccurrence(); // AgendaAgendaOccurrence | 
let id = "id_example"; // String | Identifier of AgendaOccurrence to update.

apiInstance.agendaAgendaOccurrenceAPIUpdateIncidentally(body, id, (error, data, response) => {
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
 **body** | [**AgendaAgendaOccurrence**](AgendaAgendaOccurrence.md)|  | 
 **id** | **String**| Identifier of AgendaOccurrence to update. | 

### Return type

[**AgendaAgendaOccurrence**](AgendaAgendaOccurrence.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

