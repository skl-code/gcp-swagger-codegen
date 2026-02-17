# NedapOnsApi.ExpertiseProfileAssignmentApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**expertiseProfileAssignmentAPIAssignExpertiseProfileToEmployee**](ExpertiseProfileAssignmentApi.md#expertiseProfileAssignmentAPIAssignExpertiseProfileToEmployee) | **POST** /v0/administration/expertise_profile_assignments | Create new expertise profile assignment for the Employee corresponding to the given employee_id.
[**expertiseProfileAssignmentAPIByEmployeeIdAndDateRange**](ExpertiseProfileAssignmentApi.md#expertiseProfileAssignmentAPIByEmployeeIdAndDateRange) | **GET** /v0/administration/employees/{employee_id}/expertise_profile_assignments | Return the expertise profile assignments of a Employee corresponding to the given id.
[**expertiseProfileAssignmentAPIByEmployeeIds**](ExpertiseProfileAssignmentApi.md#expertiseProfileAssignmentAPIByEmployeeIds) | **GET** /v0/administration/expertise_profile_assignments/by_employee_ids | Return all the expertise profile assignments for a list of employees.
[**expertiseProfileAssignmentAPIById**](ExpertiseProfileAssignmentApi.md#expertiseProfileAssignmentAPIById) | **GET** /v0/administration/expertise_profile_assignments/{id} | Return the expertise profile assignment corresponding to the given id.
[**expertiseProfileAssignmentAPIDeleteById**](ExpertiseProfileAssignmentApi.md#expertiseProfileAssignmentAPIDeleteById) | **DELETE** /v0/administration/expertise_profile_assignments/{id} | Deletes the expertise profile assignment corresponding to the given id.
[**expertiseProfileAssignmentAPIMultiple**](ExpertiseProfileAssignmentApi.md#expertiseProfileAssignmentAPIMultiple) | **GET** /v0/administration/expertise_profile_assignments/multiple | Method used for requesting multiple ExpertiseProfileAssignment objects using their ids.
[**expertiseProfileAssignmentAPIStreamAll**](ExpertiseProfileAssignmentApi.md#expertiseProfileAssignmentAPIStreamAll) | **GET** /v0/xstream/expertise_profile_assignments/data | Return all ExpertiseProfileAssignment models in a streaming manner
[**expertiseProfileAssignmentAPIStreamUpdates**](ExpertiseProfileAssignmentApi.md#expertiseProfileAssignmentAPIStreamUpdates) | **GET** /v0/xstream/expertise_profile_assignments/updates | Return all ExpertiseProfileAssignment models which where updated since the date given in the request.
[**expertiseProfileAssignmentAPIUpdateById**](ExpertiseProfileAssignmentApi.md#expertiseProfileAssignmentAPIUpdateById) | **PUT** /v0/administration/expertise_profile_assignments/{id} | Update the expertise profile assignment corresponding to the given id.

<a name="expertiseProfileAssignmentAPIAssignExpertiseProfileToEmployee"></a>
# **expertiseProfileAssignmentAPIAssignExpertiseProfileToEmployee**
> ExpertiseProfileAssignment expertiseProfileAssignmentAPIAssignExpertiseProfileToEmployee(body, employeeId)

Create new expertise profile assignment for the Employee corresponding to the given employee_id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpertiseProfileAssignmentApi();
let body = new NedapOnsApi.ExpertiseProfileAssignmentUpdateModel(); // ExpertiseProfileAssignmentUpdateModel | 
let employeeId = 789; // Number | employee id

apiInstance.expertiseProfileAssignmentAPIAssignExpertiseProfileToEmployee(body, employeeId, (error, data, response) => {
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
 **body** | [**ExpertiseProfileAssignmentUpdateModel**](ExpertiseProfileAssignmentUpdateModel.md)|  | 
 **employeeId** | **Number**| employee id | 

### Return type

[**ExpertiseProfileAssignment**](ExpertiseProfileAssignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="expertiseProfileAssignmentAPIByEmployeeIdAndDateRange"></a>
# **expertiseProfileAssignmentAPIByEmployeeIdAndDateRange**
> ListExpertiseProfileAssignmentList expertiseProfileAssignmentAPIByEmployeeIdAndDateRange(employeeId, opts)

Return the expertise profile assignments of a Employee corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpertiseProfileAssignmentApi();
let employeeId = 789; // Number | 
let opts = { 
  'validFrom': new Date("2013-10-20"), // Date | 
  'validTo': new Date("2013-10-20") // Date | 
};
apiInstance.expertiseProfileAssignmentAPIByEmployeeIdAndDateRange(employeeId, opts, (error, data, response) => {
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
 **validFrom** | **Date**|  | [optional] 
 **validTo** | **Date**|  | [optional] 

### Return type

[**ListExpertiseProfileAssignmentList**](ListExpertiseProfileAssignmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="expertiseProfileAssignmentAPIByEmployeeIds"></a>
# **expertiseProfileAssignmentAPIByEmployeeIds**
> ListExpertiseProfileAssignmentList expertiseProfileAssignmentAPIByEmployeeIds(id, opts)

Return all the expertise profile assignments for a list of employees.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpertiseProfileAssignmentApi();
let id = [3.4]; // [Number] | array style id's: id=1&id=2&etc, contains a list of employee object ids
let opts = { 
  'beginDate': new Date("2013-10-20"), // Date | the begin date, used as a filter to return only expertise profile assignments for the specified period
  'endDate': new Date("2013-10-20") // Date | the end date, used as a filter to return only expertise profile assignments for the specified period
};
apiInstance.expertiseProfileAssignmentAPIByEmployeeIds(id, opts, (error, data, response) => {
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
 **id** | [**[Number]**](Number.md)| array style id&#x27;s: id&#x3D;1&amp;id&#x3D;2&amp;etc, contains a list of employee object ids | 
 **beginDate** | **Date**| the begin date, used as a filter to return only expertise profile assignments for the specified period | [optional] 
 **endDate** | **Date**| the end date, used as a filter to return only expertise profile assignments for the specified period | [optional] 

### Return type

[**ListExpertiseProfileAssignmentList**](ListExpertiseProfileAssignmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="expertiseProfileAssignmentAPIById"></a>
# **expertiseProfileAssignmentAPIById**
> ExpertiseProfileAssignment expertiseProfileAssignmentAPIById(id)

Return the expertise profile assignment corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpertiseProfileAssignmentApi();
let id = 789; // Number | used for selecting ExpertiseProfileAssignment

apiInstance.expertiseProfileAssignmentAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting ExpertiseProfileAssignment | 

### Return type

[**ExpertiseProfileAssignment**](ExpertiseProfileAssignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="expertiseProfileAssignmentAPIDeleteById"></a>
# **expertiseProfileAssignmentAPIDeleteById**
> expertiseProfileAssignmentAPIDeleteById(id)

Deletes the expertise profile assignment corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpertiseProfileAssignmentApi();
let id = 789; // Number | used for selecting ExpertiseProfileAssignment

apiInstance.expertiseProfileAssignmentAPIDeleteById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting ExpertiseProfileAssignment | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="expertiseProfileAssignmentAPIMultiple"></a>
# **expertiseProfileAssignmentAPIMultiple**
> ListExpertiseProfileAssignmentList expertiseProfileAssignmentAPIMultiple(opts)

Method used for requesting multiple ExpertiseProfileAssignment objects using their ids.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpertiseProfileAssignmentApi();
let opts = { 
  'id': [3.4] // [Number] | array style id's: id=1&id=2&etc
};
apiInstance.expertiseProfileAssignmentAPIMultiple(opts, (error, data, response) => {
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

[**ListExpertiseProfileAssignmentList**](ListExpertiseProfileAssignmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="expertiseProfileAssignmentAPIStreamAll"></a>
# **expertiseProfileAssignmentAPIStreamAll**
> ListExpertiseProfileAssignmentList expertiseProfileAssignmentAPIStreamAll()

Return all ExpertiseProfileAssignment models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpertiseProfileAssignmentApi();
apiInstance.expertiseProfileAssignmentAPIStreamAll((error, data, response) => {
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

[**ListExpertiseProfileAssignmentList**](ListExpertiseProfileAssignmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="expertiseProfileAssignmentAPIStreamUpdates"></a>
# **expertiseProfileAssignmentAPIStreamUpdates**
> ListExpertiseProfileAssignmentList expertiseProfileAssignmentAPIStreamUpdates(since)

Return all ExpertiseProfileAssignment models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpertiseProfileAssignmentApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.expertiseProfileAssignmentAPIStreamUpdates(since, (error, data, response) => {
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

[**ListExpertiseProfileAssignmentList**](ListExpertiseProfileAssignmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="expertiseProfileAssignmentAPIUpdateById"></a>
# **expertiseProfileAssignmentAPIUpdateById**
> ExpertiseProfileAssignment expertiseProfileAssignmentAPIUpdateById(body, id)

Update the expertise profile assignment corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpertiseProfileAssignmentApi();
let body = new NedapOnsApi.ExpertiseProfileAssignmentUpdateModel(); // ExpertiseProfileAssignmentUpdateModel | 
let id = 789; // Number | used for selecting ExpertiseProfileAssignment

apiInstance.expertiseProfileAssignmentAPIUpdateById(body, id, (error, data, response) => {
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
 **body** | [**ExpertiseProfileAssignmentUpdateModel**](ExpertiseProfileAssignmentUpdateModel.md)|  | 
 **id** | **Number**| used for selecting ExpertiseProfileAssignment | 

### Return type

[**ExpertiseProfileAssignment**](ExpertiseProfileAssignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

