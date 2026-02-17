# NedapOnsApi.DossierEpisodesEpisodeApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierEpisodesEpisodeAPIByClientId**](DossierEpisodesEpisodeApi.md#dossierEpisodesEpisodeAPIByClientId) | **GET** /v0/dossier/back_channel/unauthorized/episodes/by_client_id/{client_id} | Gets all the episodes for the specified client ID
[**dossierEpisodesEpisodeAPIById**](DossierEpisodesEpisodeApi.md#dossierEpisodesEpisodeAPIById) | **GET** /v0/dossier/back_channel/unauthorized/episodes/{id} | Gets the episode with the specified ID
[**dossierEpisodesEpisodeAPICreate**](DossierEpisodesEpisodeApi.md#dossierEpisodesEpisodeAPICreate) | **POST** /v0/dossier/back_channel/unauthorized/episodes | Create Episode
[**dossierEpisodesEpisodeAPIPatch**](DossierEpisodesEpisodeApi.md#dossierEpisodesEpisodeAPIPatch) | **PATCH** /v0/dossier/back_channel/unauthorized/episodes/{id} | Patches Episode with given id
[**dossierEpisodesEpisodeAPIUpdate**](DossierEpisodesEpisodeApi.md#dossierEpisodesEpisodeAPIUpdate) | **PUT** /v0/dossier/back_channel/unauthorized/episodes/{id} | Updates the given Episode

<a name="dossierEpisodesEpisodeAPIByClientId"></a>
# **dossierEpisodesEpisodeAPIByClientId**
> DossierEpisodesListEpisodeList dossierEpisodesEpisodeAPIByClientId(clientId)

Gets all the episodes for the specified client ID

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierEpisodesEpisodeApi();
let clientId = 789; // Number | 

apiInstance.dossierEpisodesEpisodeAPIByClientId(clientId, (error, data, response) => {
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

### Return type

[**DossierEpisodesListEpisodeList**](DossierEpisodesListEpisodeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierEpisodesEpisodeAPIById"></a>
# **dossierEpisodesEpisodeAPIById**
> DossierEpisodesEpisode dossierEpisodesEpisodeAPIById(id)

Gets the episode with the specified ID

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierEpisodesEpisodeApi();
let id = 789; // Number | used for selecting Episode

apiInstance.dossierEpisodesEpisodeAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting Episode | 

### Return type

[**DossierEpisodesEpisode**](DossierEpisodesEpisode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierEpisodesEpisodeAPICreate"></a>
# **dossierEpisodesEpisodeAPICreate**
> DossierEpisodesEpisode dossierEpisodesEpisodeAPICreate(body)

Create Episode

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierEpisodesEpisodeApi();
let body = new NedapOnsApi.DossierEpisodesEpisode(); // DossierEpisodesEpisode | Episode to create

apiInstance.dossierEpisodesEpisodeAPICreate(body, (error, data, response) => {
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
 **body** | [**DossierEpisodesEpisode**](DossierEpisodesEpisode.md)| Episode to create | 

### Return type

[**DossierEpisodesEpisode**](DossierEpisodesEpisode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierEpisodesEpisodeAPIPatch"></a>
# **dossierEpisodesEpisodeAPIPatch**
> DossierEpisodesEpisode dossierEpisodesEpisodeAPIPatch(body, id)

Patches Episode with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierEpisodesEpisodeApi();
let body = new NedapOnsApi.DossierEpisodesEpisode(); // DossierEpisodesEpisode | 
let id = 789; // Number | 

apiInstance.dossierEpisodesEpisodeAPIPatch(body, id, (error, data, response) => {
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
 **body** | [**DossierEpisodesEpisode**](DossierEpisodesEpisode.md)|  | 
 **id** | **Number**|  | 

### Return type

[**DossierEpisodesEpisode**](DossierEpisodesEpisode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierEpisodesEpisodeAPIUpdate"></a>
# **dossierEpisodesEpisodeAPIUpdate**
> DossierEpisodesEpisode dossierEpisodesEpisodeAPIUpdate(body, id)

Updates the given Episode

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierEpisodesEpisodeApi();
let body = new NedapOnsApi.DossierEpisodesEpisode(); // DossierEpisodesEpisode | Episode to update
let id = 789; // Number | Identifier of Episode to update.

apiInstance.dossierEpisodesEpisodeAPIUpdate(body, id, (error, data, response) => {
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
 **body** | [**DossierEpisodesEpisode**](DossierEpisodesEpisode.md)| Episode to update | 
 **id** | **Number**| Identifier of Episode to update. | 

### Return type

[**DossierEpisodesEpisode**](DossierEpisodesEpisode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

