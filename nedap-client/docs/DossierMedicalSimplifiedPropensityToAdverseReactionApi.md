# NedapOnsApi.DossierMedicalSimplifiedPropensityToAdverseReactionApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierMedicalSimplifiedPropensityToAdverseReactionAPICreate**](DossierMedicalSimplifiedPropensityToAdverseReactionApi.md#dossierMedicalSimplifiedPropensityToAdverseReactionAPICreate) | **POST** /v0/dossier/back_channel/unauthorized/medical/simplified/propensities_to_adverse_reaction | Create SimplifiedPropensityToAdverseReaction
[**dossierMedicalSimplifiedPropensityToAdverseReactionAPIUpdate**](DossierMedicalSimplifiedPropensityToAdverseReactionApi.md#dossierMedicalSimplifiedPropensityToAdverseReactionAPIUpdate) | **PUT** /v0/dossier/back_channel/unauthorized/medical/simplified/propensities_to_adverse_reaction | Updates the given SimplifiedPropensityToAdverseReaction

<a name="dossierMedicalSimplifiedPropensityToAdverseReactionAPICreate"></a>
# **dossierMedicalSimplifiedPropensityToAdverseReactionAPICreate**
> DossierMedicalSimplifiedPropensityToAdverseReaction dossierMedicalSimplifiedPropensityToAdverseReactionAPICreate(body)

Create SimplifiedPropensityToAdverseReaction

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalSimplifiedPropensityToAdverseReactionApi();
let body = new NedapOnsApi.DossierMedicalSimplifiedPropensityToAdverseReaction(); // DossierMedicalSimplifiedPropensityToAdverseReaction | SimplifiedPropensityToAdverseReaction to create

apiInstance.dossierMedicalSimplifiedPropensityToAdverseReactionAPICreate(body, (error, data, response) => {
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
 **body** | [**DossierMedicalSimplifiedPropensityToAdverseReaction**](DossierMedicalSimplifiedPropensityToAdverseReaction.md)| SimplifiedPropensityToAdverseReaction to create | 

### Return type

[**DossierMedicalSimplifiedPropensityToAdverseReaction**](DossierMedicalSimplifiedPropensityToAdverseReaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierMedicalSimplifiedPropensityToAdverseReactionAPIUpdate"></a>
# **dossierMedicalSimplifiedPropensityToAdverseReactionAPIUpdate**
> DossierMedicalSimplifiedPropensityToAdverseReaction dossierMedicalSimplifiedPropensityToAdverseReactionAPIUpdate(body)

Updates the given SimplifiedPropensityToAdverseReaction

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalSimplifiedPropensityToAdverseReactionApi();
let body = new NedapOnsApi.DossierMedicalSimplifiedPropensityToAdverseReaction(); // DossierMedicalSimplifiedPropensityToAdverseReaction | SimplifiedPropensityToAdverseReaction to update

apiInstance.dossierMedicalSimplifiedPropensityToAdverseReactionAPIUpdate(body, (error, data, response) => {
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
 **body** | [**DossierMedicalSimplifiedPropensityToAdverseReaction**](DossierMedicalSimplifiedPropensityToAdverseReaction.md)| SimplifiedPropensityToAdverseReaction to update | 

### Return type

[**DossierMedicalSimplifiedPropensityToAdverseReaction**](DossierMedicalSimplifiedPropensityToAdverseReaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

