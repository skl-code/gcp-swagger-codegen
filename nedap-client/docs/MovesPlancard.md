# NedapOnsApi.MovesPlancard

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hourTypeId** | **Number** |  | [optional] 
**hourTypeName** | **String** |  | [optional] 
**hourTypeCode** | **String** |  | [optional] 
**duration** | **Number** | Duration of this Plancard in seconds. | [optional] 
**note** | **String** | The note added to this Plancard in the planscreen. | [optional] 
**promisedStart** | **Date** | The entered start time of this Plancard. This time is an intent, not a guarantee. | [optional] 
**dayPart** | **Number** | Daypart on which this Plancard is defined in the care arrangement.  &lt;pre&gt; 1 - Morning 2 - Afternoon 3 - Evening 0 - Night (Night-plancards generally occur after Evening-plancards for the same date) null - Incidentally added Plancard that is not linked to a care arrangement. &lt;/pre&gt; | [optional] 
**deleted** | **Boolean** | Indicates if this Planccard has been incidentally deleted. | [optional] 
**cycleBase** | **Date** | The date from which the recurrence pattern is calculated (usually a Sunday) | [optional] 
**cycleInterval** | **Number** | The plancard occurs every N-days | [optional] 
**cycleOffset** | **Number** | The number of days from cycleBase the plancard occurs, effectively indicating a day of the week. Usually [0-6], 0 is Sunday | [optional] 
**originalCycleOffset** | **Number** | When the plancard was incidentally moved, this attribute holds the original value of cycleOffset. | [optional] 
**incidentallyChanged** | **Boolean** | The information on this plancard is different from its regular/structural state. | [optional] 
**instanceOfType** | **String** | Either &#x27;PatternRule&#x27; (a regular plancard created from the care arrangement) or &#x27;EventRule&#x27; (a plancard that was incidentally added from the planscreen) | [optional] 
**instanceOfId** | **Number** | Reference to &#x27;PatternRule&#x27;-record in case &#x60;instanceOfType&#x60; is &#x60;PatternRule&#x60; | [optional] 
**kind** | **String** | Unused | [optional] 
**exportable** | **Boolean** | Indicates if this Plancard will be exported. Only available through specific APIs. | [optional] 
