# NedapOnsApi.DossierDemandEntryApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierDemandEntryAPICreate**](DossierDemandEntryApi.md#dossierDemandEntryAPICreate) | **POST** /v0/administration/dossier/demand_entries | Create DemandEntry
[**dossierDemandEntryAPIDelete**](DossierDemandEntryApi.md#dossierDemandEntryAPIDelete) | **DELETE** /v0/administration/dossier/demand_entries/{id} | Deletes the DemandEntry with given id

<a name="dossierDemandEntryAPICreate"></a>
# **dossierDemandEntryAPICreate**
> DossierDemandEntry dossierDemandEntryAPICreate(body)

Create DemandEntry

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierDemandEntryApi();
let body = new NedapOnsApi.DossierDemandEntry(); // DossierDemandEntry | Creates a new DemandEntry. Important: This endpoint only creates the DemandEntry. The associated Demand object must be present already and referenced by demandId.

apiInstance.dossierDemandEntryAPICreate(body, (error, data, response) => {
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
 **body** | [**DossierDemandEntry**](DossierDemandEntry.md)| Creates a new DemandEntry. Important: This endpoint only creates the DemandEntry. The associated Demand object must be present already and referenced by demandId. | 

### Return type

[**DossierDemandEntry**](DossierDemandEntry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierDemandEntryAPIDelete"></a>
# **dossierDemandEntryAPIDelete**
> dossierDemandEntryAPIDelete(id, opts)

Deletes the DemandEntry with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierDemandEntryApi();
let id = 789; // Number | Identifier of DemandEntry to delete.
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierDemandEntryAPIDelete(id, opts, (error, data, response) => {
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
 **id** | **Number**| Identifier of DemandEntry to delete. | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

