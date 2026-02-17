# NedapOnsApi.MovesRosterSlotApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**movesRosterSlotAPIAssign**](MovesRosterSlotApi.md#movesRosterSlotAPIAssign) | **POST** /v0/plannen_roosteren/roster_slots/{roster_slot_id}/assign | Assigns a RosterSlot to an Employee by creating a ShiftAssignment for it.
[**movesRosterSlotAPIById**](MovesRosterSlotApi.md#movesRosterSlotAPIById) | **GET** /v0/plannen_roosteren/roster_slots/{id} | Return the roster slot with the specified id.
[**movesRosterSlotAPIByTeamId**](MovesRosterSlotApi.md#movesRosterSlotAPIByTeamId) | **GET** /v0/plannen_roosteren/teams/{team_id}/rosterslots | Return the roster slots of a Team within the specified period. Slots which are incidentally changed in time contain a ShiftAssignment with the adjusted times and no employee.
[**movesRosterSlotAPIByUnitAndPeriod**](MovesRosterSlotApi.md#movesRosterSlotAPIByUnitAndPeriod) | **GET** /v0/plannen_roosteren/roster_slots | Return the roster slots of a unit (referred to with either a team_id or unit_id) within the specified period. Slots which are incidentally changed in time contain a ShiftAssignment with the adjusted times and no employee.
[**movesRosterSlotAPIClearAssignmentsV2**](MovesRosterSlotApi.md#movesRosterSlotAPIClearAssignmentsV2) | **DELETE** /v0/plannen_roosteren/roster_slots/{roster_slot_id}/clear_assignments | Clears all ShiftAssignments for the specified RosterSlot.
[**movesRosterSlotAPIOnCallByTeamId**](MovesRosterSlotApi.md#movesRosterSlotAPIOnCallByTeamId) | **GET** /v0/plannen_roosteren/teams/{team_id}/on_call_rosterslots | Return the on call roster slots of a Team on the specified date.
[**movesRosterSlotAPIOnCallByUnitAndDate**](MovesRosterSlotApi.md#movesRosterSlotAPIOnCallByUnitAndDate) | **GET** /v0/plannen_roosteren/roster_slots/on_call | Return the on call roster slots of a unit on the specified date.

<a name="movesRosterSlotAPIAssign"></a>
# **movesRosterSlotAPIAssign**
> MovesRosterSlot movesRosterSlotAPIAssign(body, rosterSlotId)

Assigns a RosterSlot to an Employee by creating a ShiftAssignment for it.

Requires &#x60;employeeId&#x60;, &#x60;timelineShiftId&#x60; and &#x60;date&#x60;. Optional fields (&#x60;beginTime&#x60;, &#x60;endTime&#x60;, &#x60;startBreakTime&#x60;, &#x60;stopBreakTime&#x60;, &#x60;externalExpertiseProfileId&#x60;) allow full shift customization. To explicitly remove a break or an external expertise profile from the assignment, send &#x60;null&#x60; or an empty string for the respective field(s). If optional fields are provided, their values will overwrite the original shift&#x27;s values. An optional &#x60;order&#x60; assigns the employee to a specific spot when the shift has multiple positions. &#x60;order&#x60; does not modify the base shift or its default values, it only selects which spot this assignment occupies.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesRosterSlotApi();
let body = new NedapOnsApi.MovesShiftAssignment(); // MovesShiftAssignment | The shift assignment to be added
let rosterSlotId = "rosterSlotId_example"; // String | The {id} of the roster slot

apiInstance.movesRosterSlotAPIAssign(body, rosterSlotId, (error, data, response) => {
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
 **body** | [**MovesShiftAssignment**](MovesShiftAssignment.md)| The shift assignment to be added | 
 **rosterSlotId** | **String**| The {id} of the roster slot | 

### Return type

[**MovesRosterSlot**](MovesRosterSlot.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="movesRosterSlotAPIById"></a>
# **movesRosterSlotAPIById**
> MovesRosterSlot movesRosterSlotAPIById(id)

Return the roster slot with the specified id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesRosterSlotApi();
let id = 789; // Number | The id of the requested roster slot

apiInstance.movesRosterSlotAPIById(id, (error, data, response) => {
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
 **id** | **Number**| The id of the requested roster slot | 

### Return type

[**MovesRosterSlot**](MovesRosterSlot.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="movesRosterSlotAPIByTeamId"></a>
# **movesRosterSlotAPIByTeamId**
> MovesListRosterSlotList movesRosterSlotAPIByTeamId(teamId, from, to)

Return the roster slots of a Team within the specified period. Slots which are incidentally changed in time contain a ShiftAssignment with the adjusted times and no employee.

This endpoint is deprecated. Please use &#x60;GET /plannen_roosteren/roster_slots&#x60; endpoint instead.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesRosterSlotApi();
let teamId = 789; // Number | The {id} of the requested team
let from = new Date("2013-10-20"); // Date | The start date of the requested period
let to = new Date("2013-10-20"); // Date | The end date of the requested period (exclusive)

apiInstance.movesRosterSlotAPIByTeamId(teamId, from, to, (error, data, response) => {
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
 **teamId** | **Number**| The {id} of the requested team | 
 **from** | **Date**| The start date of the requested period | 
 **to** | **Date**| The end date of the requested period (exclusive) | 

### Return type

[**MovesListRosterSlotList**](MovesListRosterSlotList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="movesRosterSlotAPIByUnitAndPeriod"></a>
# **movesRosterSlotAPIByUnitAndPeriod**
> MovesListRosterSlotList movesRosterSlotAPIByUnitAndPeriod(from, to, opts)

Return the roster slots of a unit (referred to with either a team_id or unit_id) within the specified period. Slots which are incidentally changed in time contain a ShiftAssignment with the adjusted times and no employee.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesRosterSlotApi();
let from = new Date("2013-10-20"); // Date | The start date of the requested period
let to = new Date("2013-10-20"); // Date | The end date of the requested period (exclusive)
let opts = { 
  'teamId': "teamId_example", // String | The id of the requested unit in Ons Administration
  'unitId': 789 // Number | The id of the requested unit in Ons Planning
};
apiInstance.movesRosterSlotAPIByUnitAndPeriod(from, to, opts, (error, data, response) => {
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
 **from** | **Date**| The start date of the requested period | 
 **to** | **Date**| The end date of the requested period (exclusive) | 
 **teamId** | **String**| The id of the requested unit in Ons Administration | [optional] 
 **unitId** | **Number**| The id of the requested unit in Ons Planning | [optional] 

### Return type

[**MovesListRosterSlotList**](MovesListRosterSlotList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="movesRosterSlotAPIClearAssignmentsV2"></a>
# **movesRosterSlotAPIClearAssignmentsV2**
> movesRosterSlotAPIClearAssignmentsV2(rosterSlotId, opts)

Clears all ShiftAssignments for the specified RosterSlot.

Clears all shift assignments by default. When the &#x60;order&#x60; parameter is provided, only clears the assignment for the specified shift spot.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesRosterSlotApi();
let rosterSlotId = "rosterSlotId_example"; // String | The {id} of the roster slot
let opts = { 
  'order': 56 // Number | The `order` of the specific shift spot to clear. If not provided, all assignments will be cleared.
};
apiInstance.movesRosterSlotAPIClearAssignmentsV2(rosterSlotId, opts, (error, data, response) => {
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
 **rosterSlotId** | **String**| The {id} of the roster slot | 
 **order** | **Number**| The &#x60;order&#x60; of the specific shift spot to clear. If not provided, all assignments will be cleared. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="movesRosterSlotAPIOnCallByTeamId"></a>
# **movesRosterSlotAPIOnCallByTeamId**
> MovesListRosterSlotList movesRosterSlotAPIOnCallByTeamId(teamId, _date)

Return the on call roster slots of a Team on the specified date.

This endpoint is deprecated. Please use &#x60;GET /plannen_roosteren/roster_slots/on_call&#x60; endpoint instead.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesRosterSlotApi();
let teamId = 789; // Number | The {id} of the requested team
let _date = new Date("2013-10-20"); // Date | The requested date

apiInstance.movesRosterSlotAPIOnCallByTeamId(teamId, _date, (error, data, response) => {
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
 **teamId** | **Number**| The {id} of the requested team | 
 **_date** | **Date**| The requested date | 

### Return type

[**MovesListRosterSlotList**](MovesListRosterSlotList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="movesRosterSlotAPIOnCallByUnitAndDate"></a>
# **movesRosterSlotAPIOnCallByUnitAndDate**
> MovesListRosterSlotList movesRosterSlotAPIOnCallByUnitAndDate(_date, opts)

Return the on call roster slots of a unit on the specified date.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesRosterSlotApi();
let _date = new Date("2013-10-20"); // Date | The requested date
let opts = { 
  'teamId': "teamId_example", // String | The id of the requested unit in Ons Administration
  'unitId': 789 // Number | The id of the requested unit in Ons Planning
};
apiInstance.movesRosterSlotAPIOnCallByUnitAndDate(_date, opts, (error, data, response) => {
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
 **_date** | **Date**| The requested date | 
 **teamId** | **String**| The id of the requested unit in Ons Administration | [optional] 
 **unitId** | **Number**| The id of the requested unit in Ons Planning | [optional] 

### Return type

[**MovesListRosterSlotList**](MovesListRosterSlotList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

