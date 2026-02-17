# NedapOnsApi.DossierDomainApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierDomainAPIAll**](DossierDomainApi.md#dossierDomainAPIAll) | **GET** /v0/administration/dossier/domains | Returns every Domain available from the DomainAPI
[**dossierDomainAPIById**](DossierDomainApi.md#dossierDomainAPIById) | **GET** /v0/administration/dossier/domains/{id} | Get a resource by its ID
[**dossierDomainAPICreate**](DossierDomainApi.md#dossierDomainAPICreate) | **POST** /v0/administration/dossier/domains | Create Domain
[**dossierDomainAPIMultiple**](DossierDomainApi.md#dossierDomainAPIMultiple) | **GET** /v0/administration/dossier/domains/multiple | Method used for requesting multiple Domain objects using their ids.
[**dossierDomainAPIUpdate**](DossierDomainApi.md#dossierDomainAPIUpdate) | **PUT** /v0/administration/dossier/domains/{id} | Updates the given Domain

<a name="dossierDomainAPIAll"></a>
# **dossierDomainAPIAll**
> DossierListDomainList dossierDomainAPIAll(opts)

Returns every Domain available from the DomainAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierDomainApi();
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierDomainAPIAll(opts, (error, data, response) => {
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
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierListDomainList**](DossierListDomainList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierDomainAPIById"></a>
# **dossierDomainAPIById**
> DossierDomain dossierDomainAPIById(id, opts)

Get a resource by its ID

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierDomainApi();
let id = 789; // Number | used for selecting Domain
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierDomainAPIById(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting Domain | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierDomain**](DossierDomain.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierDomainAPICreate"></a>
# **dossierDomainAPICreate**
> DossierDomain dossierDomainAPICreate(body)

Create Domain

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierDomainApi();
let body = new NedapOnsApi.DossierDomain(); // DossierDomain | Domain to create

apiInstance.dossierDomainAPICreate(body, (error, data, response) => {
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
 **body** | [**DossierDomain**](DossierDomain.md)| Domain to create | 

### Return type

[**DossierDomain**](DossierDomain.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierDomainAPIMultiple"></a>
# **dossierDomainAPIMultiple**
> DossierListDomainList dossierDomainAPIMultiple(opts)

Method used for requesting multiple Domain objects using their ids.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierDomainApi();
let opts = { 
  'id': [3.4], // [Number] | array style id's: id=1&id=2&etc
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierDomainAPIMultiple(opts, (error, data, response) => {
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
 **id** | [**[Number]**](Number.md)| array style id&#x27;s: id&#x3D;1&amp;id&#x3D;2&amp;etc | [optional] 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierListDomainList**](DossierListDomainList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierDomainAPIUpdate"></a>
# **dossierDomainAPIUpdate**
> DossierDomain dossierDomainAPIUpdate(body, id, opts)

Updates the given Domain

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierDomainApi();
let body = new NedapOnsApi.DossierDomain(); // DossierDomain | Domain to update
let id = 789; // Number | used for selecting Domain
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierDomainAPIUpdate(body, id, opts, (error, data, response) => {
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
 **body** | [**DossierDomain**](DossierDomain.md)| Domain to update | 
 **id** | **Number**| used for selecting Domain | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierDomain**](DossierDomain.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

