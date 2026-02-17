# NedapOnsApi.MovesEmployeeScheduleItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rosterSlot** | [**MovesRosterSlot**](MovesRosterSlot.md) |  | [optional] 
**unavailabilityOccurrence** | [**MovesUnavailabilityOccurrence**](MovesUnavailabilityOccurrence.md) |  | [optional] 
**directlyPlannedVisits** | [**[MovesPlannedVisit]**](MovesPlannedVisit.md) | PlannedVisits that have been directly planned to the Employee.  When directlyPlannedVisits is set, rosterSlot, unavailabilityOccurrence, availabilityOccurrence and leaveRequestOccurrence are all null. | [optional] 
**availabilityOccurrence** | [**MovesAvailabilityOccurrence**](MovesAvailabilityOccurrence.md) |  | [optional] 
**leaveRequestOccurrence** | [**MovesLeaveRequestOccurrence**](MovesLeaveRequestOccurrence.md) |  | [optional] 
**displayCategory** | **String** | Indicates how this item should be presented to the user. &lt;pre&gt; working not-working not-working-tentative available flex-signed-up &lt;/pre&gt; | [optional] 
**onsdraaiboekUrl** | **String** | URL to OnsDraaiboek where this item can be found. | [optional] 
