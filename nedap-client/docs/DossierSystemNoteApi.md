# NedapOnsApi.DossierSystemNoteApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierSystemNoteAPIAll**](DossierSystemNoteApi.md#dossierSystemNoteAPIAll) | **GET** /v0/administration/dossier/system_notes | Returns every SystemNote available from the SystemNoteAPI
[**dossierSystemNoteAPIById**](DossierSystemNoteApi.md#dossierSystemNoteAPIById) | **GET** /v0/administration/dossier/system_notes/{id} | 
[**dossierSystemNoteAPICreate**](DossierSystemNoteApi.md#dossierSystemNoteAPICreate) | **POST** /v0/administration/dossier/system_notes | Create SystemNote
[**dossierSystemNoteAPIDelete**](DossierSystemNoteApi.md#dossierSystemNoteAPIDelete) | **DELETE** /v0/administration/dossier/system_notes/{id} | Deletes the SystemNote with given id
[**dossierSystemNoteAPIUpdate**](DossierSystemNoteApi.md#dossierSystemNoteAPIUpdate) | **PUT** /v0/administration/dossier/system_notes/{id} | Updates the given SystemNote

<a name="dossierSystemNoteAPIAll"></a>
# **dossierSystemNoteAPIAll**
> DossierListSystemNoteList dossierSystemNoteAPIAll(opts)

Returns every SystemNote available from the SystemNoteAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierSystemNoteApi();
let opts = { 
  'updatedSince': new Date("2013-10-20"), // Date | 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierSystemNoteAPIAll(opts, (error, data, response) => {
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

[**DossierListSystemNoteList**](DossierListSystemNoteList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierSystemNoteAPIById"></a>
# **dossierSystemNoteAPIById**
> DossierSystemNote dossierSystemNoteAPIById(id, opts)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierSystemNoteApi();
let id = 789; // Number | used for selecting SystemNote
let opts = { 
  'include': ["include_example"], // [String] | 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierSystemNoteAPIById(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting SystemNote | 
 **include** | [**[String]**](String.md)|  | [optional] 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierSystemNote**](DossierSystemNote.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierSystemNoteAPICreate"></a>
# **dossierSystemNoteAPICreate**
> DossierSystemNote dossierSystemNoteAPICreate(body, opts)

Create SystemNote

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierSystemNoteApi();
let body = new NedapOnsApi.DossierSystemNote(); // DossierSystemNote | SystemNote to create
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierSystemNoteAPICreate(body, opts, (error, data, response) => {
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
 **body** | [**DossierSystemNote**](DossierSystemNote.md)| SystemNote to create | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierSystemNote**](DossierSystemNote.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierSystemNoteAPIDelete"></a>
# **dossierSystemNoteAPIDelete**
> DossierSystemNote dossierSystemNoteAPIDelete(id, opts)

Deletes the SystemNote with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierSystemNoteApi();
let id = 789; // Number | used for selecting SystemNote
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierSystemNoteAPIDelete(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting SystemNote | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierSystemNote**](DossierSystemNote.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierSystemNoteAPIUpdate"></a>
# **dossierSystemNoteAPIUpdate**
> DossierSystemNote dossierSystemNoteAPIUpdate(body, id, opts)

Updates the given SystemNote

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierSystemNoteApi();
let body = new NedapOnsApi.DossierSystemNote(); // DossierSystemNote | SystemNote to update
let id = 789; // Number | used for selecting SystemNote
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierSystemNoteAPIUpdate(body, id, opts, (error, data, response) => {
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
 **body** | [**DossierSystemNote**](DossierSystemNote.md)| SystemNote to update | 
 **id** | **Number**| used for selecting SystemNote | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierSystemNote**](DossierSystemNote.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

