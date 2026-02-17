# NedapOnsApi.DossierCarePlanApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierCarePlanAPIActivate**](DossierCarePlanApi.md#dossierCarePlanAPIActivate) | **POST** /v0/administration/dossier/care_plans/{id}/activate | Activate care plan
[**dossierCarePlanAPIActiveCarePlanByClientId**](DossierCarePlanApi.md#dossierCarePlanAPIActiveCarePlanByClientId) | **GET** /v0/administration/dossier/care_plans/by_client/{client_id}/active | Return the active care plan of a client corresponding to the given client id.
[**dossierCarePlanAPIArchive**](DossierCarePlanApi.md#dossierCarePlanAPIArchive) | **POST** /v0/administration/dossier/care_plans/{id}/archive | Archive care plan
[**dossierCarePlanAPIByClientId**](DossierCarePlanApi.md#dossierCarePlanAPIByClientId) | **GET** /v0/administration/dossier/care_plans/by_client/{client_id} | Return the care plans of a Client corresponding to the given id.
[**dossierCarePlanAPIById**](DossierCarePlanApi.md#dossierCarePlanAPIById) | **GET** /v0/administration/dossier/care_plans/{id} | Get the CarePlan corresponding to the given id
[**dossierCarePlanAPICreate**](DossierCarePlanApi.md#dossierCarePlanAPICreate) | **POST** /v0/administration/dossier/care_plans | Create CarePlan
[**dossierCarePlanAPIDelete**](DossierCarePlanApi.md#dossierCarePlanAPIDelete) | **DELETE** /v0/administration/dossier/care_plans/{id} | Deletes the CarePlan with given id
[**dossierCarePlanAPIDraftCarePlanByClientId**](DossierCarePlanApi.md#dossierCarePlanAPIDraftCarePlanByClientId) | **GET** /v0/administration/dossier/care_plans/by_client/{client_id}/draft | Return the draft care plan of a client corresponding to the given client id.
[**dossierCarePlanAPINewDraft**](DossierCarePlanApi.md#dossierCarePlanAPINewDraft) | **POST** /v0/administration/dossier/care_plans/by_client/{client_id}/new | Draft new care plan for client
[**dossierCarePlanAPIUpdate**](DossierCarePlanApi.md#dossierCarePlanAPIUpdate) | **PUT** /v0/administration/dossier/care_plans/{id} | Updates the given CarePlan

<a name="dossierCarePlanAPIActivate"></a>
# **dossierCarePlanAPIActivate**
> DossierCarePlan dossierCarePlanAPIActivate(id, opts)

Activate care plan

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierCarePlanApi();
let id = 789; // Number | 
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierCarePlanAPIActivate(id, opts, (error, data, response) => {
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
 **id** | **Number**|  | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierCarePlan**](DossierCarePlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierCarePlanAPIActiveCarePlanByClientId"></a>
# **dossierCarePlanAPIActiveCarePlanByClientId**
> DossierCarePlan dossierCarePlanAPIActiveCarePlanByClientId(clientId)

Return the active care plan of a client corresponding to the given client id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierCarePlanApi();
let clientId = 789; // Number | id

apiInstance.dossierCarePlanAPIActiveCarePlanByClientId(clientId, (error, data, response) => {
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

### Return type

[**DossierCarePlan**](DossierCarePlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierCarePlanAPIArchive"></a>
# **dossierCarePlanAPIArchive**
> DossierCarePlan dossierCarePlanAPIArchive(id, opts)

Archive care plan

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierCarePlanApi();
let id = 789; // Number | 
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierCarePlanAPIArchive(id, opts, (error, data, response) => {
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
 **id** | **Number**|  | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierCarePlan**](DossierCarePlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierCarePlanAPIByClientId"></a>
# **dossierCarePlanAPIByClientId**
> DossierListCarePlanList dossierCarePlanAPIByClientId(clientId)

Return the care plans of a Client corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierCarePlanApi();
let clientId = 789; // Number | id

apiInstance.dossierCarePlanAPIByClientId(clientId, (error, data, response) => {
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

### Return type

[**DossierListCarePlanList**](DossierListCarePlanList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierCarePlanAPIById"></a>
# **dossierCarePlanAPIById**
> DossierCarePlan dossierCarePlanAPIById(id, opts)

Get the CarePlan corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierCarePlanApi();
let id = 789; // Number | used for selecting CarePlan
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierCarePlanAPIById(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting CarePlan | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierCarePlan**](DossierCarePlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierCarePlanAPICreate"></a>
# **dossierCarePlanAPICreate**
> DossierCarePlan dossierCarePlanAPICreate(body)

Create CarePlan

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierCarePlanApi();
let body = new NedapOnsApi.DossierCarePlan(); // DossierCarePlan | Creates a new CarePlan. Important: This endpoint only creates the CarePlan object. Any nested elements such as CarePlanEntries, DemandEntries, GoalEntries, and ActionEntries must be created separately using their respective endpoints.

apiInstance.dossierCarePlanAPICreate(body, (error, data, response) => {
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
 **body** | [**DossierCarePlan**](DossierCarePlan.md)| Creates a new CarePlan. Important: This endpoint only creates the CarePlan object. Any nested elements such as CarePlanEntries, DemandEntries, GoalEntries, and ActionEntries must be created separately using their respective endpoints. | 

### Return type

[**DossierCarePlan**](DossierCarePlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierCarePlanAPIDelete"></a>
# **dossierCarePlanAPIDelete**
> dossierCarePlanAPIDelete(id, opts)

Deletes the CarePlan with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierCarePlanApi();
let id = 789; // Number | used for selecting CarePlan
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierCarePlanAPIDelete(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting CarePlan | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="dossierCarePlanAPIDraftCarePlanByClientId"></a>
# **dossierCarePlanAPIDraftCarePlanByClientId**
> DossierCarePlan dossierCarePlanAPIDraftCarePlanByClientId(clientId)

Return the draft care plan of a client corresponding to the given client id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierCarePlanApi();
let clientId = 789; // Number | id

apiInstance.dossierCarePlanAPIDraftCarePlanByClientId(clientId, (error, data, response) => {
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

### Return type

[**DossierCarePlan**](DossierCarePlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierCarePlanAPINewDraft"></a>
# **dossierCarePlanAPINewDraft**
> DossierCarePlan dossierCarePlanAPINewDraft(clientId, opts)

Draft new care plan for client

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierCarePlanApi();
let clientId = 789; // Number | id
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierCarePlanAPINewDraft(clientId, opts, (error, data, response) => {
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
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierCarePlan**](DossierCarePlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierCarePlanAPIUpdate"></a>
# **dossierCarePlanAPIUpdate**
> DossierCarePlan dossierCarePlanAPIUpdate(body, id, opts)

Updates the given CarePlan

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierCarePlanApi();
let body = new NedapOnsApi.DossierCarePlan(); // DossierCarePlan | CarePlan to update
let id = 789; // Number | used for selecting CarePlan
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierCarePlanAPIUpdate(body, id, opts, (error, data, response) => {
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
 **body** | [**DossierCarePlan**](DossierCarePlan.md)| CarePlan to update | 
 **id** | **Number**| used for selecting CarePlan | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierCarePlan**](DossierCarePlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

