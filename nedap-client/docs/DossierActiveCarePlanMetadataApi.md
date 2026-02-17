# NedapOnsApi.DossierActiveCarePlanMetadataApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierActiveCarePlanMetadataAPIByClientIds**](DossierActiveCarePlanMetadataApi.md#dossierActiveCarePlanMetadataAPIByClientIds) | **GET** /v0/dossier/back_channel/authorized/active_care_plan_metadata | Returns active care plan metadata given the client ids.

<a name="dossierActiveCarePlanMetadataAPIByClientIds"></a>
# **dossierActiveCarePlanMetadataAPIByClientIds**
> DossierActiveCarePlanMetadata dossierActiveCarePlanMetadataAPIByClientIds(clientIds)

Returns active care plan metadata given the client ids.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierActiveCarePlanMetadataApi();
let clientIds = [3.4]; // [Number] | The ids of the clients (client_ids[]=1&client_ids[]=2...)

apiInstance.dossierActiveCarePlanMetadataAPIByClientIds(clientIds, (error, data, response) => {
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
 **clientIds** | [**[Number]**](Number.md)| The ids of the clients (client_ids[]&#x3D;1&amp;client_ids[]&#x3D;2...) | 

### Return type

[**DossierActiveCarePlanMetadata**](DossierActiveCarePlanMetadata.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

