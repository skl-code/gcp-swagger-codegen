# NedapOnsApi.DossierEpisodesSubGoalApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierEpisodesSubGoalAPIByEpisodeId**](DossierEpisodesSubGoalApi.md#dossierEpisodesSubGoalAPIByEpisodeId) | **GET** /v0/dossier/back_channel/unauthorized/episodes/sub_goals/by_episode_id/{episode_id} | Gets all the sub goals for the specified episode ID
[**dossierEpisodesSubGoalAPICreate**](DossierEpisodesSubGoalApi.md#dossierEpisodesSubGoalAPICreate) | **POST** /v0/dossier/back_channel/unauthorized/episodes/sub_goals | Create SubGoal
[**dossierEpisodesSubGoalAPIPatch**](DossierEpisodesSubGoalApi.md#dossierEpisodesSubGoalAPIPatch) | **PATCH** /v0/dossier/back_channel/unauthorized/episodes/sub_goals/{id} | Patches SubGoal with given id
[**dossierEpisodesSubGoalAPIUpdate**](DossierEpisodesSubGoalApi.md#dossierEpisodesSubGoalAPIUpdate) | **PUT** /v0/dossier/back_channel/unauthorized/episodes/sub_goals/{id} | Updates the given SubGoal

<a name="dossierEpisodesSubGoalAPIByEpisodeId"></a>
# **dossierEpisodesSubGoalAPIByEpisodeId**
> DossierEpisodesListSubGoalList dossierEpisodesSubGoalAPIByEpisodeId(episodeId)

Gets all the sub goals for the specified episode ID

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierEpisodesSubGoalApi();
let episodeId = 789; // Number | The ID of the episode for which to fetch SubGoals

apiInstance.dossierEpisodesSubGoalAPIByEpisodeId(episodeId, (error, data, response) => {
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
 **episodeId** | **Number**| The ID of the episode for which to fetch SubGoals | 

### Return type

[**DossierEpisodesListSubGoalList**](DossierEpisodesListSubGoalList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierEpisodesSubGoalAPICreate"></a>
# **dossierEpisodesSubGoalAPICreate**
> DossierEpisodesSubGoal dossierEpisodesSubGoalAPICreate(body)

Create SubGoal

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierEpisodesSubGoalApi();
let body = new NedapOnsApi.DossierEpisodesSubGoal(); // DossierEpisodesSubGoal | SubGoal to create

apiInstance.dossierEpisodesSubGoalAPICreate(body, (error, data, response) => {
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
 **body** | [**DossierEpisodesSubGoal**](DossierEpisodesSubGoal.md)| SubGoal to create | 

### Return type

[**DossierEpisodesSubGoal**](DossierEpisodesSubGoal.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierEpisodesSubGoalAPIPatch"></a>
# **dossierEpisodesSubGoalAPIPatch**
> DossierEpisodesSubGoal dossierEpisodesSubGoalAPIPatch(body, id)

Patches SubGoal with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierEpisodesSubGoalApi();
let body = new NedapOnsApi.DossierEpisodesSubGoal(); // DossierEpisodesSubGoal | 
let id = 789; // Number | 

apiInstance.dossierEpisodesSubGoalAPIPatch(body, id, (error, data, response) => {
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
 **body** | [**DossierEpisodesSubGoal**](DossierEpisodesSubGoal.md)|  | 
 **id** | **Number**|  | 

### Return type

[**DossierEpisodesSubGoal**](DossierEpisodesSubGoal.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierEpisodesSubGoalAPIUpdate"></a>
# **dossierEpisodesSubGoalAPIUpdate**
> DossierEpisodesSubGoal dossierEpisodesSubGoalAPIUpdate(body, id)

Updates the given SubGoal

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierEpisodesSubGoalApi();
let body = new NedapOnsApi.DossierEpisodesSubGoal(); // DossierEpisodesSubGoal | SubGoal to update
let id = 789; // Number | Identifier of SubGoal to update.

apiInstance.dossierEpisodesSubGoalAPIUpdate(body, id, (error, data, response) => {
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
 **body** | [**DossierEpisodesSubGoal**](DossierEpisodesSubGoal.md)| SubGoal to update | 
 **id** | **Number**| Identifier of SubGoal to update. | 

### Return type

[**DossierEpisodesSubGoal**](DossierEpisodesSubGoal.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

