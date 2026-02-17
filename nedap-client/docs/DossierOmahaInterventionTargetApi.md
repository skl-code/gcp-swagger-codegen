# NedapOnsApi.DossierOmahaInterventionTargetApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierOmahaInterventionTargetAPIAll**](DossierOmahaInterventionTargetApi.md#dossierOmahaInterventionTargetAPIAll) | **GET** /v0/administration/omaha/intervention_targets | Returns every InterventionTarget available from the InterventionTargetAPI

<a name="dossierOmahaInterventionTargetAPIAll"></a>
# **dossierOmahaInterventionTargetAPIAll**
> DossierOmahaListInterventionTargetList dossierOmahaInterventionTargetAPIAll(opts)

Returns every InterventionTarget available from the InterventionTargetAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierOmahaInterventionTargetApi();
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierOmahaInterventionTargetAPIAll(opts, (error, data, response) => {
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

[**DossierOmahaListInterventionTargetList**](DossierOmahaListInterventionTargetList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

