# NedapOnsApi.DossierOmahaInterventionCategoryApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierOmahaInterventionCategoryAPIAll**](DossierOmahaInterventionCategoryApi.md#dossierOmahaInterventionCategoryAPIAll) | **GET** /v0/administration/omaha/intervention_categories | Returns every InterventionCategory available from the InterventionCategoryAPI

<a name="dossierOmahaInterventionCategoryAPIAll"></a>
# **dossierOmahaInterventionCategoryAPIAll**
> DossierOmahaListInterventionCategoryList dossierOmahaInterventionCategoryAPIAll(opts)

Returns every InterventionCategory available from the InterventionCategoryAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierOmahaInterventionCategoryApi();
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierOmahaInterventionCategoryAPIAll(opts, (error, data, response) => {
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

[**DossierOmahaListInterventionCategoryList**](DossierOmahaListInterventionCategoryList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

