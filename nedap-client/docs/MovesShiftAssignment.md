# NedapOnsApi.MovesShiftAssignment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**_date** | **Date** |  | [optional] 
**beginTime** | **Date** | Effective begin time (based on the shift or incidental) | [optional] 
**endTime** | **Date** | Effective end time (based on the shift or incidental) | [optional] 
**shiftId** | **String** | Composed from the timeline_id and date: \&quot;413@2019-05-01\&quot; | [optional] 
**shiftName** | **String** | Name of the shift | [optional] 
**employeeId** | **Number** |  | [optional] 
**employeeLeadingName** | **String** |  | [optional] 
**employeeName** | **String** |  | [optional] 
**externalExpertiseProfileId** | **Number** | Effective expertise profile (based on the shift or incidentally changed) | [optional] 
**expertiseProfileName** | **String** | Name of the effective expertise profile | [optional] 
**onCall** | **Boolean** | Is it an on-call (bereikbaarheidsdienst) shift | [optional] 
**timelineShiftId** | **Number** | To what shift does it belong | [optional] 
**unitId** | **Number** | To what unit/team does it belong | [optional] 
**breakDuration** | **Number** | How long is the break (in minutes) | [optional] 
**incidental** | **Boolean** | Has one of the following fields been changed in comparison to the original shift (begin/end time, start/stop break time and/or expertise profile). | [optional] 
**order** | **Number** | Order of ShiftAssignments if there are multiple on the same date and shift. | [optional] 
**startBreakTime** | **Date** | Effective start break time (based on the shift or incidental) | [optional] 
**stopBreakTime** | **Date** | Effective stop break time (based on the shift or incidental) | [optional] 
**discardedAt** | **Date** | Shift Assignments are not hard-deleted, but marked as discarded. When the Shift Assignment is discarded, discardedAt shows when this was discarded. | [optional] 
**exportable** | **Boolean** | Indicates if this ShiftAssignnment will be exported. Only available through specific APIs. | [optional] 
