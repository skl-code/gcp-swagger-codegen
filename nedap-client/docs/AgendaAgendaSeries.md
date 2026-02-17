# NedapOnsApi.AgendaAgendaSeries

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Identifier of this &#x60;AgendaSeries&#x60; | [optional] 
**timelineId** | **Number** | Identifier of the &#x60;AgendaSeries&#x60;  Exceptions to the series have the same &#x60;timelineId&#x60; as the series. | [optional] 
**uuid** | **String** | External reference for AgendaSeries. Optional field. If not needed it is adviced to exclude this; in that case it will be auto-generated. If it is needed, i.e. for own bookkeeping purposes, it must be an unique value within AgendaSeries and should follow pattern described by  https://dev.mysql.com/doc/refman/8.0/en/miscellaneous-functions.html#function_is-uuid  | [optional] 
**groupUuid** | **String** |  | [optional] 
**name** | **String** | Short summary of the event | [optional] 
**comment** | **String** | Longer description of the event, notes | [optional] 
**hourTypeId** | **Number** | Identifier of HourType  When using the per-client product selection (part of _uitgebreide workflow_), use the &#x60;hourTypeId&#x60; field in the client invitation instead | [optional] 
**validFrom** | **Date** | Start date of the appointment series | 
**validTo** | **Date** | Recurrence end date  If recurring, the event is recurring up to this date (exclusive) | [optional] 
**startTime** | **String** | Start time of the event | 
**endTime** | **String** | End time of the event | 
**duration** | **Number** | Duration in seconds | [optional] [default to 0]
**recurrenceType** | [**RecurrenceType**](RecurrenceType.md) |  | [optional] 
**cycleInterval** | **Number** | Interval length of the series  For a recurrenceType of &#x60;weekly&#x60;, an interval of &#x60;2&#x60; means this event happens every 2 weeks. | [optional] [default to 0]
**cycleBase** | **Date** | Start date of the recurrence, should be equal to &#x60;validFrom&#x60; | [optional] 
**customLocation** | **String** |  | [optional] 
**creatorObjectId** | **Number** |  | [optional] 
**monday** | **Boolean** | Weekly event occurs on monday | [optional] 
**tuesday** | **Boolean** | Weekly event occurs on tuesday | [optional] 
**wednesday** | **Boolean** | Weekly event occurs on wednesday | [optional] 
**thursday** | **Boolean** | Weekly event occurs on thursday | [optional] 
**friday** | **Boolean** | Weekly event occurs on friday | [optional] 
**saturday** | **Boolean** | Weekly event occurs on saturday | [optional] 
**sunday** | **Boolean** | Weekly event occurs on sunday | [optional] 
**clientPresent** | **Boolean** | Whether the client is expected in this event | [optional] 
**travelTimeBefore** | **Number** | Travel time (in minutes) prior to the event.  This number must be between 0 and 1440 (range is inclusive). The Agenda setting &#x27;show travel time&#x27; must be enabled, supplying this field when the setting is disabled will yield an error. When the setting is enabled and the field is not supplied, the value will default to 0. | [optional] 
**travelTimeAfter** | **Number** | Travel time (in minutes) following the event.  This number must be between 0 and 1440 (range is inclusive). The Agenda setting &#x27;show travel time&#x27; must be enabled, supplying this field when the setting is disabled will yield an error. When the setting is enabled and the field is not supplied, the value will default to 0. | [optional] 
**agendaInvitations** | [**[AgendaAgendaInvitation]**](AgendaAgendaInvitation.md) | Clients, locations, teams or employees invited to this appointment  Does not support clients when using per-client product selection (part of _uitgebreide workflow_). When per-client product selection is enabled, use &#x60;agendaClientInvitations&#x60; instead to invite clients. | [optional] 
**agendaClientInvitations** | [**[AgendaAgendaClientInvitation]**](AgendaAgendaClientInvitation.md) | Clients invited to this occurrence  When _not_ using per-client product selection (part of _uitgebreide workflow_) use &#x60;agendaInvitations&#x60; instead to invite clients. | [optional] 
**labels** | [**[AgendaLabel]**](AgendaLabel.md) |  | [optional] 
