# NedapOnsApi.DossierMedicalDsmClassificationSeriesApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierMedicalDsmClassificationSeriesAPIByClientAndCareOrder**](DossierMedicalDsmClassificationSeriesApi.md#dossierMedicalDsmClassificationSeriesAPIByClientAndCareOrder) | **GET** /v0/dossier/back_channel/unauthorized/clients/{client_id}/medical/dsm/classification_series | Gets the DSM classification series for the given client, optionally filtered by the care order that is linked to the series
[**dossierMedicalDsmClassificationSeriesAPIById**](DossierMedicalDsmClassificationSeriesApi.md#dossierMedicalDsmClassificationSeriesAPIById) | **GET** /v0/dossier/back_channel/unauthorized/medical/dsm/classification_series/{id} | Gets the DSM classification series for the specified ID
[**dossierMedicalDsmClassificationSeriesAPICreate**](DossierMedicalDsmClassificationSeriesApi.md#dossierMedicalDsmClassificationSeriesAPICreate) | **POST** /v0/dossier/back_channel/unauthorized/medical/dsm/classification_series | Create ClassificationSeries
[**dossierMedicalDsmClassificationSeriesAPIDiagnosisAssignments**](DossierMedicalDsmClassificationSeriesApi.md#dossierMedicalDsmClassificationSeriesAPIDiagnosisAssignments) | **GET** /v0/dossier/back_channel/unauthorized/medical/dsm/classification_series/{classification_series_id}/diagnosis_assignments | Gets all the diagnosis assignments for the specified DSM classification series ID

<a name="dossierMedicalDsmClassificationSeriesAPIByClientAndCareOrder"></a>
# **dossierMedicalDsmClassificationSeriesAPIByClientAndCareOrder**
> DossierMedicalDsmListClassificationSeriesList dossierMedicalDsmClassificationSeriesAPIByClientAndCareOrder(clientId, opts)

Gets the DSM classification series for the given client, optionally filtered by the care order that is linked to the series

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalDsmClassificationSeriesApi();
let clientId = 789; // Number | 
let opts = { 
  'careOrderId': 789, // Number | 
  'onlyCurrent': false // Boolean | 
};
apiInstance.dossierMedicalDsmClassificationSeriesAPIByClientAndCareOrder(clientId, opts, (error, data, response) => {
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
 **careOrderId** | **Number**|  | [optional] 
 **onlyCurrent** | **Boolean**|  | [optional] [default to false]

### Return type

[**DossierMedicalDsmListClassificationSeriesList**](DossierMedicalDsmListClassificationSeriesList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierMedicalDsmClassificationSeriesAPIById"></a>
# **dossierMedicalDsmClassificationSeriesAPIById**
> DossierMedicalDsmClassificationSeries dossierMedicalDsmClassificationSeriesAPIById(id)

Gets the DSM classification series for the specified ID

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalDsmClassificationSeriesApi();
let id = 789; // Number | used for selecting ClassificationSeries

apiInstance.dossierMedicalDsmClassificationSeriesAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting ClassificationSeries | 

### Return type

[**DossierMedicalDsmClassificationSeries**](DossierMedicalDsmClassificationSeries.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierMedicalDsmClassificationSeriesAPICreate"></a>
# **dossierMedicalDsmClassificationSeriesAPICreate**
> DossierMedicalDsmClassificationSeries dossierMedicalDsmClassificationSeriesAPICreate(body)

Create ClassificationSeries

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalDsmClassificationSeriesApi();
let body = new NedapOnsApi.DossierMedicalDsmClassificationSeries(); // DossierMedicalDsmClassificationSeries | ClassificationSeries to create

apiInstance.dossierMedicalDsmClassificationSeriesAPICreate(body, (error, data, response) => {
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
 **body** | [**DossierMedicalDsmClassificationSeries**](DossierMedicalDsmClassificationSeries.md)| ClassificationSeries to create | 

### Return type

[**DossierMedicalDsmClassificationSeries**](DossierMedicalDsmClassificationSeries.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierMedicalDsmClassificationSeriesAPIDiagnosisAssignments"></a>
# **dossierMedicalDsmClassificationSeriesAPIDiagnosisAssignments**
> DbcGgzListDiagnoseToekenningList dossierMedicalDsmClassificationSeriesAPIDiagnosisAssignments(classificationSeriesId)

Gets all the diagnosis assignments for the specified DSM classification series ID

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierMedicalDsmClassificationSeriesApi();
let classificationSeriesId = 789; // Number | The ID of the DSM classification series to get diagnosis assignments for

apiInstance.dossierMedicalDsmClassificationSeriesAPIDiagnosisAssignments(classificationSeriesId, (error, data, response) => {
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
 **classificationSeriesId** | **Number**| The ID of the DSM classification series to get diagnosis assignments for | 

### Return type

[**DbcGgzListDiagnoseToekenningList**](DbcGgzListDiagnoseToekenningList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

