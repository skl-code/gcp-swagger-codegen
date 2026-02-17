# NedapOnsApi.DossierMedicalInvoluntaryCareLegalStatusApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierMedicalInvoluntaryCareLegalStatusAPIByClientId**](DossierMedicalInvoluntaryCareLegalStatusApi.md#dossierMedicalInvoluntaryCareLegalStatusAPIByClientId) | **GET** /v0/dossier/back_channel/unauthorized/clients/{client_id}/medical/involuntary_care/legal_statuses | Return the legal statuses of a Client corresponding to the given id.
[**dossierMedicalInvoluntaryCareLegalStatusAPIById**](DossierMedicalInvoluntaryCareLegalStatusApi.md#dossierMedicalInvoluntaryCareLegalStatusAPIById) | **GET** /v0/dossier/back_channel/unauthorized/medical/involuntary_care/legal_statuses/{id} | Gets the legal status for the specified ID
[**dossierMedicalInvoluntaryCareLegalStatusAPICreate**](DossierMedicalInvoluntaryCareLegalStatusApi.md#dossierMedicalInvoluntaryCareLegalStatusAPICreate) | **POST** /v0/dossier/back_channel/unauthorized/medical/involuntary_care/legal_statuses | Create LegalStatus
[**dossierMedicalInvoluntaryCareLegalStatusAPIDelete**](DossierMedicalInvoluntaryCareLegalStatusApi.md#dossierMedicalInvoluntaryCareLegalStatusAPIDelete) | **DELETE** /v0/dossier/back_channel/unauthorized/medical/involuntary_care/legal_statuses/{id} | Deletes the legal status by ID.
[**dossierMedicalInvoluntaryCareLegalStatusAPIPatch**](DossierMedicalInvoluntaryCareLegalStatusApi.md#dossierMedicalInvoluntaryCareLegalStatusAPIPatch) | **PATCH** /v0/dossier/back_channel/unauthorized/medical/involuntary_care/legal_statuses/{id} | Patches LegalStatus with given id
[**dossierMedicalInvoluntaryCareLegalStatusAPIUpdate**](DossierMedicalInvoluntaryCareLegalStatusApi.md#dossierMedicalInvoluntaryCareLegalStatusAPIUpdate) | **PUT** /v0/dossier/back_channel/unauthorized/medical/involuntary_care/legal_statuses/{id} | Updates the given LegalStatus

<a name="dossierMedicalInvoluntaryCareLegalStatusAPIByClientId"></a>
# **dossierMedicalInvoluntaryCareLegalStatusAPIByClientId**
> DossierMedicalInvoluntaryCareListLegalStatusList dossierMedicalInvoluntaryCareLegalStatusAPIByClientId(clientId)

Return the legal statuses of a Client corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalInvoluntaryCareLegalStatusApi();
let clientId = 789; // Number | id

apiInstance.dossierMedicalInvoluntaryCareLegalStatusAPIByClientId(clientId, (error, data, response) => {
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

[**DossierMedicalInvoluntaryCareListLegalStatusList**](DossierMedicalInvoluntaryCareListLegalStatusList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierMedicalInvoluntaryCareLegalStatusAPIById"></a>
# **dossierMedicalInvoluntaryCareLegalStatusAPIById**
> DossierMedicalInvoluntaryCareLegalStatus dossierMedicalInvoluntaryCareLegalStatusAPIById(id)

Gets the legal status for the specified ID

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalInvoluntaryCareLegalStatusApi();
let id = 789; // Number | the id of the legal status

apiInstance.dossierMedicalInvoluntaryCareLegalStatusAPIById(id, (error, data, response) => {
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
 **id** | **Number**| the id of the legal status | 

### Return type

[**DossierMedicalInvoluntaryCareLegalStatus**](DossierMedicalInvoluntaryCareLegalStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierMedicalInvoluntaryCareLegalStatusAPICreate"></a>
# **dossierMedicalInvoluntaryCareLegalStatusAPICreate**
> DossierMedicalInvoluntaryCareLegalStatus dossierMedicalInvoluntaryCareLegalStatusAPICreate(body)

Create LegalStatus

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalInvoluntaryCareLegalStatusApi();
let body = new NedapOnsApi.DossierMedicalInvoluntaryCareLegalStatus(); // DossierMedicalInvoluntaryCareLegalStatus | LegalStatus to create

apiInstance.dossierMedicalInvoluntaryCareLegalStatusAPICreate(body, (error, data, response) => {
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
 **body** | [**DossierMedicalInvoluntaryCareLegalStatus**](DossierMedicalInvoluntaryCareLegalStatus.md)| LegalStatus to create | 

### Return type

[**DossierMedicalInvoluntaryCareLegalStatus**](DossierMedicalInvoluntaryCareLegalStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierMedicalInvoluntaryCareLegalStatusAPIDelete"></a>
# **dossierMedicalInvoluntaryCareLegalStatusAPIDelete**
> dossierMedicalInvoluntaryCareLegalStatusAPIDelete(id)

Deletes the legal status by ID.

Deletes the legal status for the given ID.&lt;p&gt; NOTE: This operation permanently removes the legal status and all associated data including grounds, suspensions and documents. This data is part of the export for the IGJ inspection. Deleting legal statuses before they have been properly exported may result in incomplete inspection data and potential compliance issues. Ensure all required exports have been completed before proceeding with deletion. Use with caution as this action cannot be undone.&lt;/p&gt;

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalInvoluntaryCareLegalStatusApi();
let id = 789; // Number | Identifier of LegalStatus to delete.

apiInstance.dossierMedicalInvoluntaryCareLegalStatusAPIDelete(id, (error, data, response) => {
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
 **id** | **Number**| Identifier of LegalStatus to delete. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierMedicalInvoluntaryCareLegalStatusAPIPatch"></a>
# **dossierMedicalInvoluntaryCareLegalStatusAPIPatch**
> DossierMedicalInvoluntaryCareLegalStatus dossierMedicalInvoluntaryCareLegalStatusAPIPatch(body, id)

Patches LegalStatus with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalInvoluntaryCareLegalStatusApi();
let body = new NedapOnsApi.DossierMedicalInvoluntaryCareLegalStatus(); // DossierMedicalInvoluntaryCareLegalStatus | 
let id = 789; // Number | 

apiInstance.dossierMedicalInvoluntaryCareLegalStatusAPIPatch(body, id, (error, data, response) => {
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
 **body** | [**DossierMedicalInvoluntaryCareLegalStatus**](DossierMedicalInvoluntaryCareLegalStatus.md)|  | 
 **id** | **Number**|  | 

### Return type

[**DossierMedicalInvoluntaryCareLegalStatus**](DossierMedicalInvoluntaryCareLegalStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierMedicalInvoluntaryCareLegalStatusAPIUpdate"></a>
# **dossierMedicalInvoluntaryCareLegalStatusAPIUpdate**
> DossierMedicalInvoluntaryCareLegalStatus dossierMedicalInvoluntaryCareLegalStatusAPIUpdate(body, id)

Updates the given LegalStatus

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalInvoluntaryCareLegalStatusApi();
let body = new NedapOnsApi.DossierMedicalInvoluntaryCareLegalStatus(); // DossierMedicalInvoluntaryCareLegalStatus | LegalStatus to update
let id = 789; // Number | Identifier of LegalStatus to update.

apiInstance.dossierMedicalInvoluntaryCareLegalStatusAPIUpdate(body, id, (error, data, response) => {
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
 **body** | [**DossierMedicalInvoluntaryCareLegalStatus**](DossierMedicalInvoluntaryCareLegalStatus.md)| LegalStatus to update | 
 **id** | **Number**| Identifier of LegalStatus to update. | 

### Return type

[**DossierMedicalInvoluntaryCareLegalStatus**](DossierMedicalInvoluntaryCareLegalStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

