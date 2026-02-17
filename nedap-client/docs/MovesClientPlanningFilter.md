# NedapOnsApi.MovesClientPlanningFilter

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientId** | **Number** |  | [optional] 
**reason** | **String** |  | [optional] 
**availabilityName** | **String** | The availabiltity type name: e.g. Sick, Vacation, etc. | [optional] 
**comment** | **String** |  | [optional] 
**validFrom** | **Date** |  | [optional] 
**validTo** | **Date** |  | [optional] 
**teamScope** | **String** | To which team(s) is this filter applied. When &#x27;only&#x27; or &#x27;except&#x27;, team properties should be filled. Other possible values: &#x27;all&#x27;, &#x27;none&#x27;. | [optional] 
**teamId** | **Number** |  | [optional] 
**teamName** | **String** | The name of the team | [optional] 
**teamType** | [**MovesUnitType**](MovesUnitType.md) |  | [optional] 
**teamCode** | **String** | The customer&#x27;s internal identifier for the team | [optional] 
**startTime** | **String** |  | [optional] 
**stopTime** | **String** |  | [optional] 
