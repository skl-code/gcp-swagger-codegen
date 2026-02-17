# NedapOnsApi.GroupcareGroup

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**name** | **String** |  | [optional] 
**startTime** | **String** |  | [optional] 
**endTime** | **String** |  | [optional] 
**minimumCapacity** | **Number** | Minimum capacity of a group (only notifies user in the browser about this in Groupcare) | [optional] 
**maximumCapacity** | **Number** | Maximum capacity of a group, can go up to 99 (only notifies user in the browser about this in Groupcare) | [optional] 
**expiresAfter** | **Date** | After this date the Group is not visible anymore in Groupcare (together with archived) | [optional] 
**archived** | **Boolean** |  | [optional] 
**useLocationAuthorisation** | **Boolean** | Use location based authorisation for this group, instead of adding employees manually (with employee_ids) | [optional] 
**useAgendaAppointments** | **Boolean** | Store appointments of this group in Agenda, where it also should be registered (not normal Groupcare flow, see Groupregistration project) | [optional] 
**locationId** | **Number** |  | [optional] 
**teamId** | **Number** |  | [optional] 
**employeeIds** | **[Number]** |  | [optional] 
**activityIds** | **[Number]** |  | [optional] 
**uuid** | **String** |  | [optional] 
**monday** | **Boolean** | Needed to recreate agenda appointments for the Groupregistration project | [optional] 
**tuesday** | **Boolean** |  | [optional] 
**wednesday** | **Boolean** |  | [optional] 
**thursday** | **Boolean** |  | [optional] 
**friday** | **Boolean** |  | [optional] 
**saturday** | **Boolean** |  | [optional] 
**sunday** | **Boolean** |  | [optional] 
**cycleInterval** | **Number** |  | [optional] 
**recurrenceType** | **String** |  | [optional] 
