# NedapOnsApi.ExpertiseProfileApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**expertiseProfileAPIAll**](ExpertiseProfileApi.md#expertiseProfileAPIAll) | **GET** /v0/administration/expertise_profiles | Returns every ExpertiseProfile available from the ExpertiseProfileAPI
[**expertiseProfileAPIByEmployeeId**](ExpertiseProfileApi.md#expertiseProfileAPIByEmployeeId) | **GET** /v0/administration/employees/{employee_id}/expertise_profiles | Return the expertise profiles of a Employee corresponding to the given id between the given dates.
[**expertiseProfileAPIById**](ExpertiseProfileApi.md#expertiseProfileAPIById) | **GET** /v0/administration/expertise_profiles/{id} | Return the Expertise Profile corresponding to the given id
[**expertiseProfileAPIMultiple**](ExpertiseProfileApi.md#expertiseProfileAPIMultiple) | **GET** /v0/administration/expertise_profiles/multiple | Method used for requesting multiple ExpertiseProfile objects using their ids.
[**expertiseProfileAPIStreamAll**](ExpertiseProfileApi.md#expertiseProfileAPIStreamAll) | **GET** /v0/xstream/educations/data | Return all ExpertiseProfile models in a streaming manner
[**expertiseProfileAPIStreamUpdates**](ExpertiseProfileApi.md#expertiseProfileAPIStreamUpdates) | **GET** /v0/xstream/educations/updates | Return all ExpertiseProfile models which where updated since the date given in the request.

<a name="expertiseProfileAPIAll"></a>
# **expertiseProfileAPIAll**
> ListExpertiseProfileList expertiseProfileAPIAll()

Returns every ExpertiseProfile available from the ExpertiseProfileAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpertiseProfileApi();
apiInstance.expertiseProfileAPIAll((error, data, response) => {
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

[**ListExpertiseProfileList**](ListExpertiseProfileList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="expertiseProfileAPIByEmployeeId"></a>
# **expertiseProfileAPIByEmployeeId**
> ListExpertiseProfileList expertiseProfileAPIByEmployeeId(employeeId, opts)

Return the expertise profiles of a Employee corresponding to the given id between the given dates.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpertiseProfileApi();
let employeeId = 789; // Number | id
let opts = { 
  'validFrom': new Date("2013-10-20"), // Date | 
  'validTo': new Date("2013-10-20") // Date | 
};
apiInstance.expertiseProfileAPIByEmployeeId(employeeId, opts, (error, data, response) => {
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

[**ListExpertiseProfileList**](ListExpertiseProfileList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="expertiseProfileAPIById"></a>
# **expertiseProfileAPIById**
> ExpertiseProfile expertiseProfileAPIById(id)

Return the Expertise Profile corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpertiseProfileApi();
let id = 789; // Number | used for selecting ExpertiseProfile

apiInstance.expertiseProfileAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting ExpertiseProfile | 

### Return type

[**ExpertiseProfile**](ExpertiseProfile.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="expertiseProfileAPIMultiple"></a>
# **expertiseProfileAPIMultiple**
> ListExpertiseProfileList expertiseProfileAPIMultiple(opts)

Method used for requesting multiple ExpertiseProfile objects using their ids.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpertiseProfileApi();
let opts = { 
  'id': [3.4] // [Number] | array style id's: id=1&id=2&etc
};
apiInstance.expertiseProfileAPIMultiple(opts, (error, data, response) => {
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

[**ListExpertiseProfileList**](ListExpertiseProfileList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="expertiseProfileAPIStreamAll"></a>
# **expertiseProfileAPIStreamAll**
> ListExpertiseProfileList expertiseProfileAPIStreamAll()

Return all ExpertiseProfile models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpertiseProfileApi();
apiInstance.expertiseProfileAPIStreamAll((error, data, response) => {
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

[**ListExpertiseProfileList**](ListExpertiseProfileList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="expertiseProfileAPIStreamUpdates"></a>
# **expertiseProfileAPIStreamUpdates**
> ListExpertiseProfileList expertiseProfileAPIStreamUpdates(since)

Return all ExpertiseProfile models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ExpertiseProfileApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.expertiseProfileAPIStreamUpdates(since, (error, data, response) => {
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

[**ListExpertiseProfileList**](ListExpertiseProfileList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

