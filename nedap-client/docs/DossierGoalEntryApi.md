# NedapOnsApi.DossierGoalEntryApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierGoalEntryAPIById**](DossierGoalEntryApi.md#dossierGoalEntryAPIById) | **GET** /v0/administration/dossier/goal_entries/{id} | Get a resource by its ID
[**dossierGoalEntryAPICreate**](DossierGoalEntryApi.md#dossierGoalEntryAPICreate) | **POST** /v0/administration/dossier/goal_entries | Create GoalEntry
[**dossierGoalEntryAPIDelete**](DossierGoalEntryApi.md#dossierGoalEntryAPIDelete) | **DELETE** /v0/administration/dossier/goal_entries/{id} | Deletes the GoalEntry with given id
[**dossierGoalEntryAPIUpdate**](DossierGoalEntryApi.md#dossierGoalEntryAPIUpdate) | **PUT** /v0/administration/dossier/goal_entries/{id} | Updates the given GoalEntry

<a name="dossierGoalEntryAPIById"></a>
# **dossierGoalEntryAPIById**
> DossierGoalEntry dossierGoalEntryAPIById(id, opts)

Get a resource by its ID

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierGoalEntryApi();
let id = 789; // Number | used for selecting GoalEntry
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierGoalEntryAPIById(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting GoalEntry | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierGoalEntry**](DossierGoalEntry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierGoalEntryAPICreate"></a>
# **dossierGoalEntryAPICreate**
> DossierGoalEntry dossierGoalEntryAPICreate(body)

Create GoalEntry

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierGoalEntryApi();
let body = new NedapOnsApi.DossierGoalEntry(); // DossierGoalEntry | Creates a new GoalEntry. Important: This endpoint only creates the GoalEntry.The associated Goal must be present already and referenced by goalId.

apiInstance.dossierGoalEntryAPICreate(body, (error, data, response) => {
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
 **body** | [**DossierGoalEntry**](DossierGoalEntry.md)| Creates a new GoalEntry. Important: This endpoint only creates the GoalEntry.The associated Goal must be present already and referenced by goalId. | 

### Return type

[**DossierGoalEntry**](DossierGoalEntry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierGoalEntryAPIDelete"></a>
# **dossierGoalEntryAPIDelete**
> dossierGoalEntryAPIDelete(id, opts)

Deletes the GoalEntry with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierGoalEntryApi();
let id = 789; // Number | used for selecting GoalEntry
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierGoalEntryAPIDelete(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting GoalEntry | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="dossierGoalEntryAPIUpdate"></a>
# **dossierGoalEntryAPIUpdate**
> DossierGoalEntry dossierGoalEntryAPIUpdate(body, id, opts)

Updates the given GoalEntry

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierGoalEntryApi();
let body = new NedapOnsApi.DossierGoalEntry(); // DossierGoalEntry | GoalEntry to update
let id = 789; // Number | used for selecting GoalEntry
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierGoalEntryAPIUpdate(body, id, opts, (error, data, response) => {
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
 **body** | [**DossierGoalEntry**](DossierGoalEntry.md)| GoalEntry to update | 
 **id** | **Number**| used for selecting GoalEntry | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierGoalEntry**](DossierGoalEntry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

