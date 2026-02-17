# NedapOnsApi.DossierRestrictiveMeasureCarePlanEntryApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierRestrictiveMeasureCarePlanEntryAPIByClientId**](DossierRestrictiveMeasureCarePlanEntryApi.md#dossierRestrictiveMeasureCarePlanEntryAPIByClientId) | **GET** /v0/dossier/back_channel/unauthorized/clients/{client_id}/care_plan/restrictive_measures | Return the restrictive measure care plan entries of a Client corresponding to the given id.
[**dossierRestrictiveMeasureCarePlanEntryAPIById**](DossierRestrictiveMeasureCarePlanEntryApi.md#dossierRestrictiveMeasureCarePlanEntryAPIById) | **GET** /v0/dossier/back_channel/unauthorized/care_plan/restrictive_measures/{id} | Find restrictive measure care plan entry
[**dossierRestrictiveMeasureCarePlanEntryAPICreate**](DossierRestrictiveMeasureCarePlanEntryApi.md#dossierRestrictiveMeasureCarePlanEntryAPICreate) | **POST** /v0/dossier/back_channel/unauthorized/care_plan/restrictive_measures | Create RestrictiveMeasureCarePlanEntry
[**dossierRestrictiveMeasureCarePlanEntryAPIDelete**](DossierRestrictiveMeasureCarePlanEntryApi.md#dossierRestrictiveMeasureCarePlanEntryAPIDelete) | **DELETE** /v0/dossier/back_channel/unauthorized/care_plan/restrictive_measures/{id} | Deletes restrictive measure care plan entry by ID.
[**dossierRestrictiveMeasureCarePlanEntryAPIPatch**](DossierRestrictiveMeasureCarePlanEntryApi.md#dossierRestrictiveMeasureCarePlanEntryAPIPatch) | **PATCH** /v0/dossier/back_channel/unauthorized/care_plan/restrictive_measures/{id} | Patches RestrictiveMeasureCarePlanEntry with given id
[**dossierRestrictiveMeasureCarePlanEntryAPIUpdate**](DossierRestrictiveMeasureCarePlanEntryApi.md#dossierRestrictiveMeasureCarePlanEntryAPIUpdate) | **PUT** /v0/dossier/back_channel/unauthorized/care_plan/restrictive_measures/{id} | Updates the given RestrictiveMeasureCarePlanEntry

<a name="dossierRestrictiveMeasureCarePlanEntryAPIByClientId"></a>
# **dossierRestrictiveMeasureCarePlanEntryAPIByClientId**
> DossierListRestrictiveMeasureCarePlanEntryList dossierRestrictiveMeasureCarePlanEntryAPIByClientId(clientId)

Return the restrictive measure care plan entries of a Client corresponding to the given id.

Finds the restrictive measure care plan entries of a client by the client id. Returns an empty array when client is not found.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierRestrictiveMeasureCarePlanEntryApi();
let clientId = 789; // Number | Client id

apiInstance.dossierRestrictiveMeasureCarePlanEntryAPIByClientId(clientId, (error, data, response) => {
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
 **clientId** | **Number**| Client id | 

### Return type

[**DossierListRestrictiveMeasureCarePlanEntryList**](DossierListRestrictiveMeasureCarePlanEntryList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierRestrictiveMeasureCarePlanEntryAPIById"></a>
# **dossierRestrictiveMeasureCarePlanEntryAPIById**
> DossierRestrictiveMeasureCarePlanEntry dossierRestrictiveMeasureCarePlanEntryAPIById(id)

Find restrictive measure care plan entry

Find restrictive measure care plan entry

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierRestrictiveMeasureCarePlanEntryApi();
let id = 789; // Number | used for selecting RestrictiveMeasureCarePlanEntry

apiInstance.dossierRestrictiveMeasureCarePlanEntryAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting RestrictiveMeasureCarePlanEntry | 

### Return type

[**DossierRestrictiveMeasureCarePlanEntry**](DossierRestrictiveMeasureCarePlanEntry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierRestrictiveMeasureCarePlanEntryAPICreate"></a>
# **dossierRestrictiveMeasureCarePlanEntryAPICreate**
> DossierRestrictiveMeasureCarePlanEntry dossierRestrictiveMeasureCarePlanEntryAPICreate(body)

Create RestrictiveMeasureCarePlanEntry

Creates restrictive measure care plan entry. Client external id cannot be blank. Returns 500 for invalid date with xml and sets invalid date to nil for json.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierRestrictiveMeasureCarePlanEntryApi();
let body = new NedapOnsApi.DossierRestrictiveMeasureCarePlanEntry(); // DossierRestrictiveMeasureCarePlanEntry | RestrictiveMeasureCarePlanEntry to create

apiInstance.dossierRestrictiveMeasureCarePlanEntryAPICreate(body, (error, data, response) => {
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
 **body** | [**DossierRestrictiveMeasureCarePlanEntry**](DossierRestrictiveMeasureCarePlanEntry.md)| RestrictiveMeasureCarePlanEntry to create | 

### Return type

[**DossierRestrictiveMeasureCarePlanEntry**](DossierRestrictiveMeasureCarePlanEntry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierRestrictiveMeasureCarePlanEntryAPIDelete"></a>
# **dossierRestrictiveMeasureCarePlanEntryAPIDelete**
> dossierRestrictiveMeasureCarePlanEntryAPIDelete(id)

Deletes restrictive measure care plan entry by ID.

Deletes the restrictive measure care plan entry for the given ID.&lt;p&gt; NOTE: This operation permanently removes the restrictive measure care plan entry and all associated data including registrations, entries, evaluations and expertise documents. This data is part of the export for the IGJ inspection. Deleting restrictive measure care plan entries before they have been properly exported may result in incomplete inspection data and potential compliance issues. Ensure all required exports have been completed before proceeding with deletion. Use with caution as this action cannot be undone.&lt;/p&gt;

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierRestrictiveMeasureCarePlanEntryApi();
let id = 789; // Number | Identifier of RestrictiveMeasureCarePlanEntry to delete.

apiInstance.dossierRestrictiveMeasureCarePlanEntryAPIDelete(id, (error, data, response) => {
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
 **id** | **Number**| Identifier of RestrictiveMeasureCarePlanEntry to delete. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierRestrictiveMeasureCarePlanEntryAPIPatch"></a>
# **dossierRestrictiveMeasureCarePlanEntryAPIPatch**
> DossierRestrictiveMeasureCarePlanEntry dossierRestrictiveMeasureCarePlanEntryAPIPatch(body, id)

Patches RestrictiveMeasureCarePlanEntry with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierRestrictiveMeasureCarePlanEntryApi();
let body = new NedapOnsApi.DossierRestrictiveMeasureCarePlanEntry(); // DossierRestrictiveMeasureCarePlanEntry | 
let id = 789; // Number | 

apiInstance.dossierRestrictiveMeasureCarePlanEntryAPIPatch(body, id, (error, data, response) => {
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
 **body** | [**DossierRestrictiveMeasureCarePlanEntry**](DossierRestrictiveMeasureCarePlanEntry.md)|  | 
 **id** | **Number**|  | 

### Return type

[**DossierRestrictiveMeasureCarePlanEntry**](DossierRestrictiveMeasureCarePlanEntry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierRestrictiveMeasureCarePlanEntryAPIUpdate"></a>
# **dossierRestrictiveMeasureCarePlanEntryAPIUpdate**
> DossierRestrictiveMeasureCarePlanEntry dossierRestrictiveMeasureCarePlanEntryAPIUpdate(body, id)

Updates the given RestrictiveMeasureCarePlanEntry

Update restrictive measure care plan entry

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierRestrictiveMeasureCarePlanEntryApi();
let body = new NedapOnsApi.DossierRestrictiveMeasureCarePlanEntry(); // DossierRestrictiveMeasureCarePlanEntry | RestrictiveMeasureCarePlanEntry to update
let id = 789; // Number | used for selecting RestrictiveMeasureCarePlanEntry

apiInstance.dossierRestrictiveMeasureCarePlanEntryAPIUpdate(body, id, (error, data, response) => {
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
 **body** | [**DossierRestrictiveMeasureCarePlanEntry**](DossierRestrictiveMeasureCarePlanEntry.md)| RestrictiveMeasureCarePlanEntry to update | 
 **id** | **Number**| used for selecting RestrictiveMeasureCarePlanEntry | 

### Return type

[**DossierRestrictiveMeasureCarePlanEntry**](DossierRestrictiveMeasureCarePlanEntry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

