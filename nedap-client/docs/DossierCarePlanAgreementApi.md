# NedapOnsApi.DossierCarePlanAgreementApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierCarePlanAgreementAPIById**](DossierCarePlanAgreementApi.md#dossierCarePlanAgreementAPIById) | **GET** /v0/dossier/back_channel/unauthorized/care_plan/{id}/agreement | Find care plan agreement by id

<a name="dossierCarePlanAgreementAPIById"></a>
# **dossierCarePlanAgreementAPIById**
> DossierCarePlanAgreement dossierCarePlanAgreementAPIById(id)

Find care plan agreement by id

Find care plan agreement by id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierCarePlanAgreementApi();
let id = 789; // Number | used for selecting CarePlanAgreement

apiInstance.dossierCarePlanAgreementAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting CarePlanAgreement | 

### Return type

[**DossierCarePlanAgreement**](DossierCarePlanAgreement.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

