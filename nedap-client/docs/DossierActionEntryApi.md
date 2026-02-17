# NedapOnsApi.DossierActionEntryApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierActionEntryAPIByCarePlanEntryId**](DossierActionEntryApi.md#dossierActionEntryAPIByCarePlanEntryId) | **GET** /v0/administration/dossier/care_plan_entries/{care_plan_entry_id}/action_entries | Return the ActionEntries of a CarePlanEntry corresponding to the given id.
[**dossierActionEntryAPICreate**](DossierActionEntryApi.md#dossierActionEntryAPICreate) | **POST** /v0/administration/dossier/action_entries | Create ActionEntry
[**dossierActionEntryAPIDelete**](DossierActionEntryApi.md#dossierActionEntryAPIDelete) | **DELETE** /v0/administration/dossier/action_entries/{id} | Deletes the ActionEntry with given id
[**dossierActionEntryAPIUpdate**](DossierActionEntryApi.md#dossierActionEntryAPIUpdate) | **PUT** /v0/administration/dossier/action_entries/{id} | Updates the given ActionEntry

<a name="dossierActionEntryAPIByCarePlanEntryId"></a>
# **dossierActionEntryAPIByCarePlanEntryId**
> DossierListActionEntryList dossierActionEntryAPIByCarePlanEntryId(carePlanEntryId)

Return the ActionEntries of a CarePlanEntry corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierActionEntryApi();
let carePlanEntryId = 789; // Number | 

apiInstance.dossierActionEntryAPIByCarePlanEntryId(carePlanEntryId, (error, data, response) => {
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
 **carePlanEntryId** | **Number**|  | 

### Return type

[**DossierListActionEntryList**](DossierListActionEntryList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierActionEntryAPICreate"></a>
# **dossierActionEntryAPICreate**
> DossierActionEntry dossierActionEntryAPICreate(body)

Create ActionEntry

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierActionEntryApi();
let body = new NedapOnsApi.DossierActionEntry(); // DossierActionEntry | Creates a new ActionEntry. Important: This endpoint only creates the ActionEntry. The associated Action must be present already and referenced by actionId.

apiInstance.dossierActionEntryAPICreate(body, (error, data, response) => {
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
 **body** | [**DossierActionEntry**](DossierActionEntry.md)| Creates a new ActionEntry. Important: This endpoint only creates the ActionEntry. The associated Action must be present already and referenced by actionId. | 

### Return type

[**DossierActionEntry**](DossierActionEntry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierActionEntryAPIDelete"></a>
# **dossierActionEntryAPIDelete**
> dossierActionEntryAPIDelete(id, opts)

Deletes the ActionEntry with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierActionEntryApi();
let id = 789; // Number | Identifier of ActionEntry to update.
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierActionEntryAPIDelete(id, opts, (error, data, response) => {
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
 **id** | **Number**| Identifier of ActionEntry to update. | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="dossierActionEntryAPIUpdate"></a>
# **dossierActionEntryAPIUpdate**
> DossierActionEntry dossierActionEntryAPIUpdate(body, id, opts)

Updates the given ActionEntry

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierActionEntryApi();
let body = new NedapOnsApi.DossierActionEntry(); // DossierActionEntry | ActionEntry to update
let id = 789; // Number | Identifier of ActionEntry to update.
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierActionEntryAPIUpdate(body, id, opts, (error, data, response) => {
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
 **body** | [**DossierActionEntry**](DossierActionEntry.md)| ActionEntry to update | 
 **id** | **Number**| Identifier of ActionEntry to update. | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierActionEntry**](DossierActionEntry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

