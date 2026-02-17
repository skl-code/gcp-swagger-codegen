# NedapOnsApi.CarepathIntentTemplate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **String** | Object identifier | [optional] 
**timelineUuid** | **String** | UUID for the timeline that groups this Intent with other Intents. | 
**duration** | **Number** | Duration in days | 
**offset** | **Number** | Offset in days | 
**hourTypeId** | **Number** | The HourType of the Intent | 
**frequency** | **Number** | The number of times this intent is present within the recurrence interval. It can be seen as the multiplier of the quantity. For example in &#x27;3 times 4 hours every week&#x27;, 3 is the frequency. | 
**quantityAmount** | **Number** | The amount matching the quantity | 
**quantityUnit** | **String** | The Intent&#x27;s quantity unit, for example MINUTE or HOUR. In combination with the quantity amount, it determines the quantity of th the care that is intended. For example: - 2, HOUR means &#x27;2 hours&#x27; - 120, MINUTE means &#x27;120 minutes&#x27; | 
**recurrenceInterval** | **Number** | The recurrence interval | 
**recurrenceType** | **String** | Together with the recurrence interval, the recurrence type determines how the intent is repeated over time. Examples: - 1, WEEK corresponds to &#x27;every week&#x27; - 2, DAY corresponds to &#x27;every 2 days&#x27; or &#x27;every other day&#x27; | 
**sourceDescription** | **String** | Free text description. | [optional] 
