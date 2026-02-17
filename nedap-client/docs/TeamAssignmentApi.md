# NedapOnsApi.TeamAssignmentApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamAssignmentAPIByEmployeeId**](TeamAssignmentApi.md#teamAssignmentAPIByEmployeeId) | **GET** /v0/administration/employees/{employee_id}/teams | Return the team assignments of a Employee corresponding to the given id.
[**teamAssignmentAPIByEmployeeIdAndAssignmentId**](TeamAssignmentApi.md#teamAssignmentAPIByEmployeeIdAndAssignmentId) | **GET** /v0/administration/employees/{employee_id}/teams/{team_assignment_id} | Update the team assignment with the provided id assigned to the employee corresponding to the provided id.
[**teamAssignmentAPIById**](TeamAssignmentApi.md#teamAssignmentAPIById) | **GET** /v0/administration/team_assignments/{id} | Return the team assignment with the given id.
[**teamAssignmentAPICreateForEmployeeId**](TeamAssignmentApi.md#teamAssignmentAPICreateForEmployeeId) | **POST** /v0/administration/employees/{employee_id}/teams | Create the provided team assignment and assign it to the employee corresponding to the provided id.
[**teamAssignmentAPIRemoveForEmployeeId**](TeamAssignmentApi.md#teamAssignmentAPIRemoveForEmployeeId) | **DELETE** /v0/administration/employees/{employee_id}/teams/{team_assignment_id} | Remove the team assignment with the provided id assigned to the employee corresponding to the provided id.
[**teamAssignmentAPIStreamAll**](TeamAssignmentApi.md#teamAssignmentAPIStreamAll) | **GET** /v0/xstream/team_assignments/data | Return all TeamAssignment models in a streaming manner
[**teamAssignmentAPIStreamDeletes**](TeamAssignmentApi.md#teamAssignmentAPIStreamDeletes) | **GET** /v0/xstream/team_assignments/deletes | Return all TeamAssignment models which where deleted since the date given in the request.
[**teamAssignmentAPIStreamUpdates**](TeamAssignmentApi.md#teamAssignmentAPIStreamUpdates) | **GET** /v0/xstream/team_assignments/updates | Return all TeamAssignment models which where updated since the date given in the request.
[**teamAssignmentAPIUpdateForEmployeeId**](TeamAssignmentApi.md#teamAssignmentAPIUpdateForEmployeeId) | **PUT** /v0/administration/employees/{employee_id}/teams/{team_assignment_id} | Update the team assignment with the provided id assigned to the employee corresponding to the provided id.

<a name="teamAssignmentAPIByEmployeeId"></a>
# **teamAssignmentAPIByEmployeeId**
> ListTeamAssignmentList teamAssignmentAPIByEmployeeId(employeeId, opts)

Return the team assignments of a Employee corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TeamAssignmentApi();
let employeeId = 789; // Number | id
let opts = { 
  'validFrom': new Date("2013-10-20"), // Date | 
  'validTo': new Date("2013-10-20") // Date | 
};
apiInstance.teamAssignmentAPIByEmployeeId(employeeId, opts, (error, data, response) => {
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

### Return type

[**ListTeamAssignmentList**](ListTeamAssignmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="teamAssignmentAPIByEmployeeIdAndAssignmentId"></a>
# **teamAssignmentAPIByEmployeeIdAndAssignmentId**
> TeamAssignment teamAssignmentAPIByEmployeeIdAndAssignmentId(employeeId, teamAssignmentId)

Update the team assignment with the provided id assigned to the employee corresponding to the provided id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TeamAssignmentApi();
let employeeId = 789; // Number | id
let teamAssignmentId = 789; // Number | 

apiInstance.teamAssignmentAPIByEmployeeIdAndAssignmentId(employeeId, teamAssignmentId, (error, data, response) => {
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
 **teamAssignmentId** | **Number**|  | 

### Return type

[**TeamAssignment**](TeamAssignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="teamAssignmentAPIById"></a>
# **teamAssignmentAPIById**
> TeamAssignment teamAssignmentAPIById(id)

Return the team assignment with the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TeamAssignmentApi();
let id = 789; // Number | id of the team assignment

apiInstance.teamAssignmentAPIById(id, (error, data, response) => {
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
 **id** | **Number**| id of the team assignment | 

### Return type

[**TeamAssignment**](TeamAssignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="teamAssignmentAPICreateForEmployeeId"></a>
# **teamAssignmentAPICreateForEmployeeId**
> TeamAssignment teamAssignmentAPICreateForEmployeeId(body, employeeId)

Create the provided team assignment and assign it to the employee corresponding to the provided id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TeamAssignmentApi();
let body = new NedapOnsApi.TeamAssignment(); // TeamAssignment | 
let employeeId = 789; // Number | id

apiInstance.teamAssignmentAPICreateForEmployeeId(body, employeeId, (error, data, response) => {
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
 **body** | [**TeamAssignment**](TeamAssignment.md)|  | 
 **employeeId** | **Number**| id | 

### Return type

[**TeamAssignment**](TeamAssignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamAssignmentAPIRemoveForEmployeeId"></a>
# **teamAssignmentAPIRemoveForEmployeeId**
> teamAssignmentAPIRemoveForEmployeeId(employeeId, teamAssignmentId)

Remove the team assignment with the provided id assigned to the employee corresponding to the provided id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TeamAssignmentApi();
let employeeId = 789; // Number | id
let teamAssignmentId = 789; // Number | 

apiInstance.teamAssignmentAPIRemoveForEmployeeId(employeeId, teamAssignmentId, (error, data, response) => {
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
 **employeeId** | **Number**| id | 
 **teamAssignmentId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="teamAssignmentAPIStreamAll"></a>
# **teamAssignmentAPIStreamAll**
> ListTeamAssignmentList teamAssignmentAPIStreamAll()

Return all TeamAssignment models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TeamAssignmentApi();
apiInstance.teamAssignmentAPIStreamAll((error, data, response) => {
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

[**ListTeamAssignmentList**](ListTeamAssignmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="teamAssignmentAPIStreamDeletes"></a>
# **teamAssignmentAPIStreamDeletes**
> ListTeamAssignmentList teamAssignmentAPIStreamDeletes(since)

Return all TeamAssignment models which where deleted since the date given in the request.

If no date is given it will return all deleted TeamAssignment models

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TeamAssignmentApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.teamAssignmentAPIStreamDeletes(since, (error, data, response) => {
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

[**ListTeamAssignmentList**](ListTeamAssignmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="teamAssignmentAPIStreamUpdates"></a>
# **teamAssignmentAPIStreamUpdates**
> ListTeamAssignmentList teamAssignmentAPIStreamUpdates(since)

Return all TeamAssignment models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TeamAssignmentApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.teamAssignmentAPIStreamUpdates(since, (error, data, response) => {
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

[**ListTeamAssignmentList**](ListTeamAssignmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="teamAssignmentAPIUpdateForEmployeeId"></a>
# **teamAssignmentAPIUpdateForEmployeeId**
> TeamAssignment teamAssignmentAPIUpdateForEmployeeId(body, employeeId, teamAssignmentId)

Update the team assignment with the provided id assigned to the employee corresponding to the provided id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TeamAssignmentApi();
let body = new NedapOnsApi.TeamAssignment(); // TeamAssignment | 
let employeeId = 789; // Number | id
let teamAssignmentId = 789; // Number | 

apiInstance.teamAssignmentAPIUpdateForEmployeeId(body, employeeId, teamAssignmentId, (error, data, response) => {
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
 **body** | [**TeamAssignment**](TeamAssignment.md)|  | 
 **employeeId** | **Number**| id | 
 **teamAssignmentId** | **Number**|  | 

### Return type

[**TeamAssignment**](TeamAssignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

