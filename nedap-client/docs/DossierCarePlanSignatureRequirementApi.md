# NedapOnsApi.DossierCarePlanSignatureRequirementApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierCarePlanSignatureRequirementAPIById**](DossierCarePlanSignatureRequirementApi.md#dossierCarePlanSignatureRequirementAPIById) | **GET** /v0/dossier/back_channel/unauthorized/care_plan/{id}/signature_requirement | Find signature requirement by id

<a name="dossierCarePlanSignatureRequirementAPIById"></a>
# **dossierCarePlanSignatureRequirementAPIById**
> DossierCarePlanSignatureRequirement dossierCarePlanSignatureRequirementAPIById(id)

Find signature requirement by id

Find care plan signature requirement by id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierCarePlanSignatureRequirementApi();
let id = 789; // Number | used for selecting CarePlanSignatureRequirement

apiInstance.dossierCarePlanSignatureRequirementAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting CarePlanSignatureRequirement | 

### Return type

[**DossierCarePlanSignatureRequirement**](DossierCarePlanSignatureRequirement.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

