# NedapOnsApi.MovesEmployeeScheduleDay

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_date** | **Date** | The logical date for the EmployeeScheduleItems, which can be different from the actual date. | [optional] 
**employeeScheduleItems** | [**[MovesEmployeeScheduleItem]**](MovesEmployeeScheduleItem.md) | List of items rostered, planned, or otherwise scheduled for the Employee in Ons Planning.  The order of items is the same as the order in whicn Ons Planning displays them. Items should be displayed in this same order by other applications. | [optional] 
**onsdraaiboekMyPlanningUrl** | **String** | Link to view the planning of this day in OnsDraaiboek. | [optional] 
**onsdraaiboekMyRosterUrl** | **String** | Link to view the roster of this day in OnsDraaiboek. | [optional] 
**partiallyUnpublished** | **Boolean** | If true, one of more teams have not published their roster/planning, and information contained in this EmployeeScheduleDay is incomplete. | [optional] 
