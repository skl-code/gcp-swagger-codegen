# NedapOnsApi.DossierGoalApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierGoalAPIByDemandId**](DossierGoalApi.md#dossierGoalAPIByDemandId) | **GET** /v0/administration/dossier/demands/{demand_id}/goals | Return the Goals of a Demand corresponding to the given id.
[**dossierGoalAPIByDomainId**](DossierGoalApi.md#dossierGoalAPIByDomainId) | **GET** /v0/administration/dossier/domains/{domain_id}/goals | Return the Goals of a Domain corresponding to the given id.
[**dossierGoalAPIById**](DossierGoalApi.md#dossierGoalAPIById) | **GET** /v0/administration/dossier/goals/{id} | Get a resource by its ID
[**dossierGoalAPICreate**](DossierGoalApi.md#dossierGoalAPICreate) | **POST** /v0/administration/dossier/goals | Create Goal
[**dossierGoalAPIDelete**](DossierGoalApi.md#dossierGoalAPIDelete) | **DELETE** /v0/administration/dossier/goals/{id} | Deletes the Goal with given id
[**dossierGoalAPIMultiple**](DossierGoalApi.md#dossierGoalAPIMultiple) | **GET** /v0/administration/dossier/goals/multiple | Method used for requesting multiple Goal objects using their ids.
[**dossierGoalAPISearch**](DossierGoalApi.md#dossierGoalAPISearch) | **GET** /v0/administration/dossier/goals/search | Returns the Goals which meet the search criteria.
[**dossierGoalAPIUpdate**](DossierGoalApi.md#dossierGoalAPIUpdate) | **PUT** /v0/administration/dossier/goals/{id} | Updates the given Goal

<a name="dossierGoalAPIByDemandId"></a>
# **dossierGoalAPIByDemandId**
> DossierListGoalList dossierGoalAPIByDemandId(demandId)

Return the Goals of a Demand corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierGoalApi();
let demandId = 789; // Number | 

apiInstance.dossierGoalAPIByDemandId(demandId, (error, data, response) => {
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
 **demandId** | **Number**|  | 

### Return type

[**DossierListGoalList**](DossierListGoalList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierGoalAPIByDomainId"></a>
# **dossierGoalAPIByDomainId**
> DossierListGoalList dossierGoalAPIByDomainId(domainId)

Return the Goals of a Domain corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierGoalApi();
let domainId = 789; // Number | 

apiInstance.dossierGoalAPIByDomainId(domainId, (error, data, response) => {
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
 **domainId** | **Number**|  | 

### Return type

[**DossierListGoalList**](DossierListGoalList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierGoalAPIById"></a>
# **dossierGoalAPIById**
> DossierGoal dossierGoalAPIById(id, opts)

Get a resource by its ID

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierGoalApi();
let id = 789; // Number | used for selecting Goal
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierGoalAPIById(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting Goal | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierGoal**](DossierGoal.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierGoalAPICreate"></a>
# **dossierGoalAPICreate**
> DossierGoal dossierGoalAPICreate(body)

Create Goal

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierGoalApi();
let body = new NedapOnsApi.DossierGoal(); // DossierGoal | Goal to create

apiInstance.dossierGoalAPICreate(body, (error, data, response) => {
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
 **body** | [**DossierGoal**](DossierGoal.md)| Goal to create | 

### Return type

[**DossierGoal**](DossierGoal.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierGoalAPIDelete"></a>
# **dossierGoalAPIDelete**
> dossierGoalAPIDelete(id, opts)

Deletes the Goal with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierGoalApi();
let id = 789; // Number | used for selecting Goal
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierGoalAPIDelete(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting Goal | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="dossierGoalAPIMultiple"></a>
# **dossierGoalAPIMultiple**
> DossierListGoalList dossierGoalAPIMultiple(opts)

Method used for requesting multiple Goal objects using their ids.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierGoalApi();
let opts = { 
  'id': [3.4], // [Number] | array style id's: id=1&id=2&etc
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierGoalAPIMultiple(opts, (error, data, response) => {
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

[**DossierListGoalList**](DossierListGoalList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierGoalAPISearch"></a>
# **dossierGoalAPISearch**
> DossierListGoalList dossierGoalAPISearch(opts)

Returns the Goals which meet the search criteria.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierGoalApi();
let opts = { 
  'keyword': "keyword_example", // String | 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierGoalAPISearch(opts, (error, data, response) => {
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
 **keyword** | **String**|  | [optional] 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierListGoalList**](DossierListGoalList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierGoalAPIUpdate"></a>
# **dossierGoalAPIUpdate**
> DossierGoal dossierGoalAPIUpdate(body, id, opts)

Updates the given Goal

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierGoalApi();
let body = new NedapOnsApi.DossierGoal(); // DossierGoal | Goal to update
let id = 789; // Number | used for selecting Goal
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierGoalAPIUpdate(body, id, opts, (error, data, response) => {
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
 **body** | [**DossierGoal**](DossierGoal.md)| Goal to update | 
 **id** | **Number**| used for selecting Goal | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierGoal**](DossierGoal.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

