# NedapOnsApi.DossierMedicalProblemApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierMedicalProblemAPIById**](DossierMedicalProblemApi.md#dossierMedicalProblemAPIById) | **GET** /v0/dossier/back_channel/unauthorized/medical/problems/{id} | Get a specific topic
[**dossierMedicalProblemAPICreate**](DossierMedicalProblemApi.md#dossierMedicalProblemAPICreate) | **POST** /v0/dossier/back_channel/unauthorized/medical/problems | Create Problem
[**dossierMedicalProblemAPIDelete**](DossierMedicalProblemApi.md#dossierMedicalProblemAPIDelete) | **DELETE** /v0/dossier/back_channel/unauthorized/medical/problems/{id} | Deletes the Problem with given id
[**dossierMedicalProblemAPIPatch**](DossierMedicalProblemApi.md#dossierMedicalProblemAPIPatch) | **PATCH** /v0/dossier/back_channel/unauthorized/medical/problems/{id} | Patches Problem with given id
[**dossierMedicalProblemAPIUpdate**](DossierMedicalProblemApi.md#dossierMedicalProblemAPIUpdate) | **PUT** /v0/dossier/back_channel/unauthorized/medical/problems/{id} | Updates the given Problem

<a name="dossierMedicalProblemAPIById"></a>
# **dossierMedicalProblemAPIById**
> DossierMedicalProblem dossierMedicalProblemAPIById(id)

Get a specific topic

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalProblemApi();
let id = 789; // Number | 

apiInstance.dossierMedicalProblemAPIById(id, (error, data, response) => {
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

### Return type

[**DossierMedicalProblem**](DossierMedicalProblem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierMedicalProblemAPICreate"></a>
# **dossierMedicalProblemAPICreate**
> DossierMedicalProblem dossierMedicalProblemAPICreate(body)

Create Problem

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalProblemApi();
let body = new NedapOnsApi.DossierMedicalProblem(); // DossierMedicalProblem | Problem to create

apiInstance.dossierMedicalProblemAPICreate(body, (error, data, response) => {
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
 **body** | [**DossierMedicalProblem**](DossierMedicalProblem.md)| Problem to create | 

### Return type

[**DossierMedicalProblem**](DossierMedicalProblem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierMedicalProblemAPIDelete"></a>
# **dossierMedicalProblemAPIDelete**
> dossierMedicalProblemAPIDelete(id)

Deletes the Problem with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalProblemApi();
let id = 789; // Number | Identifier of Problem to delete.

apiInstance.dossierMedicalProblemAPIDelete(id, (error, data, response) => {
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
 **id** | **Number**| Identifier of Problem to delete. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="dossierMedicalProblemAPIPatch"></a>
# **dossierMedicalProblemAPIPatch**
> DossierMedicalProblem dossierMedicalProblemAPIPatch(body, id)

Patches Problem with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalProblemApi();
let body = new NedapOnsApi.DossierMedicalProblem(); // DossierMedicalProblem | 
let id = 789; // Number | 

apiInstance.dossierMedicalProblemAPIPatch(body, id, (error, data, response) => {
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
 **body** | [**DossierMedicalProblem**](DossierMedicalProblem.md)|  | 
 **id** | **Number**|  | 

### Return type

[**DossierMedicalProblem**](DossierMedicalProblem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierMedicalProblemAPIUpdate"></a>
# **dossierMedicalProblemAPIUpdate**
> DossierMedicalProblem dossierMedicalProblemAPIUpdate(body, id)

Updates the given Problem

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalProblemApi();
let body = new NedapOnsApi.DossierMedicalProblem(); // DossierMedicalProblem | Problem to update
let id = 789; // Number | Identifier of Problem to update.

apiInstance.dossierMedicalProblemAPIUpdate(body, id, (error, data, response) => {
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
 **body** | [**DossierMedicalProblem**](DossierMedicalProblem.md)| Problem to update | 
 **id** | **Number**| Identifier of Problem to update. | 

### Return type

[**DossierMedicalProblem**](DossierMedicalProblem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

