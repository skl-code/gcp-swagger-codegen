# NedapOnsApi.MovesShift

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Composite id with id and date | [optional] 
**code** | **String** | Shift code | [optional] 
**description** | **String** | Shift description | [optional] 
**expertiseProfileId** | **Number** | Which expertise profile is needed for this shift | [optional] 
**teamId** | **Number** | To which team does this shift belong | [optional] 
**createdById** | **Number** | Deprecated since 01-04-2021 (no-joke): Its an internal property | [optional] 
**updatedById** | **Number** | Deprecated since 01-04-2021 (no-joke): Its an internal property | [optional] 
**deletedById** | **Number** | Deprecated since 01-04-2021 (no-joke): Its an internal property | [optional] 
**validFrom** | **Date** | When is the shift valid | [optional] 
**validTo** | **Date** |  | [optional] 
**transportationMethodId** | **Number** | Which transportation method is used for the shift? Deprecated since 01-04-2021 (no-joke): Its an internal property | [optional] 
**monday** | **Boolean** | Is the shift &#x27;active&#x27; on monday? | [optional] 
**tuesday** | **Boolean** | Is the shift &#x27;active&#x27; on tuesday? | [optional] 
**wednesday** | **Boolean** | Is the shift &#x27;active&#x27; on wednesday? | [optional] 
**thursday** | **Boolean** | Is the shift &#x27;active&#x27; on thursday? | [optional] 
**friday** | **Boolean** | Is the shift &#x27;active&#x27; on friday? | [optional] 
**saturday** | **Boolean** | Is the shift &#x27;active&#x27; on saturday? | [optional] 
**sunday** | **Boolean** | Is the shift &#x27;active&#x27; on sunday? | [optional] 
**startTimes** | **String** | Array of all the start times of the shift | [optional] 
**stopTimes** | **String** | Array of all the stop times of the shift | [optional] 
**breakType** | **Number** | &lt;pre&gt; breakType: Possible values: 0: no break 1: use breakLength 2: use startBreakTimes and stopBreakTimes &lt;/pre&gt; | [optional] 
**breakLength** | **Number** | Break length in minutes | [optional] 
**startBreakTimes** | **String** | Array of all the break start times | [optional] 
**stopBreakTimes** | **String** | Array of all the break stop times | [optional] 
**dayPart** | **Number** | In which day part is this shift operating in | [optional] 
**_number** | **Number** | Is used by guess_description_number Deprecated since 01-04-2021 (no-joke): Its an internal property | [optional] 
**timelineId** | **Number** | Is used by the ActsAsPlacedOnTimeline plugin | [optional] 
**exportAssignments** | **Boolean** | Export shiftassignments as indirect time | [optional] 
**exportHourTypeId** | **Number** | Which hourtype needs to be exported | [optional] 
**exportGroupCare** | **Boolean** | Do we need to export the hours as GroupCare hours? | [optional] 

<a name="BreakTypeEnum"></a>
## Enum: BreakTypeEnum

* `_0` (value: `0`)
* `_1` (value: `1`)
* `_2` (value: `2`)

