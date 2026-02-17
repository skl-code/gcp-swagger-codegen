# NedapOnsApi.MovesUnavailabilityOccurrence

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timelineId** | **Number** | Same value for all UnavailabilityOccurrences generated from the same Unavailability. | [optional] 
**_date** | **Date** |  | [optional] 
**employeeId** | **Number** |  | [optional] 
**typeName** | **String** | Human-readable name indicating kind of Unavailability. For examle \&quot;Sick\&quot; or \&quot;Holiday\&quot;. | [optional] 
**typeAbbreviation** | **String** | Short (one or two characters) representation that can be used instead of typeName when space is limited. | [optional] 
**allDay** | **Boolean** | Indicates if this UnavailabilityOccurrence last the whole. | [optional] 
**beginTime** | **Date** |  | [optional] 
**endTime** | **Date** |  | [optional] 
**note** | **String** |  | [optional] 
**exportable** | **Boolean** | Indicates if this UnavailabilityOccurrence will be exported. Only available through specific APIs. | [optional] 
