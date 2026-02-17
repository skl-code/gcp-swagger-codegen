# NedapOnsApi.TeamApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamAPIAgendaEnabled**](TeamApi.md#teamAPIAgendaEnabled) | **GET** /v0/agenda/teams | Check whether agenda is enabled
[**teamAPIAll**](TeamApi.md#teamAPIAll) | **GET** /v0/administration/teams | Return all teams
[**teamAPIByCode**](TeamApi.md#teamAPIByCode) | **GET** /v0/administration/teams/by_code/{code} | Return the code of a Team corresponding to the given id.
[**teamAPIByEmployeeId**](TeamApi.md#teamAPIByEmployeeId) | **GET** /v0/administration/employees/{employee_id}/clipped_teams | Return the teams of a Employee corresponding to the given id between 2 dates.
[**teamAPIById**](TeamApi.md#teamAPIById) | **GET** /v0/administration/teams/{id} | Return the Team corresponding to the given id
[**teamAPILastVisitedByUserId**](TeamApi.md#teamAPILastVisitedByUserId) | **GET** /v0/administration/users/{user_id}/last_visited_teams | Return the last visited Teams of a User corresponding to the given id.
[**teamAPIMultiple**](TeamApi.md#teamAPIMultiple) | **GET** /v0/administration/teams/multiple | Method used for requesting multiple Team objects using their ids.
[**teamAPIScopedByUserId**](TeamApi.md#teamAPIScopedByUserId) | **GET** /v0/administration/users/{user_id}/scoped_teams | Return the scoped Teams of a User corresponding to the given id.
[**teamAPIStreamAll**](TeamApi.md#teamAPIStreamAll) | **GET** /v0/xstream/teams/data | Return all Team models in a streaming manner
[**teamAPIStreamDeletes**](TeamApi.md#teamAPIStreamDeletes) | **GET** /v0/xstream/teams/deletes | Return all Team models which where deleted since the date given in the request.
[**teamAPIStreamUpdates**](TeamApi.md#teamAPIStreamUpdates) | **GET** /v0/xstream/teams/updates | Return all Team models which where updated since the date given in the request.

<a name="teamAPIAgendaEnabled"></a>
# **teamAPIAgendaEnabled**
> ListTeamList teamAPIAgendaEnabled()

Check whether agenda is enabled

Returns all agenda-enabled teams

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TeamApi();
apiInstance.teamAPIAgendaEnabled((error, data, response) => {
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

[**ListTeamList**](ListTeamList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="teamAPIAll"></a>
# **teamAPIAll**
> ListTeamList teamAPIAll()

Return all teams

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TeamApi();
apiInstance.teamAPIAll((error, data, response) => {
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

[**ListTeamList**](ListTeamList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="teamAPIByCode"></a>
# **teamAPIByCode**
> Team teamAPIByCode(code)

Return the code of a Team corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TeamApi();
let code = "code_example"; // String | 

apiInstance.teamAPIByCode(code, (error, data, response) => {
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
 **code** | **String**|  | 

### Return type

[**Team**](Team.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="teamAPIByEmployeeId"></a>
# **teamAPIByEmployeeId**
> ListTeamList teamAPIByEmployeeId(employeeId, opts)

Return the teams of a Employee corresponding to the given id between 2 dates.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TeamApi();
let employeeId = 789; // Number | The identifier of the employee for which to retrieve teams
let opts = { 
  'validFrom': new Date("2013-10-20"), // Date | 
  'validTo': new Date("2013-10-20") // Date | 
};
apiInstance.teamAPIByEmployeeId(employeeId, opts, (error, data, response) => {
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
 **employeeId** | **Number**| The identifier of the employee for which to retrieve teams | 
 **validFrom** | **Date**|  | [optional] 
 **validTo** | **Date**|  | [optional] 

### Return type

[**ListTeamList**](ListTeamList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="teamAPIById"></a>
# **teamAPIById**
> Team teamAPIById(id)

Return the Team corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TeamApi();
let id = 789; // Number | used for selecting Team

apiInstance.teamAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting Team | 

### Return type

[**Team**](Team.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="teamAPILastVisitedByUserId"></a>
# **teamAPILastVisitedByUserId**
> ListTeamList teamAPILastVisitedByUserId(userId)

Return the last visited Teams of a User corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TeamApi();
let userId = 789; // Number | id

apiInstance.teamAPILastVisitedByUserId(userId, (error, data, response) => {
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

[**ListTeamList**](ListTeamList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="teamAPIMultiple"></a>
# **teamAPIMultiple**
> ListTeamList teamAPIMultiple(opts)

Method used for requesting multiple Team objects using their ids.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TeamApi();
let opts = { 
  'id': [3.4] // [Number] | array style id's: id=1&id=2&etc
};
apiInstance.teamAPIMultiple(opts, (error, data, response) => {
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

[**ListTeamList**](ListTeamList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="teamAPIScopedByUserId"></a>
# **teamAPIScopedByUserId**
> ListTeamList teamAPIScopedByUserId(userId)

Return the scoped Teams of a User corresponding to the given id.

use Shield. See https://github.com/nedap/shield/issues/3207#issuecomment-635947346 

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TeamApi();
let userId = 789; // Number | id

apiInstance.teamAPIScopedByUserId(userId, (error, data, response) => {
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

[**ListTeamList**](ListTeamList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="teamAPIStreamAll"></a>
# **teamAPIStreamAll**
> ListTeamList teamAPIStreamAll()

Return all Team models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TeamApi();
apiInstance.teamAPIStreamAll((error, data, response) => {
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

[**ListTeamList**](ListTeamList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="teamAPIStreamDeletes"></a>
# **teamAPIStreamDeletes**
> ListTeamList teamAPIStreamDeletes(since)

Return all Team models which where deleted since the date given in the request.

If no date is given it will return all deleted Team models

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TeamApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.teamAPIStreamDeletes(since, (error, data, response) => {
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

[**ListTeamList**](ListTeamList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="teamAPIStreamUpdates"></a>
# **teamAPIStreamUpdates**
> ListTeamList teamAPIStreamUpdates(since)

Return all Team models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TeamApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.teamAPIStreamUpdates(since, (error, data, response) => {
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

[**ListTeamList**](ListTeamList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

