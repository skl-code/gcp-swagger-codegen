# NedapOnsApi.AgendaUnavailability

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Identifier of this &#x60;Unavailability&#x60;. Only used when updating an existing model. | [optional] 
**title** | **String** | Title of the unavailability. Max 140 characters allowed. | 
**employeeId** | **Number** | Id of the employee for which the unavailability is created | 
**startDate** | **Date** | The day on which the unavailability occurs. If a recurrence rule is supplied, then the date represents the day of the first occurrence. In combination with the time fields, this is used as base for calculating the other occurrences. May only be allowed to be created X weeks in the future depending on &#x27;Fixed Weeks&#x27; setting of Agenda | 
**startTime** | **String** | The time the unavailability starts. When both startTime and endTime are omitted or null, an unavailability spanning the entire day will be created. Rounded down to the nearest whole minute. | [optional] 
**endTime** | **String** | The time the unavailability ends. When both startTime and endTime are omitted or null, an unavailability spanning the entire day will be created. Rounded down to the nearest whole minute. | [optional] 
**recurrenceRule** | [**AgendaRecurrenceRule**](AgendaRecurrenceRule.md) |  | [optional] 
