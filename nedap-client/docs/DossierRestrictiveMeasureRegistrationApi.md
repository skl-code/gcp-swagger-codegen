# NedapOnsApi.DossierRestrictiveMeasureRegistrationApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierRestrictiveMeasureRegistrationAPIByClientId**](DossierRestrictiveMeasureRegistrationApi.md#dossierRestrictiveMeasureRegistrationAPIByClientId) | **GET** /v0/dossier/back_channel/unauthorized/clients/{client_id}/care_plan/restrictive_measure_registrations | Get the registrations by client
[**dossierRestrictiveMeasureRegistrationAPICreate**](DossierRestrictiveMeasureRegistrationApi.md#dossierRestrictiveMeasureRegistrationAPICreate) | **POST** /v0/dossier/back_channel/unauthorized/care_plan/restrictive_measure_registrations | Create RestrictiveMeasureRegistration
[**dossierRestrictiveMeasureRegistrationAPIUpdate**](DossierRestrictiveMeasureRegistrationApi.md#dossierRestrictiveMeasureRegistrationAPIUpdate) | **PUT** /v0/dossier/back_channel/unauthorized/care_plan/restrictive_measure_registrations/{id} | Update RestrictiveMeasureRegistration

<a name="dossierRestrictiveMeasureRegistrationAPIByClientId"></a>
# **dossierRestrictiveMeasureRegistrationAPIByClientId**
> DossierListRestrictiveMeasureRegistrationList dossierRestrictiveMeasureRegistrationAPIByClientId(clientId)

Get the registrations by client

Find restrictive measure registrations by client id. When the client is not found this will return an empty list.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierRestrictiveMeasureRegistrationApi();
let clientId = 789; // Number | The client id for which to get the registrations

apiInstance.dossierRestrictiveMeasureRegistrationAPIByClientId(clientId, (error, data, response) => {
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
 **clientId** | **Number**| The client id for which to get the registrations | 

### Return type

[**DossierListRestrictiveMeasureRegistrationList**](DossierListRestrictiveMeasureRegistrationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierRestrictiveMeasureRegistrationAPICreate"></a>
# **dossierRestrictiveMeasureRegistrationAPICreate**
> DossierRestrictiveMeasureRegistration dossierRestrictiveMeasureRegistrationAPICreate(body)

Create RestrictiveMeasureRegistration

Create restrictive measure registration

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierRestrictiveMeasureRegistrationApi();
let body = new NedapOnsApi.DossierRestrictiveMeasureRegistration(); // DossierRestrictiveMeasureRegistration | RestrictiveMeasureRegistration to create

apiInstance.dossierRestrictiveMeasureRegistrationAPICreate(body, (error, data, response) => {
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
 **body** | [**DossierRestrictiveMeasureRegistration**](DossierRestrictiveMeasureRegistration.md)| RestrictiveMeasureRegistration to create | 

### Return type

[**DossierRestrictiveMeasureRegistration**](DossierRestrictiveMeasureRegistration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierRestrictiveMeasureRegistrationAPIUpdate"></a>
# **dossierRestrictiveMeasureRegistrationAPIUpdate**
> DossierRestrictiveMeasureRegistration dossierRestrictiveMeasureRegistrationAPIUpdate(body, id)

Update RestrictiveMeasureRegistration

Update restrictive measure registration

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierRestrictiveMeasureRegistrationApi();
let body = new NedapOnsApi.DossierRestrictiveMeasureRegistration(); // DossierRestrictiveMeasureRegistration | RestrictiveMeasureRegistration to update
let id = 789; // Number | used for updating RestrictiveMeasureRegistration

apiInstance.dossierRestrictiveMeasureRegistrationAPIUpdate(body, id, (error, data, response) => {
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
 **body** | [**DossierRestrictiveMeasureRegistration**](DossierRestrictiveMeasureRegistration.md)| RestrictiveMeasureRegistration to update | 
 **id** | **Number**| used for updating RestrictiveMeasureRegistration | 

### Return type

[**DossierRestrictiveMeasureRegistration**](DossierRestrictiveMeasureRegistration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

