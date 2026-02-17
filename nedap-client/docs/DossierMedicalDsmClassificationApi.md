# NedapOnsApi.DossierMedicalDsmClassificationApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierMedicalDsmClassificationAPIAll**](DossierMedicalDsmClassificationApi.md#dossierMedicalDsmClassificationAPIAll) | **GET** /v0/dossier/back_channel/unauthorized/medical/dsm/classifications | Returns every Classification available from the ClassificationAPI
[**dossierMedicalDsmClassificationAPIById**](DossierMedicalDsmClassificationApi.md#dossierMedicalDsmClassificationAPIById) | **GET** /v0/dossier/back_channel/unauthorized/medical/dsm/classifications/{id} | Gets the DSM classification for the specified ID

<a name="dossierMedicalDsmClassificationAPIAll"></a>
# **dossierMedicalDsmClassificationAPIAll**
> DossierMedicalDsmListClassificationList dossierMedicalDsmClassificationAPIAll()

Returns every Classification available from the ClassificationAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalDsmClassificationApi();
apiInstance.dossierMedicalDsmClassificationAPIAll((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DossierMedicalDsmListClassificationList**](DossierMedicalDsmListClassificationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierMedicalDsmClassificationAPIById"></a>
# **dossierMedicalDsmClassificationAPIById**
> DossierMedicalDsmClassification dossierMedicalDsmClassificationAPIById(id)

Gets the DSM classification for the specified ID

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalDsmClassificationApi();
let id = 789; // Number | used for selecting Classification

apiInstance.dossierMedicalDsmClassificationAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting Classification | 

### Return type

[**DossierMedicalDsmClassification**](DossierMedicalDsmClassification.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

