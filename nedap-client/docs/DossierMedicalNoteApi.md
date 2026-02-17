# NedapOnsApi.DossierMedicalNoteApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierMedicalNoteAPIAll**](DossierMedicalNoteApi.md#dossierMedicalNoteAPIAll) | **GET** /v0/administration/dossier/medical_notes | Returns every MedicalNote available from the MedicalNoteAPI
[**dossierMedicalNoteAPIByClientId**](DossierMedicalNoteApi.md#dossierMedicalNoteAPIByClientId) | **GET** /v0/administration/dossier/medical_notes/by_client/{client_id} | Return the active medical notes of a Client corresponding to the given id.
[**dossierMedicalNoteAPIById**](DossierMedicalNoteApi.md#dossierMedicalNoteAPIById) | **GET** /v0/administration/dossier/medical_notes/{id} | 
[**dossierMedicalNoteAPICreate**](DossierMedicalNoteApi.md#dossierMedicalNoteAPICreate) | **POST** /v0/administration/dossier/medical_notes | Create MedicalNote
[**dossierMedicalNoteAPIDelete**](DossierMedicalNoteApi.md#dossierMedicalNoteAPIDelete) | **DELETE** /v0/administration/dossier/medical_notes/{id} | Deletes the MedicalNote with given id
[**dossierMedicalNoteAPIUnfilteredByClientId**](DossierMedicalNoteApi.md#dossierMedicalNoteAPIUnfilteredByClientId) | **GET** /v0/administration/dossier/medical_notes/unfiltered_by_client/{client_id} | Return all the medical notes (including archived) of a Client corresponding to the given id.
[**dossierMedicalNoteAPIUpdate**](DossierMedicalNoteApi.md#dossierMedicalNoteAPIUpdate) | **PUT** /v0/administration/dossier/medical_notes/{id} | Updates the given MedicalNote

<a name="dossierMedicalNoteAPIAll"></a>
# **dossierMedicalNoteAPIAll**
> DossierListMedicalNoteList dossierMedicalNoteAPIAll(opts)

Returns every MedicalNote available from the MedicalNoteAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalNoteApi();
let opts = { 
  'updatedSince': new Date("2013-10-20"), // Date | 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierMedicalNoteAPIAll(opts, (error, data, response) => {
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
 **updatedSince** | **Date**|  | [optional] 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierListMedicalNoteList**](DossierListMedicalNoteList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierMedicalNoteAPIByClientId"></a>
# **dossierMedicalNoteAPIByClientId**
> DossierListMedicalNoteList dossierMedicalNoteAPIByClientId(clientId)

Return the active medical notes of a Client corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalNoteApi();
let clientId = 789; // Number | id

apiInstance.dossierMedicalNoteAPIByClientId(clientId, (error, data, response) => {
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

[**DossierListMedicalNoteList**](DossierListMedicalNoteList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierMedicalNoteAPIById"></a>
# **dossierMedicalNoteAPIById**
> DossierMedicalNote dossierMedicalNoteAPIById(id, opts)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalNoteApi();
let id = 789; // Number | used for selecting MedicalNote
let opts = { 
  'include': ["include_example"], // [String] | 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierMedicalNoteAPIById(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting MedicalNote | 
 **include** | [**[String]**](String.md)|  | [optional] 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierMedicalNote**](DossierMedicalNote.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierMedicalNoteAPICreate"></a>
# **dossierMedicalNoteAPICreate**
> DossierMedicalNote dossierMedicalNoteAPICreate(body, opts)

Create MedicalNote

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalNoteApi();
let body = new NedapOnsApi.DossierMedicalNote(); // DossierMedicalNote | MedicalNote to create
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierMedicalNoteAPICreate(body, opts, (error, data, response) => {
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
 **body** | [**DossierMedicalNote**](DossierMedicalNote.md)| MedicalNote to create | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierMedicalNote**](DossierMedicalNote.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierMedicalNoteAPIDelete"></a>
# **dossierMedicalNoteAPIDelete**
> DossierMedicalNote dossierMedicalNoteAPIDelete(id, opts)

Deletes the MedicalNote with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalNoteApi();
let id = 789; // Number | used for selecting MedicalNote
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierMedicalNoteAPIDelete(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting MedicalNote | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierMedicalNote**](DossierMedicalNote.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierMedicalNoteAPIUnfilteredByClientId"></a>
# **dossierMedicalNoteAPIUnfilteredByClientId**
> DossierListMedicalNoteList dossierMedicalNoteAPIUnfilteredByClientId(clientId)

Return all the medical notes (including archived) of a Client corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalNoteApi();
let clientId = 789; // Number | id

apiInstance.dossierMedicalNoteAPIUnfilteredByClientId(clientId, (error, data, response) => {
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

[**DossierListMedicalNoteList**](DossierListMedicalNoteList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierMedicalNoteAPIUpdate"></a>
# **dossierMedicalNoteAPIUpdate**
> DossierMedicalNote dossierMedicalNoteAPIUpdate(body, id, opts)

Updates the given MedicalNote

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalNoteApi();
let body = new NedapOnsApi.DossierMedicalNote(); // DossierMedicalNote | MedicalNote to update
let id = 789; // Number | used for selecting MedicalNote
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierMedicalNoteAPIUpdate(body, id, opts, (error, data, response) => {
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
 **body** | [**DossierMedicalNote**](DossierMedicalNote.md)| MedicalNote to update | 
 **id** | **Number**| used for selecting MedicalNote | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierMedicalNote**](DossierMedicalNote.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

