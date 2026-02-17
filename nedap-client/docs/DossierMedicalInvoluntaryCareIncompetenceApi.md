# NedapOnsApi.DossierMedicalInvoluntaryCareIncompetenceApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierMedicalInvoluntaryCareIncompetenceAPIById**](DossierMedicalInvoluntaryCareIncompetenceApi.md#dossierMedicalInvoluntaryCareIncompetenceAPIById) | **GET** /v0/dossier/back_channel/unauthorized/medical/involuntary_care/incompetences/{id} | Gets a Incompetence by specified identifier
[**dossierMedicalInvoluntaryCareIncompetenceAPICreate**](DossierMedicalInvoluntaryCareIncompetenceApi.md#dossierMedicalInvoluntaryCareIncompetenceAPICreate) | **POST** /v0/dossier/back_channel/unauthorized/medical/involuntary_care/incompetences | Create Incompetence
[**dossierMedicalInvoluntaryCareIncompetenceAPIDelete**](DossierMedicalInvoluntaryCareIncompetenceApi.md#dossierMedicalInvoluntaryCareIncompetenceAPIDelete) | **DELETE** /v0/dossier/back_channel/unauthorized/medical/involuntary_care/incompetences/{id} | Deletes the Incompetence with given id
[**dossierMedicalInvoluntaryCareIncompetenceAPIPatch**](DossierMedicalInvoluntaryCareIncompetenceApi.md#dossierMedicalInvoluntaryCareIncompetenceAPIPatch) | **PATCH** /v0/dossier/back_channel/unauthorized/medical/involuntary_care/incompetences/{id} | Patches Incompetence with given id
[**dossierMedicalInvoluntaryCareIncompetenceAPIUpdate**](DossierMedicalInvoluntaryCareIncompetenceApi.md#dossierMedicalInvoluntaryCareIncompetenceAPIUpdate) | **PUT** /v0/dossier/back_channel/unauthorized/medical/involuntary_care/incompetences/{id} | Updates the given Incompetence

<a name="dossierMedicalInvoluntaryCareIncompetenceAPIById"></a>
# **dossierMedicalInvoluntaryCareIncompetenceAPIById**
> DossierMedicalInvoluntaryCareIncompetence dossierMedicalInvoluntaryCareIncompetenceAPIById(id)

Gets a Incompetence by specified identifier

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalInvoluntaryCareIncompetenceApi();
let id = 789; // Number | Identifier of Incompetence to update.

apiInstance.dossierMedicalInvoluntaryCareIncompetenceAPIById(id, (error, data, response) => {
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
 **id** | **Number**| Identifier of Incompetence to update. | 

### Return type

[**DossierMedicalInvoluntaryCareIncompetence**](DossierMedicalInvoluntaryCareIncompetence.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierMedicalInvoluntaryCareIncompetenceAPICreate"></a>
# **dossierMedicalInvoluntaryCareIncompetenceAPICreate**
> DossierMedicalInvoluntaryCareIncompetence dossierMedicalInvoluntaryCareIncompetenceAPICreate(body)

Create Incompetence

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalInvoluntaryCareIncompetenceApi();
let body = new NedapOnsApi.DossierMedicalInvoluntaryCareIncompetence(); // DossierMedicalInvoluntaryCareIncompetence | Incompetence to create

apiInstance.dossierMedicalInvoluntaryCareIncompetenceAPICreate(body, (error, data, response) => {
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
 **body** | [**DossierMedicalInvoluntaryCareIncompetence**](DossierMedicalInvoluntaryCareIncompetence.md)| Incompetence to create | 

### Return type

[**DossierMedicalInvoluntaryCareIncompetence**](DossierMedicalInvoluntaryCareIncompetence.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierMedicalInvoluntaryCareIncompetenceAPIDelete"></a>
# **dossierMedicalInvoluntaryCareIncompetenceAPIDelete**
> DossierMedicalInvoluntaryCareIncompetence dossierMedicalInvoluntaryCareIncompetenceAPIDelete(id)

Deletes the Incompetence with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalInvoluntaryCareIncompetenceApi();
let id = 789; // Number | Identifier of Incompetence to delete.

apiInstance.dossierMedicalInvoluntaryCareIncompetenceAPIDelete(id, (error, data, response) => {
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
 **id** | **Number**| Identifier of Incompetence to delete. | 

### Return type

[**DossierMedicalInvoluntaryCareIncompetence**](DossierMedicalInvoluntaryCareIncompetence.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierMedicalInvoluntaryCareIncompetenceAPIPatch"></a>
# **dossierMedicalInvoluntaryCareIncompetenceAPIPatch**
> DossierMedicalInvoluntaryCareIncompetence dossierMedicalInvoluntaryCareIncompetenceAPIPatch(body, id)

Patches Incompetence with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalInvoluntaryCareIncompetenceApi();
let body = new NedapOnsApi.DossierMedicalInvoluntaryCareIncompetence(); // DossierMedicalInvoluntaryCareIncompetence | 
let id = 789; // Number | 

apiInstance.dossierMedicalInvoluntaryCareIncompetenceAPIPatch(body, id, (error, data, response) => {
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
 **body** | [**DossierMedicalInvoluntaryCareIncompetence**](DossierMedicalInvoluntaryCareIncompetence.md)|  | 
 **id** | **Number**|  | 

### Return type

[**DossierMedicalInvoluntaryCareIncompetence**](DossierMedicalInvoluntaryCareIncompetence.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierMedicalInvoluntaryCareIncompetenceAPIUpdate"></a>
# **dossierMedicalInvoluntaryCareIncompetenceAPIUpdate**
> DossierMedicalInvoluntaryCareIncompetence dossierMedicalInvoluntaryCareIncompetenceAPIUpdate(body, id)

Updates the given Incompetence

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalInvoluntaryCareIncompetenceApi();
let body = new NedapOnsApi.DossierMedicalInvoluntaryCareIncompetence(); // DossierMedicalInvoluntaryCareIncompetence | Incompetence to update
let id = 789; // Number | Identifier of Incompetence to update.

apiInstance.dossierMedicalInvoluntaryCareIncompetenceAPIUpdate(body, id, (error, data, response) => {
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
 **body** | [**DossierMedicalInvoluntaryCareIncompetence**](DossierMedicalInvoluntaryCareIncompetence.md)| Incompetence to update | 
 **id** | **Number**| Identifier of Incompetence to update. | 

### Return type

[**DossierMedicalInvoluntaryCareIncompetence**](DossierMedicalInvoluntaryCareIncompetence.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

