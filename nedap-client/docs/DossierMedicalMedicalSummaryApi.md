# NedapOnsApi.DossierMedicalMedicalSummaryApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierMedicalMedicalSummaryAPIFilteredByClientIds**](DossierMedicalMedicalSummaryApi.md#dossierMedicalMedicalSummaryAPIFilteredByClientIds) | **GET** /v0/dossier/back_channel/unauthorized/medical/medical_summaries/by_client_ids | Gets the medical summaries for the specified clients. The parameters determine what data should be included in the summary

<a name="dossierMedicalMedicalSummaryAPIFilteredByClientIds"></a>
# **dossierMedicalMedicalSummaryAPIFilteredByClientIds**
> DossierMedicalListMedicalSummaryList dossierMedicalMedicalSummaryAPIFilteredByClientIds(opts)

Gets the medical summaries for the specified clients. The parameters determine what data should be included in the summary

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalMedicalSummaryApi();
let opts = { 
  'problems': true, // Boolean | 
  'incompetences': true, // Boolean | 
  'allergiesAndAdverseReactions': true, // Boolean | 
  'simplifiedAdverseReactions': true, // Boolean | 
  'medicalPolicy': true, // Boolean | 
  'legalStatus': true, // Boolean | 
  'episodes': true, // Boolean | 
  'resuscitationDecision': true, // Boolean | 
  'alerts': true, // Boolean | 
  'medicalNotes': true, // Boolean | 
  'id': [3.4] // [Number] | 
};
apiInstance.dossierMedicalMedicalSummaryAPIFilteredByClientIds(opts, (error, data, response) => {
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
 **problems** | **Boolean**|  | [optional] 
 **incompetences** | **Boolean**|  | [optional] 
 **allergiesAndAdverseReactions** | **Boolean**|  | [optional] 
 **simplifiedAdverseReactions** | **Boolean**|  | [optional] 
 **medicalPolicy** | **Boolean**|  | [optional] 
 **legalStatus** | **Boolean**|  | [optional] 
 **episodes** | **Boolean**|  | [optional] 
 **resuscitationDecision** | **Boolean**|  | [optional] 
 **alerts** | **Boolean**|  | [optional] 
 **medicalNotes** | **Boolean**|  | [optional] 
 **id** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**DossierMedicalListMedicalSummaryList**](DossierMedicalListMedicalSummaryList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

