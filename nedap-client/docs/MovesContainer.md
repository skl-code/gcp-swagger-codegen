# NedapOnsApi.MovesContainer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containerId** | **String** | The unique identifier that links to this specific Shift or Employee. Only used for referring to assignments. | 
**containerType** | [**MovesContainerType**](MovesContainerType.md) |  | 
**containerChecksum** | **String** | The url-encoded checksum used to check if planning changes to this container are made with the correct updated data. | 
**employeeId** | **Number** | The employee identifier linked to this container | [optional] 
**shiftTimelineId** | **Number** | The timeline of the shift linked to this container | [optional] 
**unitId** | **Number** | The identifier of the unit that is attached to this container. | 
**rosterSlotId** | **String** | The shift occurrence id of this container (only for shifts). | [optional] 
**expertiseProfileIds** | **[Number]** | A list of expertise profiles of this container (only for shifts). | [optional] 
**_date** | **Date** | Date on which this container occurs. | 
**startDateTime** | **Date** | The date and time on which this container is supposed to start. Includes timezone information to account for DST changes. | 
**endDateTime** | **Date** | The date and time on which this container is supposed to end. Includes timezone information to account for DST changes. | 
**timeBlocks** | [**[MovesContainerTimeBlock]**](MovesContainerTimeBlock.md) | Blocks of time in which plan cards are (not) allowed to be planned in. | 
