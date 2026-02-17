# NedapOnsApi.MovesTeamApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**movesTeamAPIAll**](MovesTeamApi.md#movesTeamAPIAll) | **GET** /v0/plannen_roosteren/units | Return all Teams used for planning and rostering ( also known as a unit ). Every unit (mostly) corresponds to a team in Ons Administration  (however, it is possible to have a unit used for planning and rostering that is not connected to an administrative team).
[**movesTeamAPIById**](MovesTeamApi.md#movesTeamAPIById) | **GET** /v0/plannen_roosteren/units/{unit_id} | Return the team used for planning and rostering (also known as a unit) for the given unit Identifier. Every unit (mostly) corresponds to a team in Ons Administration  (however, it is possible to have a unit used for planning and rostering that is not connected to an administrative team).
[**movesTeamAPIRelevantClientsByUnitId**](MovesTeamApi.md#movesTeamAPIRelevantClientsByUnitId) | **GET** /v0/plannen_roosteren/units/{unit_id}/clients | Return a list of relevant clients for the team, for given start and end date.

<a name="movesTeamAPIAll"></a>
# **movesTeamAPIAll**
> MovesListTeamList movesTeamAPIAll()

Return all Teams used for planning and rostering ( also known as a unit ). Every unit (mostly) corresponds to a team in Ons Administration  (however, it is possible to have a unit used for planning and rostering that is not connected to an administrative team).

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesTeamApi();
apiInstance.movesTeamAPIAll((error, data, response) => {
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

[**MovesListTeamList**](MovesListTeamList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="movesTeamAPIById"></a>
# **movesTeamAPIById**
> MovesTeam movesTeamAPIById(unitId)

Return the team used for planning and rostering (also known as a unit) for the given unit Identifier. Every unit (mostly) corresponds to a team in Ons Administration  (however, it is possible to have a unit used for planning and rostering that is not connected to an administrative team).

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesTeamApi();
let unitId = 789; // Number | The unit identifier of the requested Team

apiInstance.movesTeamAPIById(unitId, (error, data, response) => {
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
 **unitId** | **Number**| The unit identifier of the requested Team | 

### Return type

[**MovesTeam**](MovesTeam.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="movesTeamAPIRelevantClientsByUnitId"></a>
# **movesTeamAPIRelevantClientsByUnitId**
> MovesListClientList movesTeamAPIRelevantClientsByUnitId(unitId, opts)

Return a list of relevant clients for the team, for given start and end date.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesTeamApi();
let unitId = 789; // Number | The unit identifier for the requested team.
let opts = { 
  'from': new Date("2013-10-20"), // Date | The from-date for which to check. Defaults to last Monday. The maximum period is 6 weeks.
  'to': "to_example" // String | The to-date for which to check. Defaults to next Monday. The maximum period is 6 weeks.
};
apiInstance.movesTeamAPIRelevantClientsByUnitId(unitId, opts, (error, data, response) => {
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
 **unitId** | **Number**| The unit identifier for the requested team. | 
 **from** | **Date**| The from-date for which to check. Defaults to last Monday. The maximum period is 6 weeks. | [optional] 
 **to** | **String**| The to-date for which to check. Defaults to next Monday. The maximum period is 6 weeks. | [optional] 

### Return type

[**MovesListClientList**](MovesListClientList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

