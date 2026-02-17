# NedapOnsApi.AgendaClientAbsenceOccurrence

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The id of this object | [optional] 
**startDate** | **Date** | The start date of this occurrence | [optional] 
**endDate** | **Date** | The end date of this occurrence | [optional] 
**startTime** | **String** | The start time of this occurrence | [optional] 
**endTime** | **String** | The end date of this occurrence | [optional] 
**recurrenceType** | [**RecurrenceType**](RecurrenceType.md) |  | [optional] 
**cycleInterval** | **Number** | The interval of the recurrences | [optional] 
**validFrom** | **Date** | The date on which the series this occurrence belongs to starts | [optional] 
**validTo** | **Date** | The date on which the series this occurrence belongs to ends | [optional] 
**timelineId** | **Number** | The id of the timeline this series belongs to | [optional] 
**note** | **String** | A note about the absence; can be any string of text put in by the employee. | [optional] 
**status** | [**AgendaClientAbsenceStatus**](AgendaClientAbsenceStatus.md) |  | [optional] 
**monday** | **Boolean** | Boolean that defines whether the absence recurs on Mondays | [optional] 
**tuesday** | **Boolean** | Boolean that defines whether the absence recurs on Tuesdays | [optional] 
**wednesday** | **Boolean** | Boolean that defines whether the absence recurs on Wednesdays | [optional] 
**thursday** | **Boolean** | Boolean that defines whether the absence recurs on Thursdays | [optional] 
**friday** | **Boolean** | Boolean that defines whether the absence recurs on Fridays | [optional] 
**saturday** | **Boolean** | Boolean that defines whether the absence recurs on Saturdays | [optional] 
**sunday** | **Boolean** | Boolean that defines whether the absence recurs on Sundays | [optional] 
**clientAbsenceReasonId** | **Number** | The id of the reason of absence | [optional] 
**clientId** | **Number** | The id of the client | [optional] 
