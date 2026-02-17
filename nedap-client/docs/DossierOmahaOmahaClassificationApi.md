# NedapOnsApi.DossierOmahaOmahaClassificationApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierOmahaOmahaClassificationAPIById**](DossierOmahaOmahaClassificationApi.md#dossierOmahaOmahaClassificationAPIById) | **GET** /v0/administration/omaha/classifications/{id} | Get the OmahaClassification corresponding to the given id
[**dossierOmahaOmahaClassificationAPIBySurveyResult**](DossierOmahaOmahaClassificationApi.md#dossierOmahaOmahaClassificationAPIBySurveyResult) | **GET** /v0/administration/omaha/classifications/by_survey_result/{survey_result_id} | 
[**dossierOmahaOmahaClassificationAPINewDraft**](DossierOmahaOmahaClassificationApi.md#dossierOmahaOmahaClassificationAPINewDraft) | **POST** /v0/administration/omaha/classifications/by_client/{client_id}/new | Create an OmahaClassification for the Client corresponding to the given id
[**dossierOmahaOmahaClassificationAPIUpdate**](DossierOmahaOmahaClassificationApi.md#dossierOmahaOmahaClassificationAPIUpdate) | **PUT** /v0/administration/omaha/classifications/{id} | Updates the given OmahaClassification

<a name="dossierOmahaOmahaClassificationAPIById"></a>
# **dossierOmahaOmahaClassificationAPIById**
> DossierOmahaOmahaClassification dossierOmahaOmahaClassificationAPIById(id, opts)

Get the OmahaClassification corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierOmahaOmahaClassificationApi();
let id = "id_example"; // String | used for selecting OmahaClassification
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierOmahaOmahaClassificationAPIById(id, opts, (error, data, response) => {
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
 **id** | **String**| used for selecting OmahaClassification | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierOmahaOmahaClassification**](DossierOmahaOmahaClassification.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierOmahaOmahaClassificationAPIBySurveyResult"></a>
# **dossierOmahaOmahaClassificationAPIBySurveyResult**
> DossierOmahaOmahaClassification dossierOmahaOmahaClassificationAPIBySurveyResult(surveyResultId)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierOmahaOmahaClassificationApi();
let surveyResultId = 789; // Number | 

apiInstance.dossierOmahaOmahaClassificationAPIBySurveyResult(surveyResultId, (error, data, response) => {
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
 **surveyResultId** | **Number**|  | 

### Return type

[**DossierOmahaOmahaClassification**](DossierOmahaOmahaClassification.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierOmahaOmahaClassificationAPINewDraft"></a>
# **dossierOmahaOmahaClassificationAPINewDraft**
> DossierOmahaOmahaClassification dossierOmahaOmahaClassificationAPINewDraft(clientId, opts)

Create an OmahaClassification for the Client corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierOmahaOmahaClassificationApi();
let clientId = 789; // Number | 
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierOmahaOmahaClassificationAPINewDraft(clientId, opts, (error, data, response) => {
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
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierOmahaOmahaClassification**](DossierOmahaOmahaClassification.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierOmahaOmahaClassificationAPIUpdate"></a>
# **dossierOmahaOmahaClassificationAPIUpdate**
> DossierOmahaOmahaClassification dossierOmahaOmahaClassificationAPIUpdate(body, id, opts)

Updates the given OmahaClassification

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierOmahaOmahaClassificationApi();
let body = new NedapOnsApi.DossierOmahaOmahaClassification(); // DossierOmahaOmahaClassification | OmahaClassification to update
let id = "id_example"; // String | used for selecting OmahaClassification
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierOmahaOmahaClassificationAPIUpdate(body, id, opts, (error, data, response) => {
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
 **body** | [**DossierOmahaOmahaClassification**](DossierOmahaOmahaClassification.md)| OmahaClassification to update | 
 **id** | **String**| used for selecting OmahaClassification | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierOmahaOmahaClassification**](DossierOmahaOmahaClassification.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

