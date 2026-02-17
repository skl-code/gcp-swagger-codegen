# NedapOnsApi.DossierOmahaClassifiedProblemApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierOmahaClassifiedProblemAPIById**](DossierOmahaClassifiedProblemApi.md#dossierOmahaClassifiedProblemAPIById) | **GET** /v0/administration/omaha/classified_problems/{id} | Return the Omaha Classified Problem corresponding to the given id
[**dossierOmahaClassifiedProblemAPICreate**](DossierOmahaClassifiedProblemApi.md#dossierOmahaClassifiedProblemAPICreate) | **POST** /v0/administration/omaha/classified_problems | Create ClassifiedProblem
[**dossierOmahaClassifiedProblemAPIDelete**](DossierOmahaClassifiedProblemApi.md#dossierOmahaClassifiedProblemAPIDelete) | **DELETE** /v0/administration/omaha/classified_problems/{id} | Deletes the ClassifiedProblem with given id
[**dossierOmahaClassifiedProblemAPIUpdate**](DossierOmahaClassifiedProblemApi.md#dossierOmahaClassifiedProblemAPIUpdate) | **PUT** /v0/administration/omaha/classified_problems/{id} | Updates the given ClassifiedProblem

<a name="dossierOmahaClassifiedProblemAPIById"></a>
# **dossierOmahaClassifiedProblemAPIById**
> DossierOmahaClassifiedProblem dossierOmahaClassifiedProblemAPIById(id, opts)

Return the Omaha Classified Problem corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierOmahaClassifiedProblemApi();
let id = "id_example"; // String | used for selecting ClassifiedProblem
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierOmahaClassifiedProblemAPIById(id, opts, (error, data, response) => {
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
 **id** | **String**| used for selecting ClassifiedProblem | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierOmahaClassifiedProblem**](DossierOmahaClassifiedProblem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierOmahaClassifiedProblemAPICreate"></a>
# **dossierOmahaClassifiedProblemAPICreate**
> DossierOmahaClassifiedProblem dossierOmahaClassifiedProblemAPICreate(body, opts)

Create ClassifiedProblem

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierOmahaClassifiedProblemApi();
let body = new NedapOnsApi.DossierOmahaClassifiedProblem(); // DossierOmahaClassifiedProblem | ClassifiedProblem to create
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierOmahaClassifiedProblemAPICreate(body, opts, (error, data, response) => {
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
 **body** | [**DossierOmahaClassifiedProblem**](DossierOmahaClassifiedProblem.md)| ClassifiedProblem to create | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierOmahaClassifiedProblem**](DossierOmahaClassifiedProblem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierOmahaClassifiedProblemAPIDelete"></a>
# **dossierOmahaClassifiedProblemAPIDelete**
> dossierOmahaClassifiedProblemAPIDelete(id, opts)

Deletes the ClassifiedProblem with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierOmahaClassifiedProblemApi();
let id = "id_example"; // String | used for selecting ClassifiedProblem
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierOmahaClassifiedProblemAPIDelete(id, opts, (error, data, response) => {
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
 **id** | **String**| used for selecting ClassifiedProblem | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="dossierOmahaClassifiedProblemAPIUpdate"></a>
# **dossierOmahaClassifiedProblemAPIUpdate**
> DossierOmahaClassifiedProblem dossierOmahaClassifiedProblemAPIUpdate(body, id, opts)

Updates the given ClassifiedProblem

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierOmahaClassifiedProblemApi();
let body = new NedapOnsApi.DossierOmahaClassifiedProblem(); // DossierOmahaClassifiedProblem | ClassifiedProblem to update
let id = "id_example"; // String | used for selecting ClassifiedProblem
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierOmahaClassifiedProblemAPIUpdate(body, id, opts, (error, data, response) => {
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
 **body** | [**DossierOmahaClassifiedProblem**](DossierOmahaClassifiedProblem.md)| ClassifiedProblem to update | 
 **id** | **String**| used for selecting ClassifiedProblem | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierOmahaClassifiedProblem**](DossierOmahaClassifiedProblem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

