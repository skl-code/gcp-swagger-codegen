# NedapOnsApi.MovesPlanCardOccurrencePlanRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_date** | **Date** | Date to plan the plan card to. | 
**occurrenceId** | **String** | The ID that links to this specific plan card occurrence | 
**planCardChecksum** | **String** | The url-encoded checksum used to check if planning changes are made with the correct updated data | 
**planCardTimelineId** | **Number** | The timeline id that links this plan card occurrence to the other moments that were planned in the past and in the future | 
**fixedStartTime** | **String** | The local fixed start time on which this PlanCardOccurrence should occur. This time remains the same when going through DST changes. When set to null, the start time will be calculated automatically. | [optional] 
**incidental** | **Boolean** | Whether this plan action is an incidental action | [optional] 
**assignment** | [**MovesContainerAssignment**](MovesContainerAssignment.md) |  | [optional] 
**beforePlanCard** | [**MovesPlanCardOccurrenceId**](MovesPlanCardOccurrenceId.md) |  | [optional] 
**afterPlanCard** | [**MovesPlanCardOccurrenceId**](MovesPlanCardOccurrenceId.md) |  | [optional] 
