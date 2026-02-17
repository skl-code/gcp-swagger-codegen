# NedapOnsApi.DossierClientNoteApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierClientNoteAPIAll**](DossierClientNoteApi.md#dossierClientNoteAPIAll) | **GET** /v0/administration/dossier/client_notes | Returns every ClientNote available from the ClientNote API
[**dossierClientNoteAPIByClientId**](DossierClientNoteApi.md#dossierClientNoteAPIByClientId) | **GET** /v0/administration/dossier/client_notes/by_client/{client_id} | Return the client notes of a Client corresponding to the given id.
[**dossierClientNoteAPIById**](DossierClientNoteApi.md#dossierClientNoteAPIById) | **GET** /v0/administration/dossier/client_notes/{id} | 
[**dossierClientNoteAPICreate**](DossierClientNoteApi.md#dossierClientNoteAPICreate) | **POST** /v0/administration/dossier/client_notes | Create ClientNote
[**dossierClientNoteAPIDelete**](DossierClientNoteApi.md#dossierClientNoteAPIDelete) | **DELETE** /v0/administration/dossier/client_notes/{id} | Deletes the ClientNote with given id
[**dossierClientNoteAPIUpdate**](DossierClientNoteApi.md#dossierClientNoteAPIUpdate) | **PUT** /v0/administration/dossier/client_notes/{id} | Updates the given ClientNote

<a name="dossierClientNoteAPIAll"></a>
# **dossierClientNoteAPIAll**
> DossierListClientNoteList dossierClientNoteAPIAll(opts)

Returns every ClientNote available from the ClientNote API

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierClientNoteApi();
let opts = { 
  'updatedSince': new Date("2013-10-20"), // Date | 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierClientNoteAPIAll(opts, (error, data, response) => {
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

[**DossierListClientNoteList**](DossierListClientNoteList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierClientNoteAPIByClientId"></a>
# **dossierClientNoteAPIByClientId**
> DossierListClientNoteList dossierClientNoteAPIByClientId(clientId)

Return the client notes of a Client corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierClientNoteApi();
let clientId = 789; // Number | id

apiInstance.dossierClientNoteAPIByClientId(clientId, (error, data, response) => {
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

[**DossierListClientNoteList**](DossierListClientNoteList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierClientNoteAPIById"></a>
# **dossierClientNoteAPIById**
> DossierClientNote dossierClientNoteAPIById(id, opts)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierClientNoteApi();
let id = 789; // Number | used for selecting ClientNote
let opts = { 
  'include': ["include_example"], // [String] | 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierClientNoteAPIById(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting ClientNote | 
 **include** | [**[String]**](String.md)|  | [optional] 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierClientNote**](DossierClientNote.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierClientNoteAPICreate"></a>
# **dossierClientNoteAPICreate**
> DossierClientNote dossierClientNoteAPICreate(body, opts)

Create ClientNote

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierClientNoteApi();
let body = new NedapOnsApi.DossierClientNote(); // DossierClientNote | ClientNote to create
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierClientNoteAPICreate(body, opts, (error, data, response) => {
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
 **body** | [**DossierClientNote**](DossierClientNote.md)| ClientNote to create | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierClientNote**](DossierClientNote.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierClientNoteAPIDelete"></a>
# **dossierClientNoteAPIDelete**
> DossierClientNote dossierClientNoteAPIDelete(id, opts)

Deletes the ClientNote with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierClientNoteApi();
let id = 789; // Number | used for selecting ClientNote
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierClientNoteAPIDelete(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting ClientNote | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierClientNote**](DossierClientNote.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierClientNoteAPIUpdate"></a>
# **dossierClientNoteAPIUpdate**
> DossierClientNote dossierClientNoteAPIUpdate(body, id, opts)

Updates the given ClientNote

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierClientNoteApi();
let body = new NedapOnsApi.DossierClientNote(); // DossierClientNote | ClientNote to update
let id = 789; // Number | used for selecting ClientNote
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierClientNoteAPIUpdate(body, id, opts, (error, data, response) => {
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
 **body** | [**DossierClientNote**](DossierClientNote.md)| ClientNote to update | 
 **id** | **Number**| used for selecting ClientNote | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierClientNote**](DossierClientNote.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

