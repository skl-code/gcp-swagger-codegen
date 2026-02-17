# NedapOnsApi.DossierLastMedicalMomentApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierLastMedicalMomentAPIByClientId**](DossierLastMedicalMomentApi.md#dossierLastMedicalMomentAPIByClientId) | **GET** /v0/dossier/back_channel/authorized/clients/{client_id}/last_medical_moments | Returns LastMedicalMoment timestamps by client

<a name="dossierLastMedicalMomentAPIByClientId"></a>
# **dossierLastMedicalMomentAPIByClientId**
> DossierListLastMedicalMomentList dossierLastMedicalMomentAPIByClientId(clientId)

Returns LastMedicalMoment timestamps by client

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierLastMedicalMomentApi();
let clientId = 789; // Number | 

apiInstance.dossierLastMedicalMomentAPIByClientId(clientId, (error, data, response) => {
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
 **clientId** | **Number**|  | 

### Return type

[**DossierListLastMedicalMomentList**](DossierListLastMedicalMomentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

