# NedapOnsApi.DossierMedicalAdvanceDirectivesContextApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierMedicalAdvanceDirectivesContextAPIByClientId**](DossierMedicalAdvanceDirectivesContextApi.md#dossierMedicalAdvanceDirectivesContextAPIByClientId) | **GET** /v0/dossier/back_channel/unauthorized/clients/{client_id}/medical/advance_directives/contexts | Return the contexts of a Client corresponding to the given id.
[**dossierMedicalAdvanceDirectivesContextAPICreate**](DossierMedicalAdvanceDirectivesContextApi.md#dossierMedicalAdvanceDirectivesContextAPICreate) | **POST** /v0/dossier/back_channel/unauthorized/medical/advance_directives/contexts | Create Context
[**dossierMedicalAdvanceDirectivesContextAPIDelete**](DossierMedicalAdvanceDirectivesContextApi.md#dossierMedicalAdvanceDirectivesContextAPIDelete) | **DELETE** /v0/dossier/back_channel/unauthorized/medical/advance_directives/contexts/{id} | Deletes the Context with given id
[**dossierMedicalAdvanceDirectivesContextAPIPatch**](DossierMedicalAdvanceDirectivesContextApi.md#dossierMedicalAdvanceDirectivesContextAPIPatch) | **PATCH** /v0/dossier/back_channel/unauthorized/medical/advance_directives/contexts/{id} | Patches Context with given id
[**dossierMedicalAdvanceDirectivesContextAPIUpdate**](DossierMedicalAdvanceDirectivesContextApi.md#dossierMedicalAdvanceDirectivesContextAPIUpdate) | **PUT** /v0/dossier/back_channel/unauthorized/medical/advance_directives/contexts/{id} | Updates the given Context

<a name="dossierMedicalAdvanceDirectivesContextAPIByClientId"></a>
# **dossierMedicalAdvanceDirectivesContextAPIByClientId**
> DossierMedicalAdvanceDirectivesListContextList dossierMedicalAdvanceDirectivesContextAPIByClientId(clientId)

Return the contexts of a Client corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalAdvanceDirectivesContextApi();
let clientId = 789; // Number | id

apiInstance.dossierMedicalAdvanceDirectivesContextAPIByClientId(clientId, (error, data, response) => {
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

[**DossierMedicalAdvanceDirectivesListContextList**](DossierMedicalAdvanceDirectivesListContextList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierMedicalAdvanceDirectivesContextAPICreate"></a>
# **dossierMedicalAdvanceDirectivesContextAPICreate**
> DossierMedicalAdvanceDirectivesContext dossierMedicalAdvanceDirectivesContextAPICreate(body)

Create Context

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalAdvanceDirectivesContextApi();
let body = new NedapOnsApi.DossierMedicalAdvanceDirectivesContext(); // DossierMedicalAdvanceDirectivesContext | Context to create

apiInstance.dossierMedicalAdvanceDirectivesContextAPICreate(body, (error, data, response) => {
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
 **body** | [**DossierMedicalAdvanceDirectivesContext**](DossierMedicalAdvanceDirectivesContext.md)| Context to create | 

### Return type

[**DossierMedicalAdvanceDirectivesContext**](DossierMedicalAdvanceDirectivesContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierMedicalAdvanceDirectivesContextAPIDelete"></a>
# **dossierMedicalAdvanceDirectivesContextAPIDelete**
> dossierMedicalAdvanceDirectivesContextAPIDelete(id)

Deletes the Context with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalAdvanceDirectivesContextApi();
let id = 789; // Number | Identifier of Context to delete.

apiInstance.dossierMedicalAdvanceDirectivesContextAPIDelete(id, (error, data, response) => {
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
 **id** | **Number**| Identifier of Context to delete. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="dossierMedicalAdvanceDirectivesContextAPIPatch"></a>
# **dossierMedicalAdvanceDirectivesContextAPIPatch**
> DossierMedicalAdvanceDirectivesContext dossierMedicalAdvanceDirectivesContextAPIPatch(body, id)

Patches Context with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalAdvanceDirectivesContextApi();
let body = new NedapOnsApi.DossierMedicalAdvanceDirectivesContext(); // DossierMedicalAdvanceDirectivesContext | 
let id = 789; // Number | 

apiInstance.dossierMedicalAdvanceDirectivesContextAPIPatch(body, id, (error, data, response) => {
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
 **body** | [**DossierMedicalAdvanceDirectivesContext**](DossierMedicalAdvanceDirectivesContext.md)|  | 
 **id** | **Number**|  | 

### Return type

[**DossierMedicalAdvanceDirectivesContext**](DossierMedicalAdvanceDirectivesContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierMedicalAdvanceDirectivesContextAPIUpdate"></a>
# **dossierMedicalAdvanceDirectivesContextAPIUpdate**
> DossierMedicalAdvanceDirectivesContext dossierMedicalAdvanceDirectivesContextAPIUpdate(body, id)

Updates the given Context

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalAdvanceDirectivesContextApi();
let body = new NedapOnsApi.DossierMedicalAdvanceDirectivesContext(); // DossierMedicalAdvanceDirectivesContext | Context to update
let id = 789; // Number | Identifier of Context to update.

apiInstance.dossierMedicalAdvanceDirectivesContextAPIUpdate(body, id, (error, data, response) => {
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
 **body** | [**DossierMedicalAdvanceDirectivesContext**](DossierMedicalAdvanceDirectivesContext.md)| Context to update | 
 **id** | **Number**| Identifier of Context to update. | 

### Return type

[**DossierMedicalAdvanceDirectivesContext**](DossierMedicalAdvanceDirectivesContext.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

