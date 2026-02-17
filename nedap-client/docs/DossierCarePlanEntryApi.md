# NedapOnsApi.DossierCarePlanEntryApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierCarePlanEntryAPIByCarePlanId**](DossierCarePlanEntryApi.md#dossierCarePlanEntryAPIByCarePlanId) | **GET** /v0/administration/dossier/care_plans/{care_plan_id}/entries | Return the CarePlanEntries of a CarePlan corresponding to the given id.
[**dossierCarePlanEntryAPIById**](DossierCarePlanEntryApi.md#dossierCarePlanEntryAPIById) | **GET** /v0/administration/dossier/care_plan_entries/{id} | Get a resource by its ID
[**dossierCarePlanEntryAPICreate**](DossierCarePlanEntryApi.md#dossierCarePlanEntryAPICreate) | **POST** /v0/administration/dossier/care_plan_entries | Create CarePlanEntry
[**dossierCarePlanEntryAPICreateEntry**](DossierCarePlanEntryApi.md#dossierCarePlanEntryAPICreateEntry) | **POST** /v0/administration/dossier/care_plan_entries/create | Create a Care Plan Entry
[**dossierCarePlanEntryAPIDelete**](DossierCarePlanEntryApi.md#dossierCarePlanEntryAPIDelete) | **DELETE** /v0/administration/dossier/care_plan_entries/{id} | Deletes the CarePlanEntry with given id
[**dossierCarePlanEntryAPIUpdate**](DossierCarePlanEntryApi.md#dossierCarePlanEntryAPIUpdate) | **PUT** /v0/administration/dossier/care_plan_entries/{id} | Updates the given CarePlanEntry

<a name="dossierCarePlanEntryAPIByCarePlanId"></a>
# **dossierCarePlanEntryAPIByCarePlanId**
> DossierListCarePlanEntryList dossierCarePlanEntryAPIByCarePlanId(carePlanId)

Return the CarePlanEntries of a CarePlan corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierCarePlanEntryApi();
let carePlanId = 789; // Number | 

apiInstance.dossierCarePlanEntryAPIByCarePlanId(carePlanId, (error, data, response) => {
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
 **carePlanId** | **Number**|  | 

### Return type

[**DossierListCarePlanEntryList**](DossierListCarePlanEntryList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierCarePlanEntryAPIById"></a>
# **dossierCarePlanEntryAPIById**
> DossierCarePlanEntry dossierCarePlanEntryAPIById(id, opts)

Get a resource by its ID

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierCarePlanEntryApi();
let id = 789; // Number | used for selecting CarePlanEntry
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierCarePlanEntryAPIById(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting CarePlanEntry | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierCarePlanEntry**](DossierCarePlanEntry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierCarePlanEntryAPICreate"></a>
# **dossierCarePlanEntryAPICreate**
> DossierCarePlanEntry dossierCarePlanEntryAPICreate(body)

Create CarePlanEntry

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierCarePlanEntryApi();
let body = new NedapOnsApi.DossierCarePlanEntry(); // DossierCarePlanEntry | Creates a new CarePlanEntry. Important: This endpoint only creates the CarePlanEntry. Linked entries (DemandEntry, GoalEntry, ActionEntries) must be created via their respective endpoints.

apiInstance.dossierCarePlanEntryAPICreate(body, (error, data, response) => {
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
 **body** | [**DossierCarePlanEntry**](DossierCarePlanEntry.md)| Creates a new CarePlanEntry. Important: This endpoint only creates the CarePlanEntry. Linked entries (DemandEntry, GoalEntry, ActionEntries) must be created via their respective endpoints. | 

### Return type

[**DossierCarePlanEntry**](DossierCarePlanEntry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierCarePlanEntryAPICreateEntry"></a>
# **dossierCarePlanEntryAPICreateEntry**
> DossierCarePlanEntry dossierCarePlanEntryAPICreateEntry(body, opts)

Create a Care Plan Entry

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierCarePlanEntryApi();
let body = new NedapOnsApi.DossierCreateCarePlanEntry(); // DossierCreateCarePlanEntry | 
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierCarePlanEntryAPICreateEntry(body, opts, (error, data, response) => {
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
 **body** | [**DossierCreateCarePlanEntry**](DossierCreateCarePlanEntry.md)|  | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierCarePlanEntry**](DossierCarePlanEntry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierCarePlanEntryAPIDelete"></a>
# **dossierCarePlanEntryAPIDelete**
> dossierCarePlanEntryAPIDelete(id, opts)

Deletes the CarePlanEntry with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierCarePlanEntryApi();
let id = 789; // Number | used for selecting CarePlanEntry
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierCarePlanEntryAPIDelete(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting CarePlanEntry | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="dossierCarePlanEntryAPIUpdate"></a>
# **dossierCarePlanEntryAPIUpdate**
> DossierCarePlanEntry dossierCarePlanEntryAPIUpdate(body, id, opts)

Updates the given CarePlanEntry

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierCarePlanEntryApi();
let body = new NedapOnsApi.DossierCarePlanEntry(); // DossierCarePlanEntry | CarePlanEntry to update
let id = 789; // Number | used for selecting CarePlanEntry
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierCarePlanEntryAPIUpdate(body, id, opts, (error, data, response) => {
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
 **body** | [**DossierCarePlanEntry**](DossierCarePlanEntry.md)| CarePlanEntry to update | 
 **id** | **Number**| used for selecting CarePlanEntry | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierCarePlanEntry**](DossierCarePlanEntry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

