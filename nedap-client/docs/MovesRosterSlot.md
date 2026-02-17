# NedapOnsApi.MovesRosterSlot

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**_date** | **Date** |  | [optional] 
**beginTime** | **Date** | Regular begin time of the Shift. The date component of this field is always the same as the date of this RosterSlot. | [optional] 
**beginBreakTime** | **Date** | Regular begin time of the break in this Shift (if any). Can be after midnight, relative to the date of this RosterSlot. | [optional] 
**endBreakTime** | **Date** | Regular end time of the break in this Shift (if any). Can be after midnight, relative to the date of this RosterSlot. | [optional] 
**endTime** | **Date** | Regular end time of this Shift. Can be after midnight, relative to the date of this RosterSlot. | [optional] 
**note** | **String** |  | [optional] 
**code** | **String** | The code of the Shift. Usually a shortend version of the description. | [optional] 
**description** | **String** | The description of the Shift. | [optional] 
**transportationMethodName** | **String** | Name of the transportation method of the Shift. | [optional] 
**transportationMethodImage** | **String** | Image of the transportation method of the Shift.  Possible values: &lt;pre&gt; car person bike moped train bus unknown &lt;/pre&gt; | [optional] 
**expertiseProfileName** | **String** | Name of expertise required for this RosterSlot. | [optional] 
**teamName** | **String** | Name of the team this RosterSlot belongs to. | [optional] 
**shiftId** | **String** |  | [optional] 
**externalExpertiseProfileId** | **Number** | Id of the related expertise profile in OA | [optional] 
**externalTeamId** | **Number** | Id of the related team in OA | [optional] 
**authorizesForLocationId** | **Number** | Being assigned as Employee for the Team or Shift implies authorization for this Location. | [optional] 
**locationAuthorizations** | [**[MovesLocationAuthorization]**](MovesLocationAuthorization.md) | Being assigned as Employee for the Team or Shift implies authorization for these Locations. | [optional] 
**shiftAssignments** | [**[MovesShiftAssignment]**](MovesShiftAssignment.md) |  | [optional] 
**flexRequests** | [**[MovesFlexRequest]**](MovesFlexRequest.md) |  | [optional] 
**flexSignups** | [**[MovesFlexSignup]**](MovesFlexSignup.md) |  | [optional] 
**plannedVisits** | [**[MovesPlannedVisit]**](MovesPlannedVisit.md) | The PlannedVisits that are planned to this RosterSlot. | [optional] 
