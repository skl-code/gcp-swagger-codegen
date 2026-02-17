# NedapOnsApi.DossierEpisodesActionApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierEpisodesActionAPIByEpisodeId**](DossierEpisodesActionApi.md#dossierEpisodesActionAPIByEpisodeId) | **GET** /v0/dossier/back_channel/unauthorized/episodes/actions/by_episode_id/{episode_id} | Gets all the actions for the specified episode ID
[**dossierEpisodesActionAPIBySubGoalId**](DossierEpisodesActionApi.md#dossierEpisodesActionAPIBySubGoalId) | **GET** /v0/dossier/back_channel/unauthorized/episodes/actions/by_sub_goal_id/{sub_goal_id} | Gets alls the actions for the specified episode sub goal ID
[**dossierEpisodesActionAPICreate**](DossierEpisodesActionApi.md#dossierEpisodesActionAPICreate) | **POST** /v0/dossier/back_channel/unauthorized/episodes/actions | Create Action
[**dossierEpisodesActionAPIPatch**](DossierEpisodesActionApi.md#dossierEpisodesActionAPIPatch) | **PATCH** /v0/dossier/back_channel/unauthorized/episodes/actions/{id} | Patches Action with given id
[**dossierEpisodesActionAPIUpdate**](DossierEpisodesActionApi.md#dossierEpisodesActionAPIUpdate) | **PUT** /v0/dossier/back_channel/unauthorized/episodes/actions/{id} | Updates the given Action

<a name="dossierEpisodesActionAPIByEpisodeId"></a>
# **dossierEpisodesActionAPIByEpisodeId**
> DossierEpisodesListActionList dossierEpisodesActionAPIByEpisodeId(episodeId)

Gets all the actions for the specified episode ID

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierEpisodesActionApi();
let episodeId = 789; // Number | The ID of the episode for which to fetch actions

apiInstance.dossierEpisodesActionAPIByEpisodeId(episodeId, (error, data, response) => {
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
 **episodeId** | **Number**| The ID of the episode for which to fetch actions | 

### Return type

[**DossierEpisodesListActionList**](DossierEpisodesListActionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierEpisodesActionAPIBySubGoalId"></a>
# **dossierEpisodesActionAPIBySubGoalId**
> DossierEpisodesListActionList dossierEpisodesActionAPIBySubGoalId(subGoalId)

Gets alls the actions for the specified episode sub goal ID

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierEpisodesActionApi();
let subGoalId = 789; // Number | The ID of the subgoal for which to fetch actions

apiInstance.dossierEpisodesActionAPIBySubGoalId(subGoalId, (error, data, response) => {
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
 **subGoalId** | **Number**| The ID of the subgoal for which to fetch actions | 

### Return type

[**DossierEpisodesListActionList**](DossierEpisodesListActionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierEpisodesActionAPICreate"></a>
# **dossierEpisodesActionAPICreate**
> DossierEpisodesAction dossierEpisodesActionAPICreate(body)

Create Action

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierEpisodesActionApi();
let body = new NedapOnsApi.DossierEpisodesAction(); // DossierEpisodesAction | Action to create

apiInstance.dossierEpisodesActionAPICreate(body, (error, data, response) => {
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
 **body** | [**DossierEpisodesAction**](DossierEpisodesAction.md)| Action to create | 

### Return type

[**DossierEpisodesAction**](DossierEpisodesAction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierEpisodesActionAPIPatch"></a>
# **dossierEpisodesActionAPIPatch**
> DossierEpisodesAction dossierEpisodesActionAPIPatch(body, id)

Patches Action with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierEpisodesActionApi();
let body = new NedapOnsApi.DossierEpisodesAction(); // DossierEpisodesAction | 
let id = 789; // Number | 

apiInstance.dossierEpisodesActionAPIPatch(body, id, (error, data, response) => {
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
 **body** | [**DossierEpisodesAction**](DossierEpisodesAction.md)|  | 
 **id** | **Number**|  | 

### Return type

[**DossierEpisodesAction**](DossierEpisodesAction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierEpisodesActionAPIUpdate"></a>
# **dossierEpisodesActionAPIUpdate**
> DossierEpisodesAction dossierEpisodesActionAPIUpdate(body, id)

Updates the given Action

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierEpisodesActionApi();
let body = new NedapOnsApi.DossierEpisodesAction(); // DossierEpisodesAction | Action to update
let id = 789; // Number | Identifier of Action to update.

apiInstance.dossierEpisodesActionAPIUpdate(body, id, (error, data, response) => {
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
 **body** | [**DossierEpisodesAction**](DossierEpisodesAction.md)| Action to update | 
 **id** | **Number**| Identifier of Action to update. | 

### Return type

[**DossierEpisodesAction**](DossierEpisodesAction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

