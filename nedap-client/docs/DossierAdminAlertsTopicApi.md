# NedapOnsApi.DossierAdminAlertsTopicApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierAdminAlertsTopicAPIAll**](DossierAdminAlertsTopicApi.md#dossierAdminAlertsTopicAPIAll) | **GET** /v0/dossier/back_channel/authorized/admin/alerts/topics | Get every topic
[**dossierAdminAlertsTopicAPIById**](DossierAdminAlertsTopicApi.md#dossierAdminAlertsTopicAPIById) | **GET** /v0/dossier/back_channel/authorized/admin/alerts/topics/{id} | Get a specific topic
[**dossierAdminAlertsTopicAPICreate**](DossierAdminAlertsTopicApi.md#dossierAdminAlertsTopicAPICreate) | **POST** /v0/dossier/back_channel/authorized/admin/alerts/topics | Create an alert topic
[**dossierAdminAlertsTopicAPIDelete**](DossierAdminAlertsTopicApi.md#dossierAdminAlertsTopicAPIDelete) | **DELETE** /v0/dossier/back_channel/authorized/admin/alerts/topics/{id} | Deletes the Topic with given id
[**dossierAdminAlertsTopicAPIUpdate**](DossierAdminAlertsTopicApi.md#dossierAdminAlertsTopicAPIUpdate) | **PUT** /v0/dossier/back_channel/authorized/admin/alerts/topics/{id} | Update the given Topic

<a name="dossierAdminAlertsTopicAPIAll"></a>
# **dossierAdminAlertsTopicAPIAll**
> DossierAdminAlertsListTopicList dossierAdminAlertsTopicAPIAll()

Get every topic

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierAdminAlertsTopicApi();
apiInstance.dossierAdminAlertsTopicAPIAll((error, data, response) => {
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

[**DossierAdminAlertsListTopicList**](DossierAdminAlertsListTopicList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierAdminAlertsTopicAPIById"></a>
# **dossierAdminAlertsTopicAPIById**
> DossierAdminAlertsTopic dossierAdminAlertsTopicAPIById(id)

Get a specific topic

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierAdminAlertsTopicApi();
let id = 789; // Number | 

apiInstance.dossierAdminAlertsTopicAPIById(id, (error, data, response) => {
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

[**DossierAdminAlertsTopic**](DossierAdminAlertsTopic.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierAdminAlertsTopicAPICreate"></a>
# **dossierAdminAlertsTopicAPICreate**
> DossierAdminAlertsTopic dossierAdminAlertsTopicAPICreate(body)

Create an alert topic

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierAdminAlertsTopicApi();
let body = new NedapOnsApi.DossierAdminAlertsTopic(); // DossierAdminAlertsTopic | Topic to create

apiInstance.dossierAdminAlertsTopicAPICreate(body, (error, data, response) => {
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
 **body** | [**DossierAdminAlertsTopic**](DossierAdminAlertsTopic.md)| Topic to create | 

### Return type

[**DossierAdminAlertsTopic**](DossierAdminAlertsTopic.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierAdminAlertsTopicAPIDelete"></a>
# **dossierAdminAlertsTopicAPIDelete**
> dossierAdminAlertsTopicAPIDelete(id)

Deletes the Topic with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierAdminAlertsTopicApi();
let id = 789; // Number | Identifier of Topic to delete.

apiInstance.dossierAdminAlertsTopicAPIDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Identifier of Topic to delete. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="dossierAdminAlertsTopicAPIUpdate"></a>
# **dossierAdminAlertsTopicAPIUpdate**
> DossierAdminAlertsTopic dossierAdminAlertsTopicAPIUpdate(body, id)

Update the given Topic

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierAdminAlertsTopicApi();
let body = new NedapOnsApi.DossierAdminAlertsTopic(); // DossierAdminAlertsTopic | Topic to update
let id = 789; // Number | Identifier of Topic to update.

apiInstance.dossierAdminAlertsTopicAPIUpdate(body, id, (error, data, response) => {
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
 **body** | [**DossierAdminAlertsTopic**](DossierAdminAlertsTopic.md)| Topic to update | 
 **id** | **Number**| Identifier of Topic to update. | 

### Return type

[**DossierAdminAlertsTopic**](DossierAdminAlertsTopic.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

