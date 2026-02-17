# NedapOnsApi.MovesPlanCardOccurrence

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**occurrenceId** | **String** | The ID that links to this specific plan card occurrence | 
**planCardChecksum** | **String** | The url-encoded checksum used to check if planning changes are made with the correct updated data | 
**planCardTimelineId** | **Number** | The timeline id that links this plan card occurrence to the other moments that were planned in the past and in the future | 
**clientId** | **Number** | The identifier of the client that is linked to this plan card | 
**hourTypeId** | **Number** | The identifier of the hour type attached to this planned care moment | 
**durationInSeconds** | **Number** | The total duration in seconds that this planned care moment is going to take. | 
**travelTimeBeforeInSeconds** | **Number** | The total duration in seconds that is calculated to travel from the previous plan card to this plan card | 
**travelTimeAfterInSeconds** | **Number** | The total duration in seconds that is calculated to travel from the current plan card to the next plan card | 
**transportationMethodId** | **Number** | The identifier of the transportation method that is being used to travel to this plan card | 
**_date** | **Date** | Date on which this PlanCardOccurrence occurs. | 
**startDateTime** | **Date** | Date and start time on which this PlanCardOccurrence occurs. | 
**fixedStartTime** | **String** | The local fixed start time on which this PlanCardOccurrence should occur. This time remains the same when going through DST changes. | 
**incidental** | **Boolean** | Whether this PlanCardOccurrence has been incidentally changed for only this date | 
**canceled** | **Boolean** | Whether this PlanCardOccurrence has been incidentally canceled for this date | 
**address** | [**MovesPlannedAddress**](MovesPlannedAddress.md) |  | 
**assignment** | [**MovesContainerAssignment**](MovesContainerAssignment.md) |  | 
**recurrence** | [**MovesPlanCardRecurrenceInformation**](MovesPlanCardRecurrenceInformation.md) |  | 
