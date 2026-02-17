# NedapOnsApi.DossierOmahaProblemApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierOmahaProblemAPIAll**](DossierOmahaProblemApi.md#dossierOmahaProblemAPIAll) | **GET** /v0/administration/omaha/problems | Returns every Problem available from the ProblemAPI

<a name="dossierOmahaProblemAPIAll"></a>
# **dossierOmahaProblemAPIAll**
> DossierOmahaListProblemList dossierOmahaProblemAPIAll(opts)

Returns every Problem available from the ProblemAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierOmahaProblemApi();
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierOmahaProblemAPIAll(opts, (error, data, response) => {
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

[**DossierOmahaListProblemList**](DossierOmahaListProblemList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

