# NedapOnsApi.DossierActionApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierActionAPIByDomainId**](DossierActionApi.md#dossierActionAPIByDomainId) | **GET** /v0/administration/dossier/domains/{domain_id}/actions | Return the Actions of a Domain corresponding to the given id.
[**dossierActionAPIByGoalId**](DossierActionApi.md#dossierActionAPIByGoalId) | **GET** /v0/administration/dossier/goals/{goal_id}/actions | Return the Actions of a Goal corresponding to the given id.
[**dossierActionAPIById**](DossierActionApi.md#dossierActionAPIById) | **GET** /v0/administration/dossier/actions/{id} | Get a resource by its ID
[**dossierActionAPICreate**](DossierActionApi.md#dossierActionAPICreate) | **POST** /v0/administration/dossier/actions | Create Action
[**dossierActionAPIDelete**](DossierActionApi.md#dossierActionAPIDelete) | **DELETE** /v0/administration/dossier/actions/{id} | Deletes the Action with given id
[**dossierActionAPIMultiple**](DossierActionApi.md#dossierActionAPIMultiple) | **GET** /v0/administration/dossier/actions/multiple | Method used for requesting multiple Action objects using their ids.
[**dossierActionAPISearch**](DossierActionApi.md#dossierActionAPISearch) | **GET** /v0/administration/dossier/actions/search | Returns the Actions which meet the search criteria.
[**dossierActionAPIUpdate**](DossierActionApi.md#dossierActionAPIUpdate) | **PUT** /v0/administration/dossier/actions/{id} | Updates the given Action

<a name="dossierActionAPIByDomainId"></a>
# **dossierActionAPIByDomainId**
> DossierListActionList dossierActionAPIByDomainId(domainId)

Return the Actions of a Domain corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierActionApi();
let domainId = 789; // Number | 

apiInstance.dossierActionAPIByDomainId(domainId, (error, data, response) => {
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

[**DossierListActionList**](DossierListActionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierActionAPIByGoalId"></a>
# **dossierActionAPIByGoalId**
> DossierListActionList dossierActionAPIByGoalId(goalId)

Return the Actions of a Goal corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierActionApi();
let goalId = 789; // Number | 

apiInstance.dossierActionAPIByGoalId(goalId, (error, data, response) => {
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
 **goalId** | **Number**|  | 

### Return type

[**DossierListActionList**](DossierListActionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierActionAPIById"></a>
# **dossierActionAPIById**
> DossierAction dossierActionAPIById(id, opts)

Get a resource by its ID

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierActionApi();
let id = 789; // Number | used for selecting Action
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierActionAPIById(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting Action | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierAction**](DossierAction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierActionAPICreate"></a>
# **dossierActionAPICreate**
> DossierAction dossierActionAPICreate(body)

Create Action

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierActionApi();
let body = new NedapOnsApi.DossierAction(); // DossierAction | Action to create

apiInstance.dossierActionAPICreate(body, (error, data, response) => {
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
 **body** | [**DossierAction**](DossierAction.md)| Action to create | 

### Return type

[**DossierAction**](DossierAction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierActionAPIDelete"></a>
# **dossierActionAPIDelete**
> dossierActionAPIDelete(id, opts)

Deletes the Action with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierActionApi();
let id = 789; // Number | used for selecting Action
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierActionAPIDelete(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting Action | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="dossierActionAPIMultiple"></a>
# **dossierActionAPIMultiple**
> DossierListActionList dossierActionAPIMultiple(opts)

Method used for requesting multiple Action objects using their ids.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierActionApi();
let opts = { 
  'id': [3.4], // [Number] | array style id's: id=1&id=2&etc
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierActionAPIMultiple(opts, (error, data, response) => {
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

[**DossierListActionList**](DossierListActionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierActionAPISearch"></a>
# **dossierActionAPISearch**
> DossierListActionList dossierActionAPISearch(opts)

Returns the Actions which meet the search criteria.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierActionApi();
let opts = { 
  'keyword': "keyword_example", // String | 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierActionAPISearch(opts, (error, data, response) => {
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

[**DossierListActionList**](DossierListActionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierActionAPIUpdate"></a>
# **dossierActionAPIUpdate**
> DossierAction dossierActionAPIUpdate(body, id, opts)

Updates the given Action

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierActionApi();
let body = new NedapOnsApi.DossierAction(); // DossierAction | Action to update
let id = 789; // Number | used for selecting Action
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierActionAPIUpdate(body, id, opts, (error, data, response) => {
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
 **body** | [**DossierAction**](DossierAction.md)| Action to update | 
 **id** | **Number**| used for selecting Action | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierAction**](DossierAction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

