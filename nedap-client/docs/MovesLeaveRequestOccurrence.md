# NedapOnsApi.MovesLeaveRequestOccurrence

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timelineId** | **Number** | Same value for all LeaveRequestOccurrences generated from the same Availability. | [optional] 
**_date** | **Date** | Date on which this LeaveRequestOccurrence occurs. | [optional] 
**employeeId** | **Number** | Refers to the Employee this LeaveRequestOccurrence belongs to. | [optional] 
**beginTime** | **Date** | Time at which the LeaveRequest begins. For longer LeaveRequests, this DateTime will not be on the same Date as the date attribute. | [optional] 
**endTime** | **Date** | Time at which the LeaveRequest ends. For longer LeaveRequests, this DateTime will not be on the same Date as the date attribute. | [optional] 
**status** | **String** | Status of the LeaveRequest | [optional] 
