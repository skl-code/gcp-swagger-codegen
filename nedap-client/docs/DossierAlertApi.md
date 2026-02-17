# NedapOnsApi.DossierAlertApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierAlertAPIById**](DossierAlertApi.md#dossierAlertAPIById) | **GET** /v0/dossier/back_channel/authorized/alerts/{id} | Get a specific Alert
[**dossierAlertAPICreate**](DossierAlertApi.md#dossierAlertAPICreate) | **POST** /v0/dossier/back_channel/authorized/alerts | Create an alert
[**dossierAlertAPIUnauthorizedByClientIds**](DossierAlertApi.md#dossierAlertAPIUnauthorizedByClientIds) | **GET** /v0/dossier/back_channel/unauthorized/alerts/by_client_ids | Get a specific Alert
[**dossierAlertAPIUnauthorizedById**](DossierAlertApi.md#dossierAlertAPIUnauthorizedById) | **GET** /v0/dossier/back_channel/unauthorized/alerts/{id} | Get a specific Alert
[**dossierAlertAPIUpdate**](DossierAlertApi.md#dossierAlertAPIUpdate) | **PUT** /v0/dossier/back_channel/authorized/alerts/{id} | Update the given Alert

<a name="dossierAlertAPIById"></a>
# **dossierAlertAPIById**
> DossierAlert dossierAlertAPIById(id)

Get a specific Alert

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierAlertApi();
let id = 789; // Number | 

apiInstance.dossierAlertAPIById(id, (error, data, response) => {
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
 **id** | **Number**|  | 

### Return type

[**DossierAlert**](DossierAlert.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierAlertAPICreate"></a>
# **dossierAlertAPICreate**
> DossierAlert dossierAlertAPICreate(body)

Create an alert

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierAlertApi();
let body = new NedapOnsApi.DossierAlert(); // DossierAlert | Alert to create

apiInstance.dossierAlertAPICreate(body, (error, data, response) => {
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
 **body** | [**DossierAlert**](DossierAlert.md)| Alert to create | 

### Return type

[**DossierAlert**](DossierAlert.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierAlertAPIUnauthorizedByClientIds"></a>
# **dossierAlertAPIUnauthorizedByClientIds**
> DossierListAlertList dossierAlertAPIUnauthorizedByClientIds(ids)

Get a specific Alert

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierAlertApi();
let ids = [3.4]; // [Number] | The ids of the clients (ids[]=1&ids[]=2&ids[]=3...)

apiInstance.dossierAlertAPIUnauthorizedByClientIds(ids, (error, data, response) => {
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
 **ids** | [**[Number]**](Number.md)| The ids of the clients (ids[]&#x3D;1&amp;ids[]&#x3D;2&amp;ids[]&#x3D;3...) | 

### Return type

[**DossierListAlertList**](DossierListAlertList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierAlertAPIUnauthorizedById"></a>
# **dossierAlertAPIUnauthorizedById**
> DossierAlert dossierAlertAPIUnauthorizedById(id)

Get a specific Alert

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierAlertApi();
let id = 789; // Number | 

apiInstance.dossierAlertAPIUnauthorizedById(id, (error, data, response) => {
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
 **id** | **Number**|  | 

### Return type

[**DossierAlert**](DossierAlert.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierAlertAPIUpdate"></a>
# **dossierAlertAPIUpdate**
> DossierAlert dossierAlertAPIUpdate(body, id)

Update the given Alert

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierAlertApi();
let body = new NedapOnsApi.DossierAlert(); // DossierAlert | Alert to update
let id = 789; // Number | Identifier of Alert to update.

apiInstance.dossierAlertAPIUpdate(body, id, (error, data, response) => {
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
 **body** | [**DossierAlert**](DossierAlert.md)| Alert to update | 
 **id** | **Number**| Identifier of Alert to update. | 

### Return type

[**DossierAlert**](DossierAlert.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

