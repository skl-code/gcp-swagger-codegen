# NedapOnsApi.DossierMedicalPropensityToAdverseReactionApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierMedicalPropensityToAdverseReactionAPIByClientId**](DossierMedicalPropensityToAdverseReactionApi.md#dossierMedicalPropensityToAdverseReactionAPIByClientId) | **GET** /v0/dossier/back_channel/authorized/clients/{client_id}/medical/propensities_to_adverse_reaction | Returns allergies of the given client corresponding to the given id.
[**dossierMedicalPropensityToAdverseReactionAPIById**](DossierMedicalPropensityToAdverseReactionApi.md#dossierMedicalPropensityToAdverseReactionAPIById) | **GET** /v0/dossier/back_channel/authorized/medical/propensities_to_adverse_reaction/{id} | Returns allergy of the given client corresponding to the given id.
[**dossierMedicalPropensityToAdverseReactionAPICreate**](DossierMedicalPropensityToAdverseReactionApi.md#dossierMedicalPropensityToAdverseReactionAPICreate) | **POST** /v0/dossier/back_channel/authorized/medical/propensities_to_adverse_reaction | Creates allergy or propensity to adverse reaction of the given client
[**dossierMedicalPropensityToAdverseReactionAPIDelete**](DossierMedicalPropensityToAdverseReactionApi.md#dossierMedicalPropensityToAdverseReactionAPIDelete) | **DELETE** /v0/dossier/back_channel/authorized/medical/propensities_to_adverse_reaction/{id} | Deletes allergy of the given client corresponding to the given id.
[**dossierMedicalPropensityToAdverseReactionAPIUpdate**](DossierMedicalPropensityToAdverseReactionApi.md#dossierMedicalPropensityToAdverseReactionAPIUpdate) | **PUT** /v0/dossier/back_channel/authorized/medical/propensities_to_adverse_reaction/{id} | Updates allergy or propensity to adverse reaction of the given client

<a name="dossierMedicalPropensityToAdverseReactionAPIByClientId"></a>
# **dossierMedicalPropensityToAdverseReactionAPIByClientId**
> DossierMedicalListPropensityToAdverseReactionList dossierMedicalPropensityToAdverseReactionAPIByClientId(clientId)

Returns allergies of the given client corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalPropensityToAdverseReactionApi();
let clientId = 789; // Number | client_id

apiInstance.dossierMedicalPropensityToAdverseReactionAPIByClientId(clientId, (error, data, response) => {
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
 **clientId** | **Number**| client_id | 

### Return type

[**DossierMedicalListPropensityToAdverseReactionList**](DossierMedicalListPropensityToAdverseReactionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierMedicalPropensityToAdverseReactionAPIById"></a>
# **dossierMedicalPropensityToAdverseReactionAPIById**
> DossierMedicalPropensityToAdverseReaction dossierMedicalPropensityToAdverseReactionAPIById(id)

Returns allergy of the given client corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalPropensityToAdverseReactionApi();
let id = 789; // Number | id

apiInstance.dossierMedicalPropensityToAdverseReactionAPIById(id, (error, data, response) => {
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
 **id** | **Number**| id | 

### Return type

[**DossierMedicalPropensityToAdverseReaction**](DossierMedicalPropensityToAdverseReaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierMedicalPropensityToAdverseReactionAPICreate"></a>
# **dossierMedicalPropensityToAdverseReactionAPICreate**
> DossierMedicalPropensityToAdverseReaction dossierMedicalPropensityToAdverseReactionAPICreate(body)

Creates allergy or propensity to adverse reaction of the given client

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalPropensityToAdverseReactionApi();
let body = new NedapOnsApi.DossierMedicalPropensityToAdverseReaction(); // DossierMedicalPropensityToAdverseReaction | Allergy or propensity to adverse reaction to create

apiInstance.dossierMedicalPropensityToAdverseReactionAPICreate(body, (error, data, response) => {
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
 **body** | [**DossierMedicalPropensityToAdverseReaction**](DossierMedicalPropensityToAdverseReaction.md)| Allergy or propensity to adverse reaction to create | 

### Return type

[**DossierMedicalPropensityToAdverseReaction**](DossierMedicalPropensityToAdverseReaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierMedicalPropensityToAdverseReactionAPIDelete"></a>
# **dossierMedicalPropensityToAdverseReactionAPIDelete**
> dossierMedicalPropensityToAdverseReactionAPIDelete(id)

Deletes allergy of the given client corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalPropensityToAdverseReactionApi();
let id = 789; // Number | id

apiInstance.dossierMedicalPropensityToAdverseReactionAPIDelete(id, (error, data, response) => {
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
 **id** | **Number**| id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="dossierMedicalPropensityToAdverseReactionAPIUpdate"></a>
# **dossierMedicalPropensityToAdverseReactionAPIUpdate**
> DossierMedicalPropensityToAdverseReaction dossierMedicalPropensityToAdverseReactionAPIUpdate(body, id)

Updates allergy or propensity to adverse reaction of the given client

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalPropensityToAdverseReactionApi();
let body = new NedapOnsApi.DossierMedicalPropensityToAdverseReaction(); // DossierMedicalPropensityToAdverseReaction | Allergy or propensity to adverse reaction to update
let id = 789; // Number | id

apiInstance.dossierMedicalPropensityToAdverseReactionAPIUpdate(body, id, (error, data, response) => {
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
 **body** | [**DossierMedicalPropensityToAdverseReaction**](DossierMedicalPropensityToAdverseReaction.md)| Allergy or propensity to adverse reaction to update | 
 **id** | **Number**| id | 

### Return type

[**DossierMedicalPropensityToAdverseReaction**](DossierMedicalPropensityToAdverseReaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

