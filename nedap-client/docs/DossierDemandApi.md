# NedapOnsApi.DossierDemandApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierDemandAPIByDomainId**](DossierDemandApi.md#dossierDemandAPIByDomainId) | **GET** /v0/administration/dossier/domains/{domain_id}/demands | Return the Demands of a Domain corresponding to the given id.
[**dossierDemandAPIById**](DossierDemandApi.md#dossierDemandAPIById) | **GET** /v0/administration/dossier/demands/{id} | Get a resource by its ID
[**dossierDemandAPICreate**](DossierDemandApi.md#dossierDemandAPICreate) | **POST** /v0/administration/dossier/demands | Create Demand
[**dossierDemandAPIDelete**](DossierDemandApi.md#dossierDemandAPIDelete) | **DELETE** /v0/administration/dossier/demands/{id} | Deletes the Demand with given id
[**dossierDemandAPIMultiple**](DossierDemandApi.md#dossierDemandAPIMultiple) | **GET** /v0/administration/dossier/demands/multiple | Method used for requesting multiple Demand objects using their ids.
[**dossierDemandAPIUpdate**](DossierDemandApi.md#dossierDemandAPIUpdate) | **PUT** /v0/administration/dossier/demands/{id} | Updates the given Demand

<a name="dossierDemandAPIByDomainId"></a>
# **dossierDemandAPIByDomainId**
> DossierListDemandList dossierDemandAPIByDomainId(domainId)

Return the Demands of a Domain corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierDemandApi();
let domainId = 789; // Number | 

apiInstance.dossierDemandAPIByDomainId(domainId, (error, data, response) => {
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
 **domainId** | **Number**|  | 

### Return type

[**DossierListDemandList**](DossierListDemandList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierDemandAPIById"></a>
# **dossierDemandAPIById**
> DossierDemand dossierDemandAPIById(id, opts)

Get a resource by its ID

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierDemandApi();
let id = 789; // Number | used for selecting Demand
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierDemandAPIById(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting Demand | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierDemand**](DossierDemand.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierDemandAPICreate"></a>
# **dossierDemandAPICreate**
> DossierDemand dossierDemandAPICreate(body)

Create Demand

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierDemandApi();
let body = new NedapOnsApi.DossierDemand(); // DossierDemand | Demand to create

apiInstance.dossierDemandAPICreate(body, (error, data, response) => {
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
 **body** | [**DossierDemand**](DossierDemand.md)| Demand to create | 

### Return type

[**DossierDemand**](DossierDemand.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierDemandAPIDelete"></a>
# **dossierDemandAPIDelete**
> dossierDemandAPIDelete(id, opts)

Deletes the Demand with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierDemandApi();
let id = 789; // Number | used for selecting Demand
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierDemandAPIDelete(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting Demand | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="dossierDemandAPIMultiple"></a>
# **dossierDemandAPIMultiple**
> DossierListDemandList dossierDemandAPIMultiple(opts)

Method used for requesting multiple Demand objects using their ids.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierDemandApi();
let opts = { 
  'id': [3.4], // [Number] | array style id's: id=1&id=2&etc
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierDemandAPIMultiple(opts, (error, data, response) => {
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

[**DossierListDemandList**](DossierListDemandList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierDemandAPIUpdate"></a>
# **dossierDemandAPIUpdate**
> DossierDemand dossierDemandAPIUpdate(body, id, opts)

Updates the given Demand

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierDemandApi();
let body = new NedapOnsApi.DossierDemand(); // DossierDemand | Demand to update
let id = 789; // Number | used for selecting Demand
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierDemandAPIUpdate(body, id, opts, (error, data, response) => {
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
 **body** | [**DossierDemand**](DossierDemand.md)| Demand to update | 
 **id** | **Number**| used for selecting Demand | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierDemand**](DossierDemand.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

